import Wrapper from "../../components/layout/wrapper";
import fetch from "isomorphic-unfetch";
import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import styled from "styled-components";
import ActivityCard from "../../components/activity-card";
import { AuthContext } from "../_app";

import Router, { useRouter } from "next/router";
import Skeleton from "../../components/skeleton";
import { Container } from "../../components/layout/container";
import { PageHeader } from "../../components/pageHeader";
import SubNav from "../../components/subnav";
import Link from "next/link";
import { Button } from "../../components/button";

const ActivitiesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
  grid-gap: ${props => props.theme.tokens.spacing.L.value};

  @media (max-width: ${props => props.theme.tokens.mediaQueries.small}) {
    grid-template-columns: 1fr;
  }
`;

let activitiesFetchUrl;

const Activities = props => {
  // const { cookies } = props;
  const router = useRouter();
  const { page } = router.query;
  const { auth } = props;
  const value = React.useContext(AuthContext);
  const cookies = value.cookies;

  let [activities, setActivities] = React.useState([]);
  let [loading, setLoading] = React.useState(true);
  let [pageState, setPageState] = React.useState(1);
  let [nextPageUrl, setNextPageUrl] = React.useState("");
  let [previousPageUrl, setPreviousPageUrl] = React.useState("");
  let [isFirstPage, setIsFirstPage] = React.useState(true);

  let currentTime = Date.now() / 1000;
  let access_token = value.cookies.access_token;

  React.useEffect(() => {
    if (cookies.access_token) {
      // do nothing
      if (page) {
        activitiesFetchUrl =
          "https://www.strava.com/api/v3/athlete/activities?per_page=30&page=" +
          page;
        setNextPageUrl("/activities?page=" + (Number(page) + 1));
        setIsFirstPage(false);

        if (page >= 2) {
          setPreviousPageUrl("/activities?page=" + (Number(page) - 1));
        } else if (page == 1) {
          setPreviousPageUrl("/activities");
          setIsFirstPage(true);
        }
      } else {
        activitiesFetchUrl =
          "https://www.strava.com/api/v3/athlete/activities?per_page=30&page=1";

        setNextPageUrl("/activities?page=" + 2);
        setIsFirstPage(true);
      }

      fetch(activitiesFetchUrl, {
        method: "get",
        headers: {
          "content-type": "application/json",
          authorization: "Bearer " + access_token
        }
      })
        .then(function(response) {
          return response.json();
        })
        .then(json => {
          // console.log("ACTIVITIES: data fetched");

          setActivities(json);
          setLoading(false);
        });
    } else {
      // console.log("ACTIVITIES: No Auth");
      Router.push("/");
    }
  }, [auth, page, value]);

  let parentVariants = {
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05
      }
    },
    hide: {
      opacity: 0
    }
  };

  let childrenVariants = {
    show: {
      y: 0,
      opacity: 1,
      scale: 1,
      rotateX: 0,
      transition: { type: "spring", stiffness: 800, damping: 40 }
    },
    hide: { y: 70, opacity: 0, scale: 0.9, rotateX: -45 }
  };

  let ActivitiesPaginator = styled.div`
    margin-top: ${props => props.theme.tokens.spacing.L.value};
    margin-bottom: ${props => props.theme.tokens.spacing.L.value};
    text-align: center;
    display: flex;
    justify-content: flex-start;
    a {
      flex-grow: 50%;

      &:first-of-type {
        padding-right: ${props => props.theme.tokens.spacing.S.value};
      }
    }
  `;

  return (
    <Wrapper props={props}>
      <Container>
        <SubNav></SubNav>
        <div>
          <PageHeader>All Activities</PageHeader>
          {loading ? (
            <motion.div exit={{ opacity: 0 }}>
              <Skeleton />
            </motion.div>
          ) : (
            <AnimatePresence>
              <motion.div
                exit={{ opacity: 0 }}
                initial={"hide"}
                variants={parentVariants}
                animate={"show"}
              >
                <ActivitiesGrid>
                  {activities.map(activity => (
                    <motion.div
                      key={activity.id}
                      variants={childrenVariants}
                      initial={"hide"}
                      exit={{ opacity: 0 }}
                    >
                      <ActivityCard activity={activity} user={props.user} />
                    </motion.div>
                  ))}
                </ActivitiesGrid>
                <ActivitiesPaginator>
                  {isFirstPage ? (
                    ""
                  ) : (
                    <Link href={previousPageUrl} as={previousPageUrl}>
                      <a>
                        <Button label={"← Previous page"}></Button>
                      </a>
                    </Link>
                  )}

                  <Link href={nextPageUrl} as={nextPageUrl}>
                    <a>
                      <Button label={"Next page →"}></Button>
                    </a>
                  </Link>
                </ActivitiesPaginator>
              </motion.div>
            </AnimatePresence>
          )}
        </div>
      </Container>
    </Wrapper>
  );
};

export default Activities;

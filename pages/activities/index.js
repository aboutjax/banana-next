import Wrapper from "../../components/layout/wrapper";
import fetch from "isomorphic-unfetch";
import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import styled from "styled-components";
import ActivityCard from "../../components/actvitity-card";
import Router from "next/router";
import { useRouter } from "next/router";
import Skeleton from "../../components/skeleton";
import SubNav from "../../components/subnav";

const Container = styled.div`
  background-color: ${props => props.theme.colors.background};
  padding: ${props => props.theme.tokens.spacing.XXL.value};
  position: relative;

  grid-column-start: 2;
  grid-column-end: 3;

  grid-row-start: 2;
  grid-row-end: 3;

  grid-column-gap: ${props => props.theme.tokens.spacing.XXL.value};

  display: grid;
  grid-template-columns: 200px 1fr;

  @media (max-width: ${props => props.theme.tokens.mediaQueries.small}) {
    display: grid;
    min-width: auto;
    width: 100%;
    grid-row-gap: ${props => props.theme.tokens.spacing.XL.value};

    grid-template-rows: 60px 1fr;
    grid-template-columns: 1fr;

    grid-column-start: 1;
    grid-column-end: 4;

    padding: ${props => props.theme.tokens.spacing.L.value};
  }
`;

const PageHeader = styled.h3`
  margin-top: 0;
  margin-bottom: ${props => props.theme.tokens.spacing.L.value};
`;

let activitiesFetchUrl;

const Activities = props => {
  const { allCookies } = props;
  const router = useRouter();
  const { page } = router.query;

  let [activities, setActivities] = React.useState([]);
  let [loading, setLoading] = React.useState(true);

  if (page) {
    activitiesFetchUrl =
      "https://www.strava.com/api/v3/athlete/activities?per_page=40&page=" +
      page;
  } else {
    activitiesFetchUrl =
      "https://www.strava.com/api/v3/athlete/activities?per_page=40&page=1";
  }

  let currentTime = Date.now() / 1000;
  let access_token = allCookies.access_token;
  let expires_at = allCookies.expires_at;

  React.useEffect(() => {
    if (!access_token) {
      // console.log("from /activities: no access token");
      Router.push("/");
    } else if (parseInt(expires_at) < currentTime) {
      // console.log("from /activities: token expired");
    } else {
      // console.log("from /activities: access token found");
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
          // console.log(json);

          setActivities(json);
          setLoading(false);
        });
    }
  }, [access_token]);

  let parentVariants = {
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
        // delayChildren: 0.3
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
      transition: { type: "spring", stiffness: 300, damping: 50 }
    },
    hide: { y: 40, opacity: 0 }
  };

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
                {activities.map(activity => (
                  <motion.div
                    key={activity.id}
                    variants={childrenVariants}
                    initial={"hide"}
                    exit={{ opacity: 0 }}
                  >
                    <ActivityCard activity={activity} />
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>
          )}
        </div>
      </Container>
    </Wrapper>
  );
};

Activities.getInitialProps = async () => {
  return {};
};

// Activities.getInitialProps = token => {
//   // let access_token = cookies.access_token;

//   let parseToken = stringify(token);

//   console.log(token);

//   // let page = this.props.match.params.page || 1;
//   let page = 1;
//   let activitiesFetchUrl =
//     "https://www.strava.com/api/v3/athlete/activities?page=" + page;

//   // let response = await fetch(activitiesFetchUrl, {
//   //   method: "get",
//   //   headers: {
//   //     "content-type": "application/json",
//   //     authorization: "Bearer " + parseToken
//   //   }
//   // });

//   // let activities = response.json();

//   return "token";
// };

export default Activities;

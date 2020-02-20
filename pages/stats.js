import styled from "styled-components";
import Skeleton from "../components/skeleton";
import React from "react";
import Wrapper from "../components/layout/wrapper";
import SubNav from "../components/subnav";
import { StatCard } from "../components/achievements/card";
import { motion, AnimatePresence } from "framer-motion";
import moment from "moment";

const Container = styled.div`
  background-color: ${props => props.theme.colors.background};
  padding: ${props => props.theme.tokens.spacing.XXL.value};
  position: relative;
  padding-top: 0;

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
    padding-top: 0;
  }
`;

const PageHeader = styled.h3`
  margin-top: 0;
  margin-bottom: ${props => props.theme.tokens.spacing.L.value};
`;

const StatsGrid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-auto-rows: minmax(150px, auto);
  grid-gap: 1em;
`;

const Stats = props => {
  // States
  let [loading, setLoading] = React.useState(true);
  let [user, setUser] = React.useState({});
  let [userId, setUserId] = React.useState("");
  let [stats, setStats] = React.useState();
  let [totalMovingTime, setTotalMovingTime] = React.useState(0);

  // Cookies
  const { allCookies } = props;
  let access_token = allCookies.access_token;

  React.useEffect(() => {
    // Fetch urls
    let athleteFetchUrl = "https://www.strava.com/api/v3/athlete";
    let athleteActivityStatsFetchUrl =
      "https://www.strava.com/api/v3/athletes/" + userId + "/stats";
    // let requestUrls = [athleteFetchUrl, athleteActivityStatsFetchUrl];

    if (!access_token) {
      console.log("from /year-review: no access token");
      Router.push("/");
    } else {
      console.log("from /year-review: access token found");

      async function asyncFetch(url) {
        const response = await fetch(url, {
          method: "get",
          headers: {
            "content-type": "application/json",
            authorization: "Bearer " + access_token
          }
        });
        return response.json();
      }

      asyncFetch(athleteFetchUrl)
        .then(json => {
          setUser(json);
          setUserId(json.id);
          setLoading(true);

          return json.id;
        })
        .then(id => {
          asyncFetch(
            "https://www.strava.com/api/v3/athletes/" + id + "/stats"
          ).then(json => {
            setStats(json);

            let duration = moment.duration(
              json.all_ride_totals.moving_time,
              "seconds"
            );
            let durationAsHours = duration.asHours();

            function round(value, decimals) {
              return Number(
                Math.round(value + "e" + decimals) + "e-" + decimals
              );
            }

            setTotalMovingTime(round(durationAsHours, 1)); // 1.01);

            setLoading(false);
          });
        });
    }
  }, [access_token]);

  console.log(stats);

  const parentVariants = {
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.5
      }
    },
    hide: { opacity: 0 }
  };

  return (
    <Wrapper props={props}>
      <Container>
        <SubNav></SubNav>
        <div>
          {loading ? (
            <Skeleton />
          ) : (
            <AnimatePresence>
              <StatsGrid
                exit={{ opacity: 0 }}
                initial={"hide"}
                variants={parentVariants}
                animate={"show"}
              >
                <StatCard
                  type={5}
                  value={stats.all_ride_totals.count}
                  label="total rides"
                  unit="rides"
                ></StatCard>
                <StatCard
                  type={2}
                  value={Math.floor(
                    stats.all_ride_totals.distance / 1000
                  ).toLocaleString()}
                  label="total distance"
                  unit="km"
                ></StatCard>
                <StatCard
                  type={1}
                  value={Math.floor(
                    stats.all_ride_totals.elevation_gain
                  ).toLocaleString()}
                  label="Elevation gain"
                  unit="m"
                ></StatCard>
                <StatCard
                  type={4}
                  value={totalMovingTime}
                  label="Total time"
                  unit="hours"
                ></StatCard>
              </StatsGrid>
            </AnimatePresence>
          )}
        </div>
      </Container>
    </Wrapper>
  );
};

export default Stats;

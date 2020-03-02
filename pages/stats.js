import styled from "styled-components";
import Router from "next/router";
import Skeleton from "../components/skeleton";
import React from "react";
import Wrapper from "../components/layout/wrapper";
import SubNav from "../components/subnav";
import { StatCard } from "../components/achievements/card";
import { motion, AnimatePresence } from "framer-motion";
import moment from "moment";
import { AuthContext, useAuthState } from "./_app";

import { asyncFetch } from "../components/fetchHelper";

const Container = styled.div`
  background-color: ${props => props.theme.colors.background};
  padding: ${props => props.theme.tokens.spacing.XL.value};
  position: relative;
  padding-top: 0;

  grid-column-start: 2;
  grid-column-end: 3;

  grid-row-start: 2;
  grid-row-end: 3;

  grid-gap: ${props => props.theme.tokens.spacing.XXL.value};

  display: grid;
  grid-template-columns: 200px 1fr;

  @media (max-width: ${props => props.theme.tokens.mediaQueries.small}) {
    display: grid;
    min-width: auto;
    width: 100%;
    grid-gap: ${props => props.theme.tokens.spacing.XL.value};

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
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  grid-auto-rows: minmax(150px, auto);
  grid-gap: ${props => props.theme.tokens.spacing.XL.value};

  @media (max-width: ${props => props.theme.tokens.mediaQueries.small}) {
    grid-template-columns: 1fr;
  }
`;

const Stats = props => {
  // States
  let [loading, setLoading] = React.useState(true);
  let [stats, setStats] = React.useState({});
  let [totalMovingTime, setTotalMovingTime] = React.useState(0);
  const { user } = useAuthState();

  // Cookies
  // const { cookies } = props;
  const value = React.useContext(AuthContext);
  const cookies = value.cookies;
  let access_token = cookies.access_token;

  // Stats

  React.useEffect(() => {
    let athleteActivityStatsFetchUrl =
      "https://www.strava.com/api/v3/athletes/" + user.id + "/stats";

    asyncFetch(athleteActivityStatsFetchUrl, access_token)
      .then(data => {
        return data.json();
      })
      .then(json => {
        setStats(json);

        let duration = moment.duration(
          json.all_ride_totals.moving_time,
          "seconds"
        );
        let durationAsHours = duration.asHours();

        function round(value, decimals) {
          return Number(Math.round(value + "e" + decimals) + "e-" + decimals);
        }

        setTotalMovingTime(round(durationAsHours, 1)); // 1.01);

        setLoading(false);
      });
  }, []);

  const parentVariants = {
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
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

import React from "react";
import Link from "next/link";
import styled from "styled-components";
import ActivityMap from "./map";
import moment from "moment";
import { motion } from "framer-motion";
import { whileHover, whileTap } from "../interactions/cursor";
import { useAuthState } from "../pages/_app";

const Card = styled(motion.div)`
  background: ${props => props.theme.colors.cardBackground};
  height: 190px;
  cursor: pointer;
  padding: 0;
  border-radius: ${props => props.theme.tokens.borderRadius.value};
  width: 100%;
  display: grid;
  overflow: hidden;
  grid-template-rows: 1fr 1fr;
  grid-template-columns: 190px 1fr;

  @media (max-width: ${props => props.theme.tokens.mediaQueries.small}) {
    padding: ${props => props.theme.tokens.spacing.M.value};
    grid-template-columns: 50px 1fr;
    grid-template-rows: 1fr auto;
    height: auto;
  }
`;

const CardMeta = styled.div`
  padding: ${props => props.theme.tokens.spacing.M.value};
  display: grid;
  grid-template-rows: minMax(auto, 100px) 1fr;
  width: 100%;
  @media (max-width: ${props => props.theme.tokens.mediaQueries.small}) {
    padding: 0;
    padding-left: ${props => props.theme.tokens.spacing.L.value};
    grid-template-rows: auto;
  }
`;

const MetaGroup = styled.div`
  display: flex;
  flex-direction: column;

  @media (max-width: ${props => props.theme.tokens.mediaQueries.small}) {
    margin-right: ${props => props.theme.tokens.spacing.L.value};
  }
`;
const MetaHeader = styled.p`
  margin-top: 0;
  margin-bottom: 3px;
`;

const MetaDescription = styled.p`
  opacity: 0.5;
  margin: 0;
`;

const MetaRowLarge = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: end;
  grid-column-gap: ${props => props.theme.tokens.spacing.M.value};
  @media (max-width: ${props => props.theme.tokens.mediaQueries.small}) {
    display: none;
  }
`;

const MetaRowSmall = styled.div`
  display: none;

  padding-top: ${props => props.theme.tokens.spacing.L.value};
  @media (max-width: ${props => props.theme.tokens.mediaQueries.small}) {
    display: flex;
  }
`;

function ActivityCard({ activity }) {
  const { user } = useAuthState();

  // Rounding helper
  function round_to_precision(x, precision) {
    var y = +x + (precision === undefined ? 0.5 : precision / 2);
    return y - (y % (precision === undefined ? 1 : +precision));
  }

  let activityStartTime = moment(activity.start_date_local);
  let friendlyFormat = activityStartTime.format("MMM Do YYYY [at] h:mm a");

  // Distance
  let activityDistance = round_to_precision(activity.distance / 1000, 0.5);
  let activityDistanceImperial = round_to_precision(
    (activity.distance / 1000) * 0.621371,
    0.5
  );
  let displayActvityDistance =
    user.measurement_preference == "meters"
      ? activityDistance
      : activityDistanceImperial;

  let displayActivityDistanceUnit =
    user.measurement_preference == "meters" ? "km" : "mi";

  // Elevation Gain
  let activityTotalElevationGain = round_to_precision(
    activity.total_elevation_gain,
    0.5
  );
  let activityTotalElevationGainImperial = round_to_precision(
    activity.total_elevation_gain * 3.28084,
    0.5
  );
  let displayActivityTotalElevationGain =
    user.measurement_preference == "meters"
      ? activityTotalElevationGain
      : activityTotalElevationGainImperial;

  let displayActivityTotalElevationGainUnit =
    user.measurement_preference == "meters" ? "m" : "ft";

  let activityMovingTime = moment.duration(activity.moving_time, "seconds");
  let activityMovingTimeHours = activityMovingTime.get("hours");
  let activityMovingTimeMinutes = activityMovingTime.get("minutes");
  let activityMovingTimeSeconds = activityMovingTime.get("seconds");

  return (
    <Link href={"/activities/[activity]"} as={`/activities/${activity.id}`}>
      <Card whileHover={whileHover} whileTap={whileTap}>
        <ActivityMap
          type={activity.start_latlng ? "map" : "nomap"}
          polyline={activity.map.summary_polyline}
        ></ActivityMap>
        <CardMeta>
          <MetaGroup>
            <MetaHeader>{activity.name}</MetaHeader>
            <MetaDescription>{friendlyFormat}</MetaDescription>
          </MetaGroup>
          <MetaRowLarge>
            <MetaGroup>
              <MetaHeader>
                {displayActvityDistance} {displayActivityDistanceUnit}
              </MetaHeader>
              <MetaDescription>Distance</MetaDescription>
            </MetaGroup>
            <MetaGroup>
              <MetaHeader>
                {activityMovingTimeHours}:{activityMovingTimeMinutes}:
                {activityMovingTimeSeconds}
              </MetaHeader>
              <MetaDescription>Duration</MetaDescription>
            </MetaGroup>
            <MetaGroup>
              <MetaHeader>
                {displayActivityTotalElevationGain}{" "}
                {displayActivityTotalElevationGainUnit}
              </MetaHeader>
              <MetaDescription>Elevation</MetaDescription>
            </MetaGroup>
          </MetaRowLarge>
        </CardMeta>
        <MetaRowSmall>
          <MetaGroup>
            <MetaHeader>{activityDistance} km</MetaHeader>
            <MetaDescription>Distance</MetaDescription>
          </MetaGroup>
          <MetaGroup>
            <MetaHeader>
              {activityMovingTimeHours}:{activityMovingTimeMinutes}:
              {activityMovingTimeSeconds}
            </MetaHeader>
            <MetaDescription>Duration</MetaDescription>
          </MetaGroup>
          <MetaGroup>
            <MetaHeader>{activityTotalElevationGain} km</MetaHeader>
            <MetaDescription>Elevation</MetaDescription>
          </MetaGroup>
        </MetaRowSmall>
      </Card>
    </Link>
  );
}

export default ActivityCard;

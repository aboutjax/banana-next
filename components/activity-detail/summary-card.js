import React from "react";
import styled from "styled-components";
import moment from "moment";
import { useAuthState } from "../../pages/_app";

const Summary = styled.div`
  padding: ${props => props.theme.tokens.spacing.L.value};
  background: ${props => props.theme.colors.cardBackground}};
  border-radius: ${props => props.theme.tokens.borderRadius.value};
  margin: ${props => props.theme.tokens.spacing.L.value} 0;
  overflow: hidden;

  @media (max-width: ${props => props.theme.tokens.mediaQueries.small}) {
    padding: 0;
  }
`;

const MetaGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: ${props => props.theme.tokens.spacing.L.value};

  @media (max-width: ${props => props.theme.tokens.mediaQueries.small}) {
    margin-right: ${props => props.theme.tokens.spacing.L.value};
    flex-direction: row-reverse;
    padding: ${props => props.theme.tokens.spacing.M.value};
    width: 100%;
    justify-content: flex-end;
    border-bottom: 1px solid ${props => props.theme.colors.background}};
  }

  &:last-of-type {
    border-bottom: none;
  }
`;
const MetaHeader = styled.p`
  margin-top: 0;
  margin-bottom: 3px;
`;

const MetaDescription = styled.p`
  opacity: 0.5;
  margin: 0;
  @media (max-width: ${props => props.theme.tokens.mediaQueries.small}) {
    margin-right: ${props => props.theme.tokens.spacing.L.value};
    width: 70px;
  }
`;

const MetaRowLarge = styled.div`
  display: flex;
  /* grid-template-columns: 1fr 1fr 1fr 1fr 1fr; */
  /* align-items: end; */
  /* grid-column-gap: ${props => props.theme.tokens.spacing.M.value}; */
  @media (max-width: ${props => props.theme.tokens.mediaQueries.small}) {
    margin-right: ${props => props.theme.tokens.spacing.L.value};
    flex-direction: column;
    width: 100%;
    
  }
`;

// Rounding helper
function round_to_precision(x, precision) {
  var y = +x + (precision === undefined ? 0.5 : precision / 2);
  return y - (y % (precision === undefined ? 1 : +precision));
}

export const SummaryCard = props => {
  let data = props.activitySummary;
  const { user } = useAuthState();

  // Start time
  let activityStartTime = moment(data.start_date_local);
  let friendlyFormat = activityStartTime.format("MMM Do YYYY [at] h:mm a");

  // Distance
  let activityDistance = round_to_precision(data.distance / 1000, 0.5);
  let activityDistanceImperial = round_to_precision(
    (data.distance / 1000) * 0.621371,
    0.5
  );
  let displayActivityDistance =
    user.measurement_preference == "meters"
      ? activityDistance
      : activityDistanceImperial;

  let displayActivityDistanceUnit =
    user.measurement_preference == "meters" ? "km" : "mi";

  // Elevation Gain
  let activityTotalElevationGain = round_to_precision(
    data.total_elevation_gain,
    0.5
  );
  let activityTotalElevationGainImperial = round_to_precision(
    data.total_elevation_gain * 3.28084,
    0.5
  );
  let displayActivityTotalElevationGain =
    user.measurement_preference == "meters"
      ? activityTotalElevationGain
      : activityTotalElevationGainImperial;

  let displayActivityTotalElevationGainUnit =
    user.measurement_preference == "meters" ? "m" : "ft";

  // Moving Time
  let activityMovingTime = moment.duration(data.moving_time, "seconds");
  let activityMovingTimeHours = activityMovingTime.get("hours");
  let activityMovingTimeMinutes = activityMovingTime.get("minutes");
  let activityMovingTimeSeconds = activityMovingTime.get("seconds");

  // Calories
  let activityCalories = parseInt(data.calories);
  let formatedCalories = activityCalories.toLocaleString();

  // Kudos
  let activityKudos = data.kudos_count;

  return (
    <Summary>
      <MetaRowLarge>
        <MetaGroup>
          <MetaHeader>
            {displayActivityDistance} {displayActivityDistanceUnit}
          </MetaHeader>
          <MetaDescription>Distance</MetaDescription>
        </MetaGroup>
        <MetaGroup>
          <MetaHeader>
            {displayActivityTotalElevationGain}{" "}
            {displayActivityTotalElevationGainUnit}
          </MetaHeader>
          <MetaDescription>Elevation</MetaDescription>
        </MetaGroup>
        <MetaGroup>
          <MetaHeader>
            {activityMovingTimeHours}:{activityMovingTimeMinutes}:
            {activityMovingTimeSeconds}
          </MetaHeader>
          <MetaDescription>Duration</MetaDescription>
        </MetaGroup>
        <MetaGroup>
          <MetaHeader>{formatedCalories}</MetaHeader>
          <MetaDescription>Calories</MetaDescription>
        </MetaGroup>
        <MetaGroup>
          <MetaHeader>{activityKudos}</MetaHeader>
          <MetaDescription>Kudos</MetaDescription>
        </MetaGroup>
      </MetaRowLarge>
    </Summary>
  );
};

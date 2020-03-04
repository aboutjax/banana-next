import {
  ResponsiveContainer,
  ComposedChart,
  LineChart,
  AreaChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Area
} from "recharts";
import useMedia from "use-media";
import _ from "lodash";
import styled from "styled-components";
import { useAuthState } from "../pages/_app";

const ChartContainer = styled.div`
  padding: ${props => props.theme.tokens.spacing.L.value};
  background: ${props => props.theme.colors.cardBackground}};
  border-radius: ${props => props.theme.tokens.borderRadius.value};
  margin: ${props => props.theme.tokens.spacing.L.value} 0;
  width: 100%;
  position: relative;
`;

let displayActivityDistanceUnit;

const Tick = ({
  payload: { value },
  verticalAnchor,
  visibleTicksCount,
  ...rest
}) => (
  <text style={{ fontSize: "12px" }} {...rest} dy={16}>
    {value} {displayActivityDistanceUnit}
  </text>
);

const CustomTooltipStyled = styled.div`
  background: ${props => props.theme.colors.cardBackground}};
  padding: ${props => props.theme.tokens.spacing.S.value}
    ${props => props.theme.tokens.spacing.M.value};
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.4);
  border-radius: ${props => props.theme.tokens.borderRadius.value};

  p {
    margin: 0;
  }
`;

const RenderLineChart = props => {
  const mediaDarkMode = useMedia("(prefers-color-scheme: dark)");
  let originalArray = props.data;
  console.log(originalArray);
  const [showHeartrate, setShowHeartrate] = React.useState(true);

  const { user } = useAuthState();

  displayActivityDistanceUnit =
    user.measurement_preference == "meters" ? "km" : "mi";

  let displayActivityTotalElevationGainUnit =
    user.measurement_preference == "meters" ? "m" : "ft";

  let displaySpeedUnit =
    user.measurement_preference == "meters" ? "kph" : "mph";

  // distance
  let distance = originalArray.filter(item => {
    return item.type.includes("distance");
  });
  let distanceStream = distance[0].data;
  let distanceInKm = distanceStream.map(item => {
    return _.round(item / 1000, 2);
  });
  let distanceInMi = _.map(distanceInKm, kmToMiles);

  let displayDistance =
    user.measurement_preference == "meters" ? distanceInKm : distanceInMi;

  console.log(displayDistance, distanceStream);

  // Altitude
  let altitudeStream = [];
  let altitude = originalArray.filter(item => {
    return item.type.includes("altitude");
  });
  if (altitude.length > 0) {
    altitudeStream = altitude[0].data;
  }

  // heartrate
  let heartrateStream = [];
  let heartrate = originalArray.filter(item => {
    return item.type.includes("heartrate");
  });
  if (heartrate.length > 0) {
    heartrateStream = heartrate[0].data;
  }

  // speed
  let speedStream = [];
  let speed = originalArray.filter(item => {
    return item.type.includes("velocity_smooth");
  });

  if (speed.length > 0) {
    speedStream = speed[0].data;
  }

  // Unit conversion function
  function toKPH(m) {
    let toKM = m / 1000;
    let toKPH = toKM * 60 * 60;

    return _.round(toKPH, 3);
  }

  function KPHtoMPH(kph) {
    let mph = kph * 0.621371;

    return _.round(mph, 3);
  }

  function kmToMiles(km) {
    let mi = km * 0.621371;

    return _.round(mi, 3);
  }

  let speedKPH = _.map(speedStream, toKPH);
  let speedMPH = _.map(speedKPH, KPHtoMPH);

  let displaySpeed =
    user.measurement_preference == "meters" ? speedKPH : speedMPH;

  let formattedData = displayDistance.map((distance, index) => ({
    distance: distance,
    altitude: altitudeStream[index],
    heartrate: heartrateStream[index],
    speed: displaySpeed[index]
  }));

  const CustomTooltip = props => {
    const { payload, label, active } = props;

    let items = payload.map(item => (
      <p style={{ color: item.stroke }} key={item.name}>
        {item.name}: {item.value} {item.unit}
      </p>
    ));

    if (active) {
      return (
        <CustomTooltipStyled>
          <p style={{ opacity: 0.5 }}>
            Distance: {label} {displayActivityDistanceUnit}
          </p>
          {items}
        </CustomTooltipStyled>
      );
    } else {
      return <div></div>;
    }
  };

  console.log(formattedData);

  return (
    <ChartContainer>
      <ResponsiveContainer width={"99%"} height={200}>
        <ComposedChart data={formattedData}>
          <Tooltip content={<CustomTooltip />} />
          <CartesianGrid></CartesianGrid>
          <XAxis
            tick={<Tick />}
            type="number"
            domain={[0, "dataMax"]}
            interval={"Number"}
            allowDecimals={true}
            dataKey="distance"
            minTickGap={20}
          ></XAxis>
          <YAxis
            tick={<Tick />}
            minTickGap={30}
            type="number"
            dataKey="altitude"
            orientation="right"
            hide={true}
          />

          <Area
            type="monotone"
            dataKey="altitude"
            stroke={mediaDarkMode ? "#fff" : "#000"}
            unit={displayActivityTotalElevationGainUnit}
            strokeWidth={0}
            dot={false}
            fill={mediaDarkMode ? "#fff" : "#000"}
            fillOpacity={0.2}
          />
          {showHeartrate ? (
            <Line
              type="monotone"
              dataKey="heartrate"
              unit="bpm"
              stroke="#DC524D"
              strokeWidth={1}
              dot={false}
            />
          ) : null}

          <Line
            type="monotone"
            dataKey="speed"
            unit={displaySpeedUnit}
            stroke="#0085FF"
            strokeWidth={1}
            // yAxisId="left"
            dot={false}
          />
        </ComposedChart>
      </ResponsiveContainer>
    </ChartContainer>
  );
};

export default RenderLineChart;

import React from "react";
import styled from "styled-components";
import useMedia from "use-media";

const googleApiKey = "AIzaSyAsyxYCjxLqi49yGUuqUJRa4cYN8V4VyLE";
// Google map style wizard: https://mapstyle.withgoogle.com/
let mapStyle = {
  width: "100%"
};

const Map = styled.div`
  width: 190px;
  height: 190px;
  flex-shrink: 0;
  background: #74ccef;
  opacity: 0.5;

  @media (max-width: ${props => props.theme.tokens.mediaQueries.small}) {
    width: 50px;
    height: 50px;
    border-radius: ${props => props.theme.tokens.borderRadius.value};
  }
`;

const MapImageLarge = styled.div`
  width: 190px;
  height: 190px;
  display: block;

  @media (max-width: ${props => props.theme.tokens.mediaQueries.small}) {
    display: none;
  }
`;

const MapImageSmall = styled.div`
  width: 50px;
  height: 50px;
  display: none;
  border-radius: ${props => props.theme.tokens.borderRadius.value};
  overflow: hidden;

  @media (max-width: ${props => props.theme.tokens.mediaQueries.small}) {
    display: block;
  }
`;

const ActivityMap = props => {
  const mediaDarkMode = useMedia("(prefers-color-scheme: dark)");
  let pathWeight = 4;
  let pathColor = "0x3B8BFFff";
  let mapDimensionSmall = "100x100";
  let mapDimensionLarge = "380x380";
  let mapStyle;
  if (mediaDarkMode) {
    mapStyle =
      "&format=png&maptype=roadmap&style=element:geometry%7Ccolor:0x212121&style=element:labels.icon%7Cvisibility:off&style=element:labels.text.fill%7Ccolor:0x757575&style=element:labels.text.stroke%7Ccolor:0x212121&style=feature:administrative%7Celement:geometry%7Ccolor:0x757575&style=feature:administrative.country%7Celement:labels.text.fill%7Ccolor:0x9e9e9e&style=feature:administrative.land_parcel%7Celement:labels%7Cvisibility:off&style=feature:administrative.locality%7Celement:labels.text.fill%7Ccolor:0xbdbdbd&style=feature:poi%7Celement:labels.text%7Cvisibility:off&style=feature:poi%7Celement:labels.text.fill%7Ccolor:0x757575&style=feature:poi.business%7Cvisibility:off&style=feature:poi.park%7Celement:geometry%7Ccolor:0x181818&style=feature:poi.park%7Celement:labels.text.fill%7Ccolor:0x616161&style=feature:poi.park%7Celement:labels.text.stroke%7Ccolor:0x1b1b1b&style=feature:road%7Celement:geometry.fill%7Ccolor:0x2c2c2c&style=feature:road%7Celement:labels.icon%7Cvisibility:off&style=feature:road%7Celement:labels.text.fill%7Ccolor:0x8a8a8a&style=feature:road.arterial%7Cvisibility:off&style=feature:road.arterial%7Celement:geometry%7Ccolor:0x373737&style=feature:road.highway%7Celement:geometry%7Ccolor:0x3c3c3c&style=feature:road.highway%7Celement:labels%7Cvisibility:off&style=feature:road.highway.controlled_access%7Celement:geometry%7Ccolor:0x4e4e4e&style=feature:road.local%7Cvisibility:off&style=feature:road.local%7Celement:labels%7Cvisibility:off&style=feature:road.local%7Celement:labels.text.fill%7Ccolor:0x616161&style=feature:transit%7Cvisibility:off&style=feature:transit%7Celement:labels.text.fill%7Ccolor:0x757575&style=feature:water%7Celement:geometry%7Ccolor:0x000000&style=feature:water%7Celement:labels.text.fill%7Ccolor:0x3d3d3d&size=";
  } else {
    mapStyle =
      "&format=png&maptype=roadmap&style=feature:water%7Celement:geometry.fill%7Ccolor:0x75cff0&size=";
  }

  let imageUrlSmall =
    "https://maps.googleapis.com/maps/api/staticmap?key=" +
    googleApiKey +
    "&path=weight:" +
    pathWeight +
    "%7Ccolor:" +
    pathColor +
    "%7Cenc:" +
    props.polyline +
    mapStyle +
    mapDimensionSmall;

  let imageUrlLarge =
    "https://maps.googleapis.com/maps/api/staticmap?key=" +
    googleApiKey +
    "&path=weight:" +
    pathWeight +
    "%7Ccolor:" +
    pathColor +
    "%7Cenc:" +
    props.polyline +
    mapStyle +
    mapDimensionLarge;

  if (props.type == "map") {
    return (
      <div>
        <MapImageLarge>
          <img
            src={imageUrlLarge}
            style={{
              width: "100%"
            }}
            alt=""
          />
        </MapImageLarge>
        <MapImageSmall>
          <img src={imageUrlSmall} style={{ width: "100%" }} alt="" />
        </MapImageSmall>
      </div>
    );
  } else {
    return (
      <div>
        <MapImageLarge>
          <div
            style={{
              width: "100%"
            }}
            alt=""
          />
        </MapImageLarge>
        <MapImageSmall>
          <div style={{ width: "100%" }} alt="" />
        </MapImageSmall>
      </div>
    );
  }
};

export default ActivityMap;

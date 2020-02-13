import React from "react";
import Link from "next/link";
import styled from "styled-components";
import getConfig from "next/config";
const { serverRuntimeConfig } = getConfig();

const Header = styled.h1`
  text-align: center;
`;

let authUrl = "https://strava-auth.herokuapp.com";

if (serverRuntimeConfig) {
  authUrl = "https://strava-auth.herokuapp.com";
} else {
  authUrl = "http://localhost:3000";
}

const Home = props => {
  return (
    <div>
      <Header>{process.env.SECRET}</Header>
    </div>
  );
};

export default Home;

import React from "react";
import Link from "next/link";
import styled from "styled-components";

const Header = styled.h1`
  text-align: center;
`;

let authUrl = "https://strava-auth.herokuapp.com";
if (process.env.NODE_ENV === "development") {
  authUrl = "http://localhost:3000";
} else {
  authUrl = "https://strava-auth.herokuapp.com";
}

const Home = props => {
  return (
    <div>
      <Header>Home</Header>
      <a href={authUrl}>Login with Strava</a>
    </div>
  );
};

export default Home;

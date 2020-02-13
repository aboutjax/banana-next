import React from "react";
import styled from "styled-components";

const Header = styled.h1`
  text-align: center;
`;

const Home = props => {
  return (
    <div>
      <Header>Home</Header>
      <a href="http://localhost:3000">Login with Strava</a>
    </div>
  );
};

export default Home;

import React from "react";
import Link from "next/link";
import styled from "styled-components";

const Header = styled.h1`
  text-align: center;
`;

const Home = props => {
  return (
    <div>
      <Header>{process.env.loginurl}</Header>
    </div>
  );
};

export default Home;

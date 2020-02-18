import React from "react";
import Router, { useRouter } from "next/router";
import styled from "styled-components";
import Wrapper from "../components/layout/wrapper";

let Container = styled.div`
  background-color: ${props => props.theme.colors.background};
  padding: ${props => props.theme.tokens.spacing.XXL.value};

  justify-self: stretch;

  grid-column-start: 2;
  grid-column-end: 3;

  grid-row-start: 2;
  grid-row-end: 3;

  @media (max-width: ${props => props.theme.tokens.mediaQueries.small}) {
    max-width: ${props => props.theme.tokens.mediaQueries.small};
    place-self: center;
    padding: ${props => props.theme.tokens.spacing.L.value};

    grid-column-start: 1;
    grid-column-end: 4;
  }
`;

const Home = props => {
  React.useEffect(() => {
    // console.log(props.allCookies);

    let cookies = props.allCookies;

    if (cookies.access_token) {
      // console.log("has token");
      // redirect to activities
      Router.push("/activities");
    } else {
      // console.log("no token");
    }
  }, []);
  return (
    <Wrapper>
      <Container>
        <h1>Musa sapientum</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos
          minus dolor quia quibusdam ut quisquam inventore optio sequi
          architecto, fuga velit nostrum ex amet voluptates dolorem enim ipsam
          ea odit.
        </p>
        <h2>Musa sapientum</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos
          minus dolor quia quibusdam ut quisquam inventore optio sequi
          architecto, fuga velit nostrum ex amet voluptates dolorem enim ipsam
          ea odit.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos
          minus dolor quia quibusdam ut quisquam inventore optio sequi
          architecto, fuga velit nostrum ex amet voluptates dolorem enim ipsam
          ea odit.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos
          minus dolor quia quibusdam ut quisquam inventore optio sequi
          architecto, fuga velit nostrum ex amet voluptates dolorem enim ipsam
          ea odit.
        </p>

        <h3>Musa sapientum</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos
          minus dolor quia quibusdam ut quisquam inventore optio sequi
          architecto, fuga velit nostrum ex amet voluptates dolorem enim ipsam
          ea odit.
        </p>
        <h4>Musa sapientum</h4>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos
          minus dolor quia quibusdam ut quisquam inventore optio sequi
          architecto, fuga velit nostrum ex amet voluptates dolorem enim ipsam
          ea odit.
        </p>
        <h5>Musa sapientum</h5>
        <p>Musa sapientum</p>
        <span>Musa sapientum</span>
      </Container>
    </Wrapper>
  );
};

export default Home;

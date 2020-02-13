import React from "react";
import styled from "styled-components";
import Wrapper from "../components/layout/wrapper";

let Container = styled.div`
  background-color: ${props => props.theme.colors.background};
  padding: ${props => props.theme.tokens.spacing.XXL.value};

  @media (max-width: ${props => props.theme.tokens.mediaQueries.small}) {
    padding: ${props => props.theme.tokens.spacing.M.value};
  }
`;

const Home = () => {
  return (
    <Wrapper>
      <Container>
        <h1>Musa sapientum</h1>
        <h2>Musa sapientum</h2>
        <h3>Musa sapientum</h3>
        <h4>Musa sapientum</h4>
        <h5>Musa sapientum</h5>
        <p>Musa sapientum</p>
        {/* <caption>Musa sapientum</caption> */}
      </Container>
    </Wrapper>
  );
};

export default Home;

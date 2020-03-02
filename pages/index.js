import React from "react";
import Router, { useRouter } from "next/router";
import styled from "styled-components";
import Link from "next/link";

import Wrapper from "../components/layout/wrapper";

let Container = styled.div`
  background-color: ${props => props.theme.colors.background};
  padding: ${props => props.theme.tokens.spacing.XXL.value};

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
  const { auth } = props;
  if (auth) {
    //
  } else {
    // Router.push("/");
  }
  // React.useEffect(() => {
  //   if (auth) {
  //     console.log("HOME: logged in");
  //     Router.push("/activities");
  //   } else {
  //     console.log("HOME: logged out");
  //   }
  // }, [auth]);
  return (
    <Wrapper>
      <Container>
        <h1>Header 1</h1>
        <Link href="/activities/2712024607">
          <a>Activity Detail</a>
        </Link>
        <br />
        <Link href="/test/[test]" as="/test/abc/">
          <a>Test Link</a>
        </Link>
        <h5>https://www.cram.com/essay/the-banana-plant/P3CJMRN2AC</h5>
        <p>
          Bananas are the fruit of a plant of the genus Musa, which are
          cultivated primarily for food, and secondarily for the production of
          fibers. It is alleged that there are almost 1000 varieties of bananas
          in the world, subdivided in 50 groups (Bora, 2007). The most generally
          known banana is the seedless Cavendish variety, which is the one
          produced for export markets and pronounced for consuming.
        </p>
        <h2>Header 2</h2>
        <p>
          The banana is the fruit of an herbaceous plant related to the orchid
          family and is most commonly found in tropical climate areas which
          become an exotic product of cold environment zones.
        </p>
        <h3>Header 3</h3>
        <p>
          The banana is believed to have originated in Southeast Asia and
          Malaysia, and cultivation could have started as early as 8000 BCE. The
          professionals believe that
        </p>

        <h4>Header 4</h4>

        <h5>Eyebrow</h5>
        <p>Musa sapientum</p>
        <span>Musa sapientum</span>
      </Container>
    </Wrapper>
  );
};

export default Home;

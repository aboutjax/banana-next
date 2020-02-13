import React from "react";
import Link from "next/link";
import styled from "styled-components";

const TopNavigation = styled.nav`
  background-color: ${props => props.theme.colors.background};
  padding: ${props => props.theme.tokens.spacing.XXL.value};

  @media (max-width: ${props => props.theme.tokens.mediaQueries.small}) {
    padding: ${props => props.theme.tokens.spacing.M.value};
  }
`;

const Nav = () => (
  <TopNavigation>
    <h4>banana</h4>
  </TopNavigation>
);

export default Nav;

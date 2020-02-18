import React from "react";
import Link from "next/link";
import Router from "next/router";
import styled from "styled-components";
import * as firebase from "firebase";
import { useCookies } from "react-cookie";

const TopNavigation = styled.nav`
  background-color: ${props => props.theme.colors.background};
  width: 100%;
  padding: ${props => props.theme.tokens.spacing.XL.value};
  display: flex;
  justify-content: space-between;
  align-items: center;

  grid-column-start: 1;
  grid-column-end: 4;

  grid-row-start: 1;
  grid-row-end: 2;

  @media (max-width: ${props => props.theme.tokens.mediaQueries.small}) {
    padding: ${props => props.theme.tokens.spacing.L.value};
  }

  h4 {
    margin: 0;
    cursor: pointer;
  }
`;

const NavLink = styled.a`
  color: ${props => props.theme.colors.text};
  text-decoration: none;
`;

const Nav = props => {
  const [cookies, setCookie, removeCookie] = useCookies([]);
  const [auth, setAuth] = React.useState(false);

  let logout = () => {
    removeCookie("access_token");
    removeCookie("firebase_token");
    removeCookie("refresh_token");
    removeCookie("expires_at");
    Router.replace("/");
    // firebase
    //   .auth()
    //   .signOut()
    //   .then(function() {
    //     // Sign-out successful.
    //   })
    //   .catch(function(error) {
    //     // An error happened.
    //   });
  };

  let authState = props.auth;

  return (
    <TopNavigation>
      <Link href="/">
        <h4 className="logo">banana</h4>
      </Link>
      {authState ? (
        <NavLink href="#" onClick={logout}>
          <h4>log out</h4>
        </NavLink>
      ) : (
        <NavLink href="https://banana-server.now.sh/">
          <h4>log in</h4>
        </NavLink>
      )}
    </TopNavigation>
  );
};

export default Nav;

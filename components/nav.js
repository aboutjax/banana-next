import React from "react";
import Link from "next/link";
import Router from "next/router";
import styled from "styled-components";
import { useCookies } from "react-cookie";
import { useAuthState } from "../pages/_app";

const TopNavigation = styled.nav`
  width: 100%;
  padding: ${props => props.theme.tokens.spacing.XL.value};
  display: flex;
  justify-content: space-between;
  align-items: center;

  grid-column-start: 1;
  grid-column-end: 4;

  grid-row-start: 1;
  grid-row-end: 2;
  z-index: 2;

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
  const { isAuthenticated } = useAuthState();
  const [cookies, setCookie, removeCookie] = useCookies([]);

  let logout = () => {
    removeCookie("access_token");
    removeCookie("firebase_token");
    removeCookie("refresh_token");
    removeCookie("expires_at");
    Router.reload();
    // Router.replace("/");
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

  // console.log(process.env.LOGIN_URL);

  return (
    <TopNavigation>
      <Link href="/">
        <h4>banana</h4>
      </Link>
      {isAuthenticated ? (
        <NavLink href="#" onClick={logout}>
          <h4>log out</h4>
        </NavLink>
      ) : (
        <NavLink href={process.env.LOGIN_URL}>
          <h4>log in</h4>
        </NavLink>
      )}
    </TopNavigation>
  );
};

export default Nav;

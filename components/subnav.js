import React from "react";
import styled from "styled-components";
import { useRouter } from "next/router";
import Link from "next/link";
import {
  IconAllActivities,
  IconYearInReview,
  IconFavourites
} from "./icons/icons";
import useMedia from "use-media";
import { motion } from "framer-motion";
import { whileHover, whileTap } from "../interactions/cursor";

const ActivitiesNav = styled.nav`
  display: grid;
  align-self: flex-start;
  margin-right: ${props => props.theme.tokens.spacing.M.value};
  grid-row-gap: ${props => props.theme.tokens.spacing.M.value};
  ${props => props.theme.tokens.spacing.S.value};
  position: sticky;
  top: ${props => props.theme.tokens.spacing.XXL.value};

  @media (max-width: ${props => props.theme.tokens.mediaQueries.small}) {
    display: flex;
    white-space: nowrap;
    overflow: auto;
    margin: 0;
    top: 0;

    position: static;
  }
  }
`;

const OverlayLight = styled(motion.div)`
  display: none;
  content: "";
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 70%;
  height: 70px;
  pointer-events: none;

  background: linear-gradient(
    270deg,
    rgba(255, 255, 255, 100) 0%,
    rgba(255, 255, 255, 0) 100%
  );

  @media (max-width: ${props => props.theme.tokens.mediaQueries.small}) {
    display: block;
  }
`;

const OverlayDark = styled.div`
  display: none;
  content: "";
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 70%;
  height: 70px;

  background: linear-gradient(
    270deg,
    rgba(0, 0, 0, 100) 0%,
    rgba(0, 0, 0, 0) 100%
  );

  @media (max-width: ${props => props.theme.tokens.mediaQueries.small}) {
    display: block;
  }
`;

const NavItem = styled(motion.li)`
  border-radius: ${props => props.theme.tokens.borderRadius.value};
  padding: ${props => props.theme.tokens.spacing.M.value}
    ${props => props.theme.tokens.spacing.L.value};
  list-style: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  background: ${props =>
    props.active === "true"
      ? props.theme.colors.cardBackground
      : props.theme.colors.background};

  svg {
    margin-right: ${props => props.theme.tokens.spacing.S.value};
  }
`;

function OverlayComponent(props) {
  if (props.theme) {
    return (
      <OverlayDark
        animate={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        style={{ pointerEvents: "none" }}
      ></OverlayDark>
    );
  } else {
    return (
      <OverlayLight
        animate={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        style={{ pointerEvents: "none" }}
      ></OverlayLight>
    );
  }
}
function SubNav(props) {
  const router = useRouter();
  const mediaDarkMode = useMedia("(prefers-color-scheme: dark)");

  // console.log(router);

  return (
    <ActivitiesNav>
      <OverlayComponent theme={mediaDarkMode}></OverlayComponent>
      <Link scroll={false} href="/activities">
        <NavItem
          whileHover={{ opacity: 0.8 }}
          whileTap={{ opacity: 1, scale: 0.9 }}
          active={
            router.route === "/activities" || router.route === "/"
              ? "true"
              : "false"
          }
        >
          <IconAllActivities
            theme={mediaDarkMode ? "dark" : "light"}
          ></IconAllActivities>
          All activities
        </NavItem>
      </Link>
      {/* <Link scroll={false} href="/favourites">
        <NavItem active={router.route === "/favourites" ? "true" : "false"}>
          <IconFavourites></IconFavourites>
          Favourites
        </NavItem>
      </Link> */}
      <Link scroll={false} href="/stats">
        <NavItem
          whileHover={whileHover}
          whileTap={whileTap}
          active={router.route === "/stats" ? "true" : "false"}
        >
          <IconYearInReview
            theme={mediaDarkMode ? "dark" : "light"}
          ></IconYearInReview>
          Stats
        </NavItem>
      </Link>
    </ActivitiesNav>
  );
}

export default SubNav;

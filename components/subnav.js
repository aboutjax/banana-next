import React from "react";
import styled from "styled-components";
import { useRouter } from "next/router";
import Link from "next/link";
import { IconAllActivities, IconYearInReview } from "./icons/icons";
import useMedia from "use-media";

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

const OverlayLight = styled.div`
display: none;
content: "";
position: absolute;
top: 0;
bottom: 0;
right: 0;
left: 70%;
height: 100px;
height: 
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

@media (max-width: ${props => props.theme.tokens.mediaQueries.small}) {
  display: block;
  content: "";
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 70%;
  height: 100px;
  height: 
  pointer-events: none;

  background: linear-gradient(
    270deg,
    rgba(0, 0, 0, 100) 0%,
    rgba(0, 0, 0, 0) 100%
  );
}
`;

const NavItem = styled.li`
  border-radius: ${props => props.theme.tokens.borderRadius.value};
  padding: ${props => props.theme.tokens.spacing.M.value};
  list-style: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  background: ${props =>
    props.active === "true"
      ? props.theme.colors.cardBackground
      : props.theme.colors.background};
  &:hover {
    opacity: 0.5;
  }

  svg {
    margin-right: ${props => props.theme.tokens.spacing.S.value};
  }
`;

function OverlayComponent(props) {
  if (props.theme === "dark") {
    return <OverlayDark></OverlayDark>;
  } else {
    return <OverlayLight></OverlayLight>;
  }
}
function SubNav(props) {
  const router = useRouter();
  const mediaDarkMode = useMedia("(prefers-color-scheme: dark)");

  // console.log(router);

  return (
    <ActivitiesNav>
      <OverlayComponent
        theme={mediaDarkMode ? "dark" : "light"}
      ></OverlayComponent>
      <Link href="/activities">
        <NavItem active={router.route === "/activities" ? "true" : "false"}>
          <IconAllActivities
            theme={mediaDarkMode ? "dark" : "light"}
          ></IconAllActivities>
          All activities
        </NavItem>
      </Link>
      {/* <Link href="/favourites">
        <NavItem active={router.route === "/favourites" ? "true" : "false"}>
          Favourites
        </NavItem>
      </Link> */}
      <Link href="/year-review">
        <NavItem active={router.route === "/year-review" ? "true" : "false"}>
          <IconYearInReview
            theme={mediaDarkMode ? "dark" : "light"}
          ></IconYearInReview>
          Year in Review
        </NavItem>
      </Link>
    </ActivitiesNav>
  );
}

export default SubNav;

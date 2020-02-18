import styled from "styled-components";
import Skeleton from "../components/skeleton";
import React from "react";
import Wrapper from "../components/layout/wrapper";
import SubNav from "../components/subnav";

const Container = styled.div`
  background-color: ${props => props.theme.colors.background};
  padding: ${props => props.theme.tokens.spacing.XXL.value};

  grid-column-start: 2;
  grid-column-end: 3;

  grid-row-start: 2;
  grid-row-end: 3;

  grid-column-gap: ${props => props.theme.tokens.spacing.XXL.value};

  display: grid;
  grid-template-columns: 200px 1fr;

  @media (max-width: ${props => props.theme.tokens.mediaQueries.small}) {
    display: grid;
    min-width: auto;
    width: 100%;
    grid-row-gap: ${props => props.theme.tokens.spacing.XXL.value};

    grid-template-rows: 60px 1fr;
    grid-template-columns: 1fr;

    grid-column-start: 1;
    grid-column-end: 4;

    padding: ${props => props.theme.tokens.spacing.L.value};
  }
`;

const PageHeader = styled.h3`
  margin-top: 0;
  margin-bottom: ${props => props.theme.tokens.spacing.L.value};
`;

const Favourites = props => {
  let [activities, setActivities] = React.useState([]);
  let [loading, setLoading] = React.useState(true);
  const { allCookies } = props;

  let access_token = allCookies.access_token;

  React.useEffect(() => {
    if (!access_token) {
      console.log("from /favourites: no access token");
      Router.push("/");
    } else {
      console.log("from /favourites: access token found");
    }
  }, [access_token]);

  return (
    <Wrapper props={props}>
      <Container>
        <SubNav></SubNav>
        <div>
          <PageHeader>Favourites</PageHeader>
          {loading ? (
            <Skeleton />
          ) : (
            activities.map(activity => (
              <ActivityCard key={activity.id} activity={activity} />
            ))
          )}
        </div>
      </Container>
    </Wrapper>
  );
};

export default Favourites;

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

const YearReview = props => {
  // States
  let [loading, setLoading] = React.useState(true);
  let [user, setUser] = React.useState({});
  let [userId, setUserId] = React.useState("");
  let [stats, setStats] = React.useState();

  // Cookies
  const { allCookies } = props;
  let access_token = allCookies.access_token;

  React.useEffect(() => {
    // Fetch urls
    let athleteFetchUrl = "https://www.strava.com/api/v3/athlete";
    let athleteActivityStatsFetchUrl =
      "https://www.strava.com/api/v3/athletes/" + userId + "/stats";
    // let requestUrls = [athleteFetchUrl, athleteActivityStatsFetchUrl];

    if (!access_token) {
      console.log("from /year-review: no access token");
      Router.push("/");
    } else {
      console.log("from /year-review: access token found");

      async function asyncFetch(url) {
        const response = await fetch(url, {
          method: "get",
          headers: {
            "content-type": "application/json",
            authorization: "Bearer " + access_token
          }
        });
        return response.json();
      }

      asyncFetch(athleteFetchUrl)
        .then(json => {
          setUser(json);
          setUserId(json.id);
          setLoading(true);

          return json.id;
        })
        .then(id => {
          asyncFetch(
            "https://www.strava.com/api/v3/athletes/" + id + "/stats"
          ).then(json => {
            setStats(json);

            setLoading(false);
          });
        });
    }
  }, [access_token]);

  return (
    <Wrapper props={props}>
      <Container>
        <SubNav></SubNav>
        <div>
          <PageHeader>Year in Review</PageHeader>
          {loading ? (
            <Skeleton />
          ) : (
            <div>
              <h2>{stats.biggest_ride_distance}</h2>
              <h2>{userId}</h2>
            </div>
          )}
        </div>
      </Container>
    </Wrapper>
  );
};

export default YearReview;

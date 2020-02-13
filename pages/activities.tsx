import Wrapper from "../components/layout/wrapper";
import { useCookies } from "react-cookie";
import fetch from "isomorphic-unfetch";
import React, { useEffect } from "react";
import styled from "styled-components";
import ActivityCard from "../components/actvitity-card";
import { stringify } from "querystring";

const Container = styled.div`
  background-color: ${props => props.theme.colors.background};
  padding: ${props => props.theme.tokens.spacing.XXL.value};
  max-width: 600px;
  margin: 0 auto;

  @media (max-width: ${props => props.theme.tokens.mediaQueries.small}) {
    padding: ${props => props.theme.tokens.spacing.M.value};
  }
`;

const Skeleton = styled.div`
  width: 600px;
  height: 300px;
  background-color: ${props => props.theme.colors.background};
  margin: 0 auto;
  display: block;
`;

const Activities = props => {
  const { accessToken } = props;

  let [activities, setActivities] = React.useState([]);
  let [loading, setLoading] = React.useState(true);

  let page = 1;
  let activitiesFetchUrl =
    "https://www.strava.com/api/v3/athlete/activities?page=" + page;

  React.useEffect(() => {
    fetch(activitiesFetchUrl, {
      method: "get",
      headers: {
        "content-type": "application/json",
        authorization: "Bearer " + accessToken
      }
    })
      .then(function(response) {
        return response.json();
      })
      .then(json => {
        console.log(json);

        setActivities(json);
        setLoading(false);
      });
  }, []);

  return (
    <Wrapper>
      <Container>
        <h3>All Activities</h3>
        {loading ? (
          <Skeleton />
        ) : (
          activities.map(activity => (
            <ActivityCard key={activity.id} activity={activity} />
          ))
        )}
      </Container>
    </Wrapper>
  );
};

// Activities.getInitialProps = token => {
//   // let access_token = cookies.access_token;

//   let parseToken = stringify(token);

//   console.log(token);

//   // let page = this.props.match.params.page || 1;
//   let page = 1;
//   let activitiesFetchUrl =
//     "https://www.strava.com/api/v3/athlete/activities?page=" + page;

//   // let response = await fetch(activitiesFetchUrl, {
//   //   method: "get",
//   //   headers: {
//   //     "content-type": "application/json",
//   //     authorization: "Bearer " + parseToken
//   //   }
//   // });

//   // let activities = response.json();

//   return "token";
// };

export default Activities;

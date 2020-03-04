import Wrapper from "../../components/layout/wrapper";
import { Button } from "../../components/button";
import { asyncFetch } from "../../components/fetchHelper";
import Router, { useRouter } from "next/router";
import styled from "styled-components";
import { ContainerActivityDetail } from "../../components/layout/container";
import React from "react";
import Skeleton from "../../components/skeleton";
import dynamic from "next/dynamic";
import moment from "moment";
import { SummaryCard } from "../../components/activity-detail/summary-card";
import { AuthContext } from "../_app";
import RenderLineChart from "../../components/activityCharts";

const MetaDescription = styled.p`
  opacity: 0.5;
  margin: 0;
`;

const PageHeader = styled.h3`
  margin-top: ${props => props.theme.tokens.spacing.L.value};
  margin-bottom: ${props => props.theme.tokens.spacing.M.value};
`;

const ActivityDetailLongScroll = styled.div`
  padding: ${props => props.theme.tokens.spacing.XL.value};
  padding-top: 100px;
  max-width: 1024px;

  @media (max-width: ${props => props.theme.tokens.mediaQueries.small}) {
    padding: ${props => props.theme.tokens.spacing.L.value};
    padding-top: 100px;
  }
`;

const DynamicMapboxLargeComponent = dynamic(
  () => import("../../components/activityDetailMap"),
  { ssr: false }
);

const DynamicMapboxSmallComponent = dynamic(
  () => import("../../components/activityDetailMapMini"),
  {
    ssr: false
  }
);

const LargeMapContainer = styled.div`
  display: block;
  width: 100%;
  height: 100%;
  position: relative;

  @media (max-width: ${props => props.theme.tokens.mediaQueries.small}) {
    display: none;
  }
`;

const SmallMapContainer = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  display: none;
  margin-top: ${props => props.theme.tokens.spacing.L.value};
  margin-bottom: ${props => props.theme.tokens.spacing.L.value};
  border-radius: ${props => props.theme.tokens.borderRadius.value};
  overflow: hidden;

  @media (max-width: ${props => props.theme.tokens.mediaQueries.small}) {
    display: block;
  }
`;

const ActivityDetail = props => {
  const router = useRouter();
  const { activity } = router.query;
  let [loading, setLoading] = React.useState(true);

  let [activitySummary, setActivitySummary] = React.useState([]);
  let [activityStream, setActivityStream] = React.useState([]);
  const value = React.useContext(AuthContext);
  const cookies = value.cookies;

  let currentTime = Date.now() / 1000;
  let access_token = cookies.access_token;
  let expires_at = cookies.expires_at;

  React.useEffect(() => {
    let activityFetchUrl =
      "https://www.strava.com/api/v3/activities/" + activity;

    let activityStreamFetchUrl =
      activityFetchUrl +
      "/streams/watts,altitude,heartrate,latlng,cadence,velocity_smooth?resolution=low";

    let fetchUrls = [activityFetchUrl, activityStreamFetchUrl];

    Promise.all(
      fetchUrls.map(url =>
        fetch(url, {
          method: "get",
          headers: {
            "content-type": "application/json",
            authorization: "Bearer " + access_token
          }
        })
      )
    )
      .then(responses => Promise.all(responses.map(res => res.json())))
      .then(([summary, stream]) => {
        setActivitySummary(summary);
        setActivityStream(stream);
        setLoading(false);
      });
  }, [value]);

  let activityStartTime = moment(activitySummary.start_date_local);
  let friendlyFormat = activityStartTime.format("MMM Do YYYY [at] h:mm a");

  return (
    <Wrapper props={props}>
      <ContainerActivityDetail>
        <ActivityDetailLongScroll>
          {loading ? (
            <Skeleton />
          ) : (
            <div>
              <Button
                onClick={() => {
                  Router.back();
                }}
                label={"← Back"}
              ></Button>

              <PageHeader>{activitySummary.name}</PageHeader>
              <MetaDescription>{friendlyFormat}</MetaDescription>
              <p>{activitySummary.description}</p>
              {activitySummary.start_latlng ? (
                <SmallMapContainer>
                  <DynamicMapboxSmallComponent
                    activitySummary={activitySummary}
                  />
                </SmallMapContainer>
              ) : (
                <div></div>
              )}
              <RenderLineChart data={activityStream}></RenderLineChart>
              <SummaryCard activitySummary={activitySummary} />
            </div>
          )}
        </ActivityDetailLongScroll>
        {activitySummary.start_latlng ? (
          <LargeMapContainer>
            <DynamicMapboxLargeComponent activitySummary={activitySummary} />
          </LargeMapContainer>
        ) : (
          <div />
        )}
      </ContainerActivityDetail>
    </Wrapper>
  );
};

export default ActivityDetail;

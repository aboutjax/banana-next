import React from "react";
import styled from "styled-components";

const Card = styled.div`
  background: ${props => props.theme.colors.cardBackground};
  padding: ${props => props.theme.tokens.spacing.XXL.value};
  margin-bottom: ${props => props.theme.tokens.spacing.M.value};
  border-radius: ${props => props.theme.tokens.borderRadius.value};

  @media (max-width: ${props => props.theme.tokens.mediaQueries.small}) {
    padding: ${props => props.theme.tokens.spacing.M.value};
  }
`;

function ActivityCard({ activity }) {
  console.log(activity);

  return (
    <Card>
      <p>{activity.name}</p>
    </Card>
  );
}

export default ActivityCard;

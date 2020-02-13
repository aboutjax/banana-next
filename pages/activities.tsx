import styled from "styled-components";

const Header = styled.h1`
  color: ${props => props.theme.colors.textColor};
`;

const Activities = () => {
  return <Header>Activities</Header>;
};

export default Activities;

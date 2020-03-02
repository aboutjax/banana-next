import styled from "styled-components";

export const Container = styled.div`
  background-color: ${props => props.theme.colors.background};
  padding: ${props => props.theme.tokens.spacing.XL.value};
  padding-top: 0;
  position: relative;

  grid-column-start: 2;
  grid-column-end: 3;

  grid-row-start: 2;
  grid-row-end: 3;

  grid-column-gap: ${props => props.theme.tokens.spacing.XL.value};

  display: grid;
  grid-template-columns: 200px 1fr;

  @media (max-width: ${props => props.theme.tokens.mediaQueries.small}) {
    display: grid;
    min-width: auto;
    width: 100%;
    grid-row-gap: ${props => props.theme.tokens.spacing.XL.value};

    grid-template-rows: 60px 1fr;
    grid-template-columns: 1fr;

    grid-column-start: 1;
    grid-column-end: 4;

    padding: ${props => props.theme.tokens.spacing.L.value};
    padding-top: 0;
  }
`;

export const ContainerNoSubNav = styled.div`
  background-color: ${props => props.theme.colors.background};
  padding: ${props => props.theme.tokens.spacing.XXL.value};
  padding-top: 0;
  position: relative;

  grid-column-start: 2;
  grid-column-end: 3;

  grid-row-start: 2;
  grid-row-end: 3;

  grid-column-gap: ${props => props.theme.tokens.spacing.XXL.value};

  display: grid;
  grid-template-columns: 1fr;

  @media (max-width: ${props => props.theme.tokens.mediaQueries.small}) {
    display: grid;
    min-width: auto;
    width: 100%;
    grid-row-gap: ${props => props.theme.tokens.spacing.XL.value};

    grid-template-rows: 60px 1fr;
    grid-template-columns: 1fr;

    grid-column-start: 1;
    grid-column-end: 4;

    padding: ${props => props.theme.tokens.spacing.L.value};
    padding-top: 0;
  }
`;

export const ContainerActivityDetail = styled.div`
  position: relative;

  grid-column-start: 1;
  grid-column-end: 3;

  grid-row-start: 1;
  grid-row-end: 3;
  z-index: 1;
  padding: 0;

  grid-column-gap: 0;

  display: grid;
  grid-template-columns: minmax(500px, 600px) 1fr;

  @media (max-width: ${props => props.theme.tokens.mediaQueries.small}) {
    display: grid;
    min-width: auto;
    width: 100%;
    grid-row-gap: ${props => props.theme.tokens.spacing.XL.value};

    grid-template-rows: 60px 1fr;
    grid-template-columns: 1fr;

    grid-column-start: 1;
    grid-column-end: 4;

    padding: 0;
  }
`;

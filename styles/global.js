import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${props => props.theme.colors.background};
    color: ${props => props.theme.colors.text};
  }

  h1 {
    font-size: ${props => props.theme.tokens.typography.large.heading1.size};
    @media (max-width: ${props => props.theme.tokens.mediaQueries.small}) {
      font-size: ${props => props.theme.tokens.typography.small.heading1.size};
    } 
  }

  h2 {
    font-size: ${props => props.theme.tokens.typography.large.heading2.size};
    @media (max-width: ${props => props.theme.tokens.mediaQueries.small}) {
      font-size: ${props => props.theme.tokens.typography.small.heading2.size};
    }
  }

  h3 {
    font-size: ${props => props.theme.tokens.typography.large.heading3.size};
    @media (max-width: ${props => props.theme.tokens.mediaQueries.small}) {
      font-size: ${props => props.theme.tokens.typography.small.heading3.size};
    }
  }

  h4 {
    font-size: ${props => props.theme.tokens.typography.large.heading4.size};
    font-weight: ${props =>
      props.theme.tokens.typography.large.heading4.weight};
    @media (max-width: ${props => props.theme.tokens.mediaQueries.small}) {
      font-size: ${props => props.theme.tokens.typography.small.heading4.size};
    }
  }

  h5 {
    font-size: ${props => props.theme.tokens.typography.large.eyebrow.size};
    font-weight: ${props =>
      props.theme.tokens.typography.large.eyebrow.weight};;
    text-transform: ${props =>
      props.theme.tokens.typography.large.eyebrow.transform};
    @media (max-width: ${props => props.theme.tokens.mediaQueries.small}) {
      font-size: ${props => props.theme.tokens.typography.small.eyebrow.size};
    }
  }

  p {
    font-size: ${props => props.theme.tokens.typography.large.paragraph.size};
    @media (max-width: ${props => props.theme.tokens.mediaQueries.small}) {
      font-size: ${props => props.theme.tokens.typography.small.paragraph.size};
    }
  }

  caption {
    font-size: ${props => props.theme.tokens.typography.large.caption.size};
    @media (max-width: ${props => props.theme.tokens.mediaQueries.small}) {
      font-size: ${props => props.theme.tokens.typography.small.caption.size};
    }
  }
`;

export default GlobalStyle;

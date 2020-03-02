import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${props => props.theme.colors.background};
    color: ${props => props.theme.colors.text};
  }

  * {box-sizing: border-box; -webkit-font-smoothing: antialiased;}

  h1 {
    margin-top:  ${props =>
      props.theme.tokens.typography.large.heading1.marginTop.value};
    margin-bottom: ${props =>
      props.theme.tokens.typography.large.heading1.marginBottom.value};
    font-size: ${props =>
      props.theme.tokens.typography.large.heading1.size.value};
    letter-spacing: ${props =>
      props.theme.tokens.typography.large.heading1.letterSpacing.value};
    line-height: ${props =>
      props.theme.tokens.typography.large.heading1.lineHeight.value};
    @media (max-width: ${props => props.theme.tokens.mediaQueries.small}) {
      margin-top:  ${props =>
        props.theme.tokens.typography.small.heading1.marginTop.value};
      margin-bottom: ${props =>
        props.theme.tokens.typography.small.heading1.marginBottom.value};
      font-size: ${props =>
        props.theme.tokens.typography.small.heading1.size.value};
      letter-spacing: ${props =>
        props.theme.tokens.typography.small.heading1.letterSpacing.value};
      line-height: ${props =>
        props.theme.tokens.typography.small.heading1.lineHeight.value};
    }
  }

  h2 {
    margin-top:  ${props =>
      props.theme.tokens.typography.large.heading2.marginTop.value};
    margin-bottom: ${props =>
      props.theme.tokens.typography.large.heading2.marginBottom.value};
    font-size: ${props =>
      props.theme.tokens.typography.large.heading2.size.value};
    letter-spacing: ${props =>
      props.theme.tokens.typography.large.heading2.letterSpacing.value};
    line-height: ${props =>
      props.theme.tokens.typography.large.heading2.lineHeight.value};
    @media (max-width: ${props => props.theme.tokens.mediaQueries.small}) {
      margin-top:  ${props =>
        props.theme.tokens.typography.small.heading2.marginTop.value};
      margin-bottom: ${props =>
        props.theme.tokens.typography.small.heading2.marginBottom.value};
      font-size: ${props =>
        props.theme.tokens.typography.small.heading2.size.value};
      letter-spacing: ${props =>
        props.theme.tokens.typography.small.heading2.letterSpacing.value};
      line-height: ${props =>
        props.theme.tokens.typography.small.heading2.lineHeight.value};
    }
  }

  h3 {
    margin-top:  ${props =>
      props.theme.tokens.typography.large.heading3.marginTop.value};
    margin-bottom: ${props =>
      props.theme.tokens.typography.large.heading3.marginBottom.value};
    font-size: ${props =>
      props.theme.tokens.typography.large.heading3.size.value};
    letter-spacing: ${props =>
      props.theme.tokens.typography.large.heading3.letterSpacing.value};
    line-height: ${props =>
      props.theme.tokens.typography.large.heading3.lineHeight.value};
    @media (max-width: ${props => props.theme.tokens.mediaQueries.small}) {
      margin-top:  ${props =>
        props.theme.tokens.typography.small.heading3.marginTop.value};
      margin-bottom: ${props =>
        props.theme.tokens.typography.small.heading3.marginBottom.value};
      font-size: ${props =>
        props.theme.tokens.typography.small.heading3.size.value};
      letter-spacing: ${props =>
        props.theme.tokens.typography.small.heading3.letterSpacing.value};
      line-height: ${props =>
        props.theme.tokens.typography.small.heading3.lineHeight.value};
    }
  }

  h4 {
    margin-top:  ${props =>
      props.theme.tokens.typography.large.heading4.marginTop.value};
    margin-bottom: ${props =>
      props.theme.tokens.typography.large.heading4.marginBottom.value};
    font-size: ${props =>
      props.theme.tokens.typography.large.heading4.size.value};
    letter-spacing: ${props =>
      props.theme.tokens.typography.large.heading4.letterSpacing.value};
    line-height: ${props =>
      props.theme.tokens.typography.large.heading4.lineHeight.value};
    font-weight: normal;
    @media (max-width: ${props => props.theme.tokens.mediaQueries.small}) {
      margin-top:  ${props =>
        props.theme.tokens.typography.small.heading4.marginTop.value};
      margin-bottom: ${props =>
        props.theme.tokens.typography.small.heading4.marginBottom.value};
      font-size: ${props =>
        props.theme.tokens.typography.small.heading4.size.value};
      letter-spacing: ${props =>
        props.theme.tokens.typography.small.heading4.letterSpacing.value};
      line-height: ${props =>
        props.theme.tokens.typography.small.heading4.lineHeight.value};
      font-weight: normal;
    }
  }

  h5 {
    margin-top:  ${props =>
      props.theme.tokens.typography.large.eyebrow.marginTop.value};
    margin-bottom: ${props =>
      props.theme.tokens.typography.large.eyebrow.marginBottom.value};
    font-size: ${props =>
      props.theme.tokens.typography.large.eyebrow.size.value};
    letter-spacing: ${props =>
      props.theme.tokens.typography.large.eyebrow.letterSpacing.value};
    line-height: ${props =>
      props.theme.tokens.typography.large.eyebrow.lineHeight.value};
    text-transform: ${props =>
      props.theme.tokens.typography.large.eyebrow.textTransform.value};
    font-weight: normal;
    @media (max-width: ${props => props.theme.tokens.mediaQueries.small}) {
      margin-top:  ${props =>
        props.theme.tokens.typography.small.eyebrow.marginTop.value};
      margin-bottom: ${props =>
        props.theme.tokens.typography.small.eyebrow.marginBottom.value};
      font-size: ${props =>
        props.theme.tokens.typography.small.eyebrow.size.value};
      letter-spacing: ${props =>
        props.theme.tokens.typography.small.eyebrow.letterSpacing.value};
      line-height: ${props =>
        props.theme.tokens.typography.small.eyebrow.lineHeight.value};
      text-transform: ${props =>
        props.theme.tokens.typography.large.eyebrow.textTransform.value};
      font-weight: normal;
    }
  }

  p {
    margin-top:  ${props =>
      props.theme.tokens.typography.large.paragraph.marginTop.value};
    margin-bottom: ${props =>
      props.theme.tokens.typography.large.paragraph.marginBottom.value};
    font-size: ${props =>
      props.theme.tokens.typography.large.paragraph.size.value};
    letter-spacing: ${props =>
      props.theme.tokens.typography.large.paragraph.letterSpacing.value};
    line-height: ${props =>
      props.theme.tokens.typography.large.paragraph.lineHeight.value};
    @media (max-width: ${props => props.theme.tokens.mediaQueries.small}) {
      margin-top:  ${props =>
        props.theme.tokens.typography.small.paragraph.marginTop.value};
      margin-bottom: ${props =>
        props.theme.tokens.typography.small.paragraph.marginBottom.value};
      font-size: ${props =>
        props.theme.tokens.typography.small.paragraph.size.value};
      letter-spacing: ${props =>
        props.theme.tokens.typography.small.paragraph.letterSpacing.value};
      line-height: ${props =>
        props.theme.tokens.typography.small.paragraph.lineHeight.value};
    }
  }

`;

export default GlobalStyle;

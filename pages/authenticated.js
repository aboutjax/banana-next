import { ThemeProvider } from "styled-components";
import LightTheme from "../styles/theme/light";
import DarkTheme from "../styles/theme/dark";
import useMedia from "use-media";
import Head from "next/head";
import GlobalStyle from "../styles/global";

function AuthenticatedApp({ children }) {
  const mediaDarkMode = useMedia("(prefers-color-scheme: dark)");

  return (
    <ThemeProvider theme={mediaDarkMode ? DarkTheme : LightTheme}>
      <Head>
        <link
          href="https://api.mapbox.com/mapbox-gl-js/v1.8.1/mapbox-gl.css"
          rel="stylesheet"
        />
      </Head>

      {children}

      <GlobalStyle></GlobalStyle>
    </ThemeProvider>
  );
}

export default AuthenticatedApp;

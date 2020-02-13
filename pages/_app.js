import { ThemeProvider, createGlobalStyle } from "styled-components";
import React from "react";
import LightTheme from "../styles/theme/light";
import DarkTheme from "../styles/theme/dark";
import useMedia from "use-media";
import { useCookies } from "react-cookie";
import GlobalStyle from "../styles/global";

// Import CSS
import "normalize.css";
import "../assets/fonts/inter.css";
import "../styles/index.css";

async function refreshToken(cookies) {
  let exchangeTokenUrl =
    "https://www.strava.com/oauth/token?client_id=17775&client_secret=1409e35fe6b71ed9a6ae59ea08552d6a4010d700" +
    "&grant_type=refresh_token" +
    "&refresh_token=" +
    cookies.refresh_token;

  try {
    const response = await fetch(exchangeTokenUrl, { method: "post" });
    let data = await response.json();
    return data;
  } catch (err) {
    console.log("Something went wrong", err);
  }
}

function MyApp({ Component, pageProps }) {
  const mediaDarkMode = useMedia("(prefers-color-scheme: dark)");

  // Get access token
  const [cookies, setCookie] = useCookies(["asdf"]);

  // Get the current time
  let currentTime = Date.now() / 1000;

  if (parseInt(cookies.expires_at) < currentTime) {
    // If the access token has expired, refresh Token
    console.log("token expired");
    refreshToken(cookies).then(data => {
      setCookie("access_token", data.access_token);
      setCookie("expires_at", data.expires_at);
      setCookie("refresh_token", data.refresh_token);
    });
  } else {
    // console.log("token still valid");
  }

  return (
    <ThemeProvider theme={mediaDarkMode ? DarkTheme : LightTheme}>
      <Component accessToken={cookies.access_token} {...pageProps} />
      <GlobalStyle></GlobalStyle>
    </ThemeProvider>
  );
}

export default MyApp;

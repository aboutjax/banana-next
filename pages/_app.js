import { ThemeProvider } from "styled-components";
import Router from "next/router";
import { motion, AnimatePresence } from "framer-motion";
import React from "react";
import LightTheme from "../styles/theme/light";
import DarkTheme from "../styles/theme/dark";
import useMedia from "use-media";
import nextCookies from "next-cookies";
import { useCookies } from "react-cookie";

import GlobalStyle from "../styles/global";
import * as firebase from "firebase";

// Import CSS
import "normalize.css";
import "../assets/fonts/inter.css";
import "../styles/index.css";

const config = {
  apiKey: "AIzaSyAT-v8o3B_cYtmaQOcOAaZypeXQC4W1lH8",
  authDomain: "banana-dd8f3.firebaseapp.com",
  databaseURL: "https://banana-dd8f3.firebaseio.com",
  projectId: "banana-dd8f3",
  storageBucket: "banana-dd8f3.appspot.com",
  messagingSenderId: "33006064885"
};

async function refreshToken(refresh_token) {
  let exchangeTokenUrl =
    "https://www.strava.com/oauth/token?client_id=17775&client_secret=1409e35fe6b71ed9a6ae59ea08552d6a4010d700" +
    "&grant_type=refresh_token" +
    "&refresh_token=" +
    refresh_token;

  try {
    const response = await fetch(exchangeTokenUrl, { method: "post" });
    let data = await response.json();
    return data;
  } catch (err) {
    // console.log("Something went wrong", err);
  }
}

function MyApp({ Component, pageProps, ctx }) {
  // const fire = firebase.initializeApp(config);

  const mediaDarkMode = useMedia("(prefers-color-scheme: dark)");
  const allCookies = nextCookies(ctx);
  const [auth, setAuth] = React.useState(false);
  const [cookies, setCookie, removeCookie] = useCookies([]);

  React.useEffect(() => {
    let currentTime = Date.now() / 1000;

    let access_token = allCookies.access_token;
    let expires_at = allCookies.expires_at;
    let refresh_token = allCookies.refresh_token;

    if (access_token && expires_at > currentTime) {
      // If there is an access token and it hasn't expired, user is authenticated
      // console.log("From app.js: user is authenticated");
      setAuth(true);
    } else if (expires_at < currentTime) {
      // If the access token has expired, use the refresh token and get a new access token
      // console.log("From app.js: access token expired, get refresh token");
      setAuth(true);

      refreshToken(refresh_token).then(data => {
        setCookie("access_token", data.access_token, {
          path: "/",
          maxAge: 604800
        });

        setCookie("refresh_token", data.refresh_token, {
          path: "/",
          maxAge: 604800
        });
        setCookie("expires_at", data.expires_at, { path: "/", maxAge: 604800 });

        Router.reload();
      });
    } else {
      // If none of the above, there is no authenticated user
      setAuth(false);
      // console.log("From app.js: There is no authenticated user");
    }
  }, [allCookies, auth]);

  return (
    <ThemeProvider theme={mediaDarkMode ? DarkTheme : LightTheme}>
      <Component auth={auth} allCookies={allCookies} {...pageProps} />
      <GlobalStyle></GlobalStyle>
    </ThemeProvider>
  );
}

MyApp.getInitialProps = ctx => ({
  ctx: nextCookies(ctx)
});

export default MyApp;

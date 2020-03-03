import { ThemeProvider } from "styled-components";
import Head from "next/head";
import Router, { useRouter } from "next/router";
import Link from "next/link";
// import { motion, AnimatePresence } from "framer-motion";
import React, { useEffect } from "react";
import LightTheme from "../styles/theme/light";
import DarkTheme from "../styles/theme/dark";
import useMedia from "use-media";
import styled from "styled-components";
// import nextCookies from "next-cookies";
import { useCookies } from "react-cookie";
import About from "./about";
import AuthenticatedApp from "./authenticated";
import HandleRedirect from "./handle_redirect/index";

import GlobalStyle from "../styles/global";

import { asyncFetch } from "../components/fetchHelper";

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

// function MyApp({ Component, pageProps }) {
// const mediaDarkMode = useMedia("(prefers-color-scheme: dark)");
// const [cookies, setCookie] = useCookies([]);

//   let currentTime = Date.now() / 1000;
//   let access_token = cookies.access_token;
//   let expires_at = cookies.expires_at;
//   // let refresh_token = cookies.refresh_token;

//   React.useEffect(() => {
//     if (access_token && expires_at > currentTime) {
//       console.log("APP.JS: user is authenticated");
//       // If there is an access token and it hasn't expired, user is authenticated
//     } else {
//       // If none of the above, there is no authenticated user
//       console.log("APP.JS: There is no authenticated user");
//       Router.push("/");
//     }
//   }, []);

//   return (
// <ThemeProvider theme={mediaDarkMode ? DarkTheme : LightTheme}>
//   <Head>
//     <link
//       href="https://api.mapbox.com/mapbox-gl-js/v1.8.1/mapbox-gl.css"
//       rel="stylesheet"
//     />
//   </Head>

//   <AuthProvider>
//     <Component cookies={cookies} {...pageProps} />
//   </AuthProvider>

//   <GlobalStyle></GlobalStyle>
// </ThemeProvider>
//   );
// }

// // MyApp.getInitialProps = ctx => ({
// //   ctx: nextCookies(ctx)
// // });

const AuthContext = React.createContext();

function useAuthState() {
  const state = React.useContext(AuthContext);
  const isPending = state.status === "pending";
  const isSuccess = state.status === "success";
  const user = state.user;
  const isAuthenticated = isSuccess;
  return {
    ...state,
    isPending,
    isSuccess,
    isAuthenticated
  };
}

function AuthContextProvider({ children }) {
  const [cookies, setCookie] = useCookies();
  const [state, setState] = React.useState({});
  const [loading, setLoading] = React.useState(true);

  let currentTime = Date.now() / 1000;
  let access_token = cookies.access_token;
  let expires_at = cookies.expires_at;
  let refresh_token = cookies.refresh_token;

  React.useEffect(() => {
    setState({
      cookies: cookies,
      status: "pending"
    });

    let athleteFetchUrl = "https://www.strava.com/api/v3/athlete";

    if (access_token && expires_at > currentTime) {
      asyncFetch(athleteFetchUrl, cookies.access_token)
        .then(data => {
          return data.json();
        })
        .then(user => {
          setState({ user: user, status: "success", cookies: cookies });
        });
    } else {
      setState({ user: null, status: "error", cookies: cookies });
    }
  }, [cookies]);

  return <AuthContext.Provider value={state}>{children}</AuthContext.Provider>;
}

function Home({ Component, pageProps }) {
  const { isSuccess, isPending } = useAuthState();
  const router = useRouter();

  let isHandleRedirect = router.route == "/handle_redirect";

  React.useEffect(() => {
    console.log(isSuccess);
  }, [isSuccess]);

  if (isSuccess) {
    return (
      <AuthenticatedApp>
        <Component {...pageProps} />
      </AuthenticatedApp>
    );
  } else if (isPending) {
    return <Loading></Loading>;
  } else if (isHandleRedirect) {
    return <HandleRedirect />;
  } else {
    return <About></About>;
  }
}

const LoadingScreen = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;

  p {
  }
`;

function Loading() {
  return (
    <LoadingScreen>
      <p>Loading...</p>
    </LoadingScreen>
  );
}

function MyApp({ Component, pageProps }) {
  return (
    <AuthContextProvider>
      <Home Component={Component} pageProps={pageProps}></Home>
    </AuthContextProvider>
  );
}

export default MyApp;
export { AuthContext, useAuthState };

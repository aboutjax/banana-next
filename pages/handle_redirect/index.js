import React from "react";
import Router, { useRouter } from "next/router";
import { useCookies } from "react-cookie";
import * as firebase from "firebase";
import dynamic from "next/dynamic";

let accessToken;
let firebaseToken;
let refreshToken;
let expiresAt;

let setTokensFromUrl = async () => {
  const search = window.location.search.substring(1);
  const query = JSON.parse(
    '{"' +
      decodeURI(search)
        .replace(/"/g, '\\"')
        .replace(/&/g, '","')
        .replace(/=/g, '":"') +
      '"}'
  );

  let tokens = {
    accessToken: query.access_token,
    firebaseToken: query.firebase_token,
    refreshToken: query.refresh_token,
    expiresAt: query.expires_at
  };

  return tokens;
};

const HandleRedirect = () => {
  const [cookies, setCookie] = useCookies([]);

  React.useEffect(() => {
    setTokensFromUrl().then(value => {
      setCookie("access_token", value.accessToken, {
        path: "/",
        maxAge: 604800
      });
      setCookie("firebase_token", value.firebaseToken, {
        path: "/",
        maxAge: 604800
      });
      setCookie("refresh_token", value.refreshToken, {
        path: "/",
        maxAge: 604800
      });
      setCookie("expires_at", value.expiresAt, {
        path: "/",
        maxAge: 604800
      });

      Router.push("/activities");
    });
  }, []);

  return <div>success</div>;
};

export default HandleRedirect;

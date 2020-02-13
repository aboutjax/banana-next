import React from "react";
import Router, { useRouter } from "next/router";
import { useCookies } from "react-cookie";

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
  const [cookies, setCookie] = useCookies(["asdf"]);

  React.useEffect(() => {
    setTokensFromUrl().then(value => {
      console.log(value);
      setCookie("access_token", value.accessToken);
      setCookie("firebase_token", value.firebaseToken);
      setCookie("refresh_token", value.refreshToken);
      setCookie("expires_at", value.expiresAt);
    });
    Router.push("/activities");
  });

  return <div>success</div>;
};

export default HandleRedirect;

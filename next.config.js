const {
  PHASE_DEVELOPMENT_SERVER,
  PHASE_PRODUCTION_BUILD
} = require("next/constants");

const resolve = require("resolve");

// This uses phases as outlined here: https://nextjs.org/docs/#custom-configuration
module.exports = phase => {
  // when started in development mode `next dev` or `npm run dev` regardless of the value of STAGING environmental variable
  const isDev = phase === PHASE_DEVELOPMENT_SERVER;
  // when `next build` or `npm run build` is used
  const isProd =
    phase === PHASE_PRODUCTION_BUILD && process.env.STAGING !== "1";
  // when `next build` or `npm run build` is used
  const isStaging = PHASE_PRODUCTION_BUILD && process.env.STAGING === "1";

  console.log(`isDev:${isDev}  isProd:${isProd}   isStaging:${isStaging}`);

  const env = {
    LOGIN_URL: (() => {
      if (isDev) return "http://localhost:3000";
      if (isProd) {
        return "https://strava-auth.herokuapp.com/";
      }
      return "RESTURL_SPEAKERS:not (isDev,isProd && !isStaging,isProd && isStaging)";
    })()
  };

  // next.config.js object
  return {
    env
  };
};

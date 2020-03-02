export const refreshToken = async refresh_token => {
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
};

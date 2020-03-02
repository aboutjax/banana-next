export const asyncFetch = async (url, token) => {
  const response = await fetch(url, {
    method: "get",
    headers: {
      "content-type": "application/json",
      authorization: "Bearer " + token
    }
  });
  return response;
};

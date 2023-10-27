export const httpPost = async (apiUrl, payload) => {
  const response = await fetch(apiUrl, {
    method: 'POST',
    body: payload,
  });

  const body = await response.json();

  return { response, body };
};

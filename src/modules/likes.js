const appId = 'x7SedcmnnF8GWHDjKuID';

export const likesUrl = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${appId}/likes/`;

const getLikes = async () => {
  const res = await fetch(likesUrl);
  const data = await res.json();
  return data;
};

export default getLikes;

export const BACK_ENDPOINT = "https://qtify-backend.labs.crio.do";

export const fetchTopAlbums = async () => {
  try {
    const res = await fetch(`${BACK_ENDPOINT}/albums/top`);
    const data = await res.json();
    return data;
  } catch (err) {
    console.error(err);
  }
};

export const fetchNewAlbums = async () => {
  try {
    const res = await fetch(`${BACK_ENDPOINT}/albums/new`);
    const data = await res.json();
    return data;
  } catch (err) {
    console.error(err);
  }
};

export const fetchSongs = async () => {
  try {
    const res = await fetch(`${BACK_ENDPOINT}/songs`);
    const data = await res.json();
    return data;
  } catch (err) {
    console.error(err);
  }
};
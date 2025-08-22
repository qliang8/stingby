export const getImageUrl = (path) => {
  // console.log("getImageUrl called with:", path);
  return new URL(`./assets/${path}`, import.meta.url).href;
};

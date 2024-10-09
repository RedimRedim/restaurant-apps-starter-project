export const UrlParser = {
  parseActiveUrl() {
    const url = window.location.hash.slice(1).toLocaleLowerCase();
    return url || "home";
  },
};

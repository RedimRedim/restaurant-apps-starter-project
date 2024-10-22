export function getQueryParameter(name) {
  // Get the part after the hash (ignoring the first part of the URL)
  const hash = window.location.hash.split("?")[1];
  if (!hash) return null;

  const urlParams = new URLSearchParams(hash);
  return urlParams.get(name);
}

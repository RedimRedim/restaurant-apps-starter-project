export class UrlParser {
  static parseActiveUrlWithCombiner() {
    const url = window.location.href; // Get the full URL
    const urlWithoutBase = url.replace(window.location.origin, ""); // Remove the base URL
    const urlParts = urlWithoutBase.split("/").filter(Boolean); // Split and clean the URL parts

    // Combine the parts back into a string and prepend a leading slash
    return `/${urlParts.join("/")}`; // Ensure the result starts with a slash
  }
}

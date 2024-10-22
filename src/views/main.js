import "regenerator-runtime"; /* for async await transpile */
import "../styles/main.css";
import "../styles/mediastyles.css";
import App from "./app.js";
import "lazysizes";
import "lazysizes/plugins/parent-fit/ls.parent-fit";

//rendering urlParser
const app = new App({
  button: document.querySelector("#hamburgerButton"),
  drawer: document.querySelector("#navigationDrawer"),
  content: document.querySelector("#mainContent"),
});

window.addEventListener("hashchange", async () => {
  app.renderPage();
});

window.addEventListener("load", () => {
  app.renderPage();
});

// // //Setup SW in order to do caching
if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker

      .register("/service-worker.js")
      .then((registration) => {
        console.log(
          "Service Worker registered with scope:",
          registration.scope
        );
      })
      .catch((error) => {
        console.error("Service Worker registration failed:", error);
      });
  });
}

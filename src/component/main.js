import "regenerator-runtime"; /* for async await transpile */
import "../styles/main.css";
import "../styles/mediastyles.css";
import App from "../views/app.js";

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


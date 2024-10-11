// app.js
import DrawerInitiator from "../utils/drawer-initiator";
import { UrlParser } from "../routes/urlparser.js";
import { routes } from "../routes/routes";

class App {
  constructor({ button, drawer, content }) {
    this._button = button;
    this._drawer = drawer;
    this._content = content;

    this._initialAppShell();
  }

  _initialAppShell() {
    DrawerInitiator.init({
      button: this._button,
      drawer: this._drawer,
      content: this._content,
    });

    // Set up event listeners
    this.setupEventListeners();

    // Add popstate listener for back/forward navigation
    window.addEventListener("popstate", () => {
      this.renderPage();
    });
  }

  setupEventListeners() {
    // Add event listener for favorite link
    document
      .querySelector("#favoriteLink")
      .addEventListener("click", (event) => {
        event.preventDefault(); // Prevent default link behavior
        const url = event.target.getAttribute("href");
        this.navigateTo(url); // Use the navigateTo method
      });

    // Add more event listeners for other links as needed
  }

  async renderPage() {
    const url = UrlParser.parseActiveUrlWithCombiner();
    const page = routes[url];

    if (page) {
      this._content.innerHTML = await page.render(); // Render the page
      if (page.afterRender) {
        await page.afterRender(); // Call afterRender if it exists
      }
    } else {
      this._content.innerHTML = "<h1>404 - Page Not Found</h1>"; // Handle 404
    }
  }

  navigateTo(url) {
    history.pushState(null, null, url); // Update the URL
    this.renderPage(); // Render the new page
  }
}

export default App;

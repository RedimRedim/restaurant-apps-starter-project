import DrawerInitiator from "../utils/drawer-initiator";
import UrlParser from "../routes/urlparser";
import { routes } from "../component/routes";
import { initSkipLink } from "../utils/skip-link"; // Import skip link function

class App {
  constructor({ button, drawer, content }) {
    this._button = button;
    this._drawer = drawer;
    this._content = content;

    this._initialAppShell();

    initSkipLink(); // Call the skip link function
  }

  _initialAppShell() {
    DrawerInitiator.init({
      button: this._button,
      drawer: this._drawer,
      content: this._content,
    });

    // kita bisa menginisiasikan komponen lain bila ada
  }

  async renderPage() {
    const url = UrlParser.parseActiveUrlWithCombiner();
    console.log(url);
    const page = routes[url];
    this._content.innerHTML = await page.render();
    await page.afterRender();
  }
}

export default App;

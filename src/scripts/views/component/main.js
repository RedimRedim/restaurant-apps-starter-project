import "regenerator-runtime"; /* for async await transpile */
import "../../../styles/main.css";
import "../../../styles/mediastyles.css";
import { Restaurant } from "../../utils/restaurant.js";
const RestaurantClass = new Restaurant();
import App from "../app.js";

//rendering urlParser
const app = new App({
  button: document.querySelector("#hamburgerButton"),
  drawer: document.querySelector("#navigationDrawer"),
  content: document.querySelector("#mainContent"),
});

window.addEventListener("hashchange", () => {
  app.renderPage();
});

window.addEventListener("load", () => {
  app.renderPage();
});

///

function handlingAddRestBtn() {
  const addRestElement = document.getElementById("addRestaurant");

  addRestElement.addEventListener("click", () => {
    const currentDisplay = document.getElementById("restForm").style.display;
    if (currentDisplay === "none" || currentDisplay === "") {
      restForm.style.display = "block"; // Show the form
      addRestElement.textContent = "Hide Button";
    } else {
      restForm.style.display = "none"; // Hide the form
      addRestElement.textContent = "Add Restaurant";
    }
  });

  document.getElementById("cancelRest").addEventListener("click", () => {
    restForm.style.display = "none"; // Hide the form
    addRestElement.textContent = "Add Restaurant";
  });
}

function handlingSubmitRestForm() {
  document.getElementById("restForm").addEventListener("submit", (event) => {
    event.preventDefault();
    const formData = new FormData(event.target); // Creates a FormData object

    const restData = {
      restName: formData.get("restName"),
      restDesc: formData.get("restDesc"),
      restCity: formData.get("restCity"),
      restPictureId: formData.get("restPictureId"),
      restRating: formData.get("restRating"),
    };

    window.alert(
      JSON.stringify(restData) + "reserve post data to backend in the future"
    ); //reserve post data to backend in the future
  });
}

RestaurantClass.generateRestaurantHtml();
handlingAddRestBtn();
handlingSubmitRestForm();

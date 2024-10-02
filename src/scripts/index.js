import "regenerator-runtime"; /* for async await transpile */
import "../styles/main.css";
import "../styles/mediastyles.css";
import { Restaurant } from "../scripts/restaurant.js";

const RestaurantClass = new Restaurant();



function showNav() {
  const showNavOnClick = document.querySelector(".showNav");

  showNavOnClick.addEventListener("click", () => {
    const showNavBtn = document.querySelector(".firstSidebar");
    showNavBtn.style.display = "flex";
  });
}

function hideSidebar() {
  const showNavOnClick = document.querySelector(".hideSidebar");

  showNavOnClick.addEventListener("click", () => {
    const showNavBtn = document.querySelector(".firstSidebar");
    showNavBtn.style.display = "none";
  });
}

RestaurantClass.generateRestaurantHtml();
showNav();
hideSidebar();

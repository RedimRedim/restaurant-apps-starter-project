import "regenerator-runtime"; /* for async await transpile */
import "../../styles/main.css";
import "../../styles/mediastyles.css";
import { Restaurant } from "../utils/restaurant.js";

document.querySelector(".content").textContent = "asd";

const RestaurantClass = new Restaurant();

await RestaurantClass.generateRestDetailHtml("rqdv5juczeskfw1e867");

import "regenerator-runtime"; /* for async await transpile */
import "../styles/main.css";
import "../styles/mediastyles.css";
import { Restaurant } from "../utils/restaurant.js";
import { FavoriteRestIdb } from "../utils/indexdb.js";
const favRestaurant = await FavoriteRestIdb.getAllRestaurants();

let favDataHtml = [];
favRestaurant.forEach((restaurant) => {
  favDataHtml.push(
    ` 
    <div class="favContent">
    <div class="resttName" id="name">${restaurant.data.name}</div>
           <div class="restPictureId">${restaurant.data.pictureId}</div>
           <div class="restCity">${restaurant.data.city}</div>
           <div class="restRating">${restaurant.data.rating}</div>
    </div>  
         `
  );
});

document.querySelector(".favContainer").innerHTML = favDataHtml.join("");

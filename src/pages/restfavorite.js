import "regenerator-runtime"; /* for async await transpile */
import { FavoriteRestIdb } from "../utils/indexdb.js";
export const restFavorite = {
  async render() {
    return `
        <section>
            <div class="content-title" id="exploreContent">Favorite/Liked Restaurant</div>
            <div class="favContainer">
                <!-- automatically generate through js box content-->
            </div>
        </section>
        </div>`;
  },

  async afterRender() {
    const favRestaurant = await FavoriteRestIdb.getAllRestaurants();

    const favDataHtml = [];
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
    console.log("this is a rest favorite");
  },
};

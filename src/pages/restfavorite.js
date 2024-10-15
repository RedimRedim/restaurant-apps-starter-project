import "regenerator-runtime"; /* for async await transpile */
import { FavoriteRestIdb } from "../component/indexdb.js";
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
    <div class="favContent" tabindex="0">
      <div class="restDetails">
        <div class="resttName" id="name">Name: ${restaurant.data.name}</div>
        <div class="restRating">Rating: ${restaurant.data.rating}</div>
        <div class="restCity">City: ${restaurant.data.city}</div>
      </div>
           <div class="restPictureId">
              <a href="#/detail/?id=${restaurant.data.id}">
            <img src="https://restaurant-api.dicoding.dev/images/small/${restaurant.data.pictureId}" alt="${restaurant.data.name}">
            </a>
            </div>
           <div class="restDescription">${restaurant.data.description}</div>
    </div>  
         `
      );
    });

    document.querySelector(".favContainer").innerHTML = favDataHtml.join("");
    console.log("this is a rest favorite");
  },
};

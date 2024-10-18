import { FavoriteRestIdb } from "./indexdb.js";
import { API_ENDPOINT } from "../globals/config.js";
import { showLoading, hideLoading } from "../utils/loading.js";
export class Restaurant {
  constructor() {}

  async getRestaurants() {
    showLoading();
    try {
      const response = await fetch(`${API_ENDPOINT}/list`, {
        method: "GET",
      });

      const apiData = await response.json();

      return apiData.restaurants;
    } catch (error) {
      console.error("Error fetching data: ", error);
      return [];
    } finally {
      hideLoading();
    }
  }

  async getRestDetails(id) {
    showLoading();
    try {
      const response = await fetch(`${API_ENDPOINT}/detail/${id}`, {
        method: "GET",
      });

      const apiData = await response.json();

      return apiData.restaurant;
    } catch (error) {
      console.error("Error fetching resturant details,", error);
    } finally {
      hideLoading();
    }
  }

  async generateRestDetailHtml(id) {
    const dataRestaurants = await this.getRestDetails(id);

    const buttonHtml = `${
      (await FavoriteRestIdb.isFavorite(id))
        ? `<button class="likeBtn favBtn" data-restid=${dataRestaurants.id}>Unlike</button>`
        : `<button class="unlikeBtn favBtn" data-restid=${dataRestaurants.id}>Like</button>`
    }`;

    const contentDiv = document.querySelector(".detail-content");

    const foodsHtml = dataRestaurants.menus.foods
      .map((food) => `<div class="foodName">${food.name}</div>`)
      .join("");

    const drinksHtml = dataRestaurants.menus.drinks
      .map((drink) => `<div class="drinkName">${drink.name}</div>`)
      .join("");

    const reviewsHtml = dataRestaurants.customerReviews
      .map(
        (review) =>
          `<div class="reviewContent">
          <div class="reviewPersonDetails">
          <div class="restReviewName" id="reviewName">${review.name}</div>
          <div id="reviewDate"><i>${review.date}</i></div>
          </div>


          <div class="restReviewReview" id="review"><cite>${review.review}</cite></div>
          
          </div>
          `
      )
      .join("");

    contentDiv.innerHTML = `

      <div class="restDetails item1" tabindex="0">
              <div class="restName" id="name">Name: ${dataRestaurants.name}</div>
        <div class="restCity" id="city">City: ${dataRestaurants.city}</div>
            <div class="restAddress" id="address">Address: ${dataRestaurants.address}</div>
               <div class="restRating" id="rating">Rating: ${dataRestaurants.rating}</div>
                ${buttonHtml}

      </div>

      
        
        <div class="restPictureId item2" tabindex="0">
                <img src="https://restaurant-api.dicoding.dev/images/small/${dataRestaurants.pictureId}" alt="${dataRestaurants.name}">
                </a>
      </div>

        <div class="restDesc item3 tabindex="0"" id="description">${dataRestaurants.description}
        </div>
              
                <div class="restMenus item4" id="menus" tabindex="0">
                <div class="menuContent">
                    <div class="foods">
                    <h3>Foods</h3>
                    <div class="restFoods" id="foods">
                       ${foodsHtml}
                    </div>
                    </div>

                    <div class="drinks">
                    <h3>Drinks</h3>
                    <div class="restDrinks" id="drinks">
                      ${drinksHtml}
                    </div>
                    </div>
                </div>
                </div>
                <div class="restReviews item5" id="customerReviews" tabindex="0" >
                <h3 style="text-align:center; padding:0;">Reviews:</h3>

                <button id="addReview">Add Review</button>
                <form id="customerReview" style="display: none;">
                   <div class="form-group">
                  <label for="customerReview">Name:</label>
                  <input type="text" id="customerName" name="customerName" required minlength=5>
                  </div>

                  <div class="form-group">
                  <label for="customerReview">Detail:</label>
                  <textarea id="customerReviewDesc" name="customerReview" required></textarea>
                  </div>

                   <button type="submit" id="submitBtn">Submit</button>
                </form>
                 ${reviewsHtml}
                </div>

                `;

    return dataRestaurants;
  }

  async generateRestaurantHtml() {
    const dataRestaurants = await this.getRestaurants();

    console.log(dataRestaurants);

    if (dataRestaurants.length === 0) {
      window.alert("ERROR FETCHING DATA");
      return;
    }

    const contentDiv = document.querySelector(".dataContainer");
    const dataHtml = [];

    dataRestaurants.forEach((data) => {
      dataHtml.push(`
        <article data-restId="${data.id}" class="restItemBox" tabindex="0">
          <div class="restDetails">
          <div class="restName" tabindex="0">${data.name}</div>
          <div class="restRating" tabindex="0">${data.rating}</div>
          <div class="restCity" tabindex="0">${data.city}</div>
          </div>
          <div class="restPictureId" tabindex="0">
              <a href="#/detail/?id=${data.id}">
            <img class ="lazyload" data-src="https://restaurant-api.dicoding.dev/images/small/${data.pictureId}" alt="${data.name}">
            </a>
          </div>
          <div class="restDescription" tabindex="0">${data.description}</div>
        </article>`);
    });

    contentDiv.innerHTML = dataHtml.join("");
  }
}

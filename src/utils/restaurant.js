const API_ENDPOINT = "https://restaurant-api.dicoding.dev";
import { FavoriteRestIdb } from "../utils/indexdb.js";
export class Restaurant {
  constructor() {}

  async getRestaurants() {
    try {
      const response = await fetch(`${API_ENDPOINT}/list`, {
        method: "GET",
      });

      const apiData = await response.json();

      return apiData.restaurants;
    } catch (error) {
      console.error("Error fetching data: ", error);
      return [];
    }
  }

  async getRestDetails(id) {
    const response = await fetch(`${API_ENDPOINT}/detail/${id}`, {
      method: "GET",
    });

    const apiData = await response.json();

    return apiData.restaurant;
  }

  async generateRestDetailHtml(id) {
    const dataRestaurants = await this.getRestDetails(id);

    const buttonHtml = `${
      (await FavoriteRestIdb.isFavorite(id))
        ? `<button class="likeBtn favBtn" data-restid=${dataRestaurants.id}>Unlike</button>`
        : `<button class="unlikeBtn favBtn" data-restid=${dataRestaurants.id}>Like</button>`
    }`;

    const contentDiv = document.querySelector(".content");

    let foodsHtml = dataRestaurants.menus.foods
      .map((food) => `<div class="foodName">${food.name}</div>`)
      .join("");

    let drinksHtml = dataRestaurants.menus.drinks
      .map((drink) => `<div class="drinkName">${drink.name}</div>`)
      .join("");

    const reviewsHtml = dataRestaurants.customerReviews
      .map(
        (review) =>
          `<div class="reviewContent">
          <div class="restReviewName" id="reviewName">${review.name}</div>
                    <div class="restReviewReview" id="review">${review.review}</div>
                    <div class="restReviewDate" id="reviewDate">${review.date}</div>
          </div>`
      )
      .join("");

    contentDiv.innerHTML = `<div class="restName" id="name">${dataRestaurants.name}</div>
          <div class="restPictureId">
                  <a href="/restdetail.html?id=${dataRestaurants.id}">
                <img src="https://restaurant-api.dicoding.dev/images/small/${dataRestaurants.pictureId}" alt="${dataRestaurants.name}">
                </a>
              </div>
                <div class="restAddress" id="address">${dataRestaurants.address}</div>
                <div class="restCity" id="city">${dataRestaurants.city}</div>
                <div class="restDesc" id="description">${dataRestaurants.description}</div>
                <div class="restMenus" id="menus">
                    <div class="restFoods" id="foods">
                       ${foodsHtml}
                    </div>
                    <div class="restDrinks" id="drinks">
                      ${drinksHtml}
                    </div>
                </div>
                <div class="restRating" id="rating">${dataRestaurants.rating}</div>
                <div class="restReviews" id="customerReviews">
                 ${reviewsHtml}
                </div>

                ${buttonHtml}
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

    const contentDiv = document.querySelector("#mainContent");
    let dataHtml = [];

    dataRestaurants.forEach((data) => {
      dataHtml.push(`
        <article data-restId="${data.id}" class="restItemBox" tabindex="0">
          <div class="restDetails">
          <div class="restName" tabindex="0">${data.name}</div>
          <div class="restRating" tabindex="0">${data.rating}</div>
          <div class="restCity" tabindex="0">${data.city}</div>
          </div>
          <div class="restPictureId" tabindex="0">
              <a href="/restdetail.html?id=${data.id}">
            <img src="https://restaurant-api.dicoding.dev/images/small/${data.pictureId}" alt="${data.name}">
            </a>
          </div>
          <div class="restDescription" tabindex="0">${data.description}</div>
        </article>`);
    });

    contentDiv.innerHTML = dataHtml.join("");
  }
}

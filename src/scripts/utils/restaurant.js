const data = require("../../public/data/DATA.json");
const API_ENDPOINT = "https://restaurant-api.dicoding.dev";
export class Restaurant {
  constructor() {}

  async getRestaurants() {
    const response = await fetch(`${API_ENDPOINT}/list`, {
      method: "GET",
    });

    const apiData = await response.json();

    return apiData.restaurants;
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


                <button class="text">CLICK ME</button>
`;
  }

  async generateRestaurantHtml() {
    const dataRestaurants = await this.getRestaurants();

    console.log(dataRestaurants);

    const contentDiv = document.querySelector(".content");
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
              <a href="/restdetail.html??id=${data.id}">
            <img src="https://restaurant-api.dicoding.dev/images/small/${data.pictureId}" alt="${data.name}">
            </a>
          </div>
          <div class="restDescription" tabindex="0">${data.description}</div>
        </article>`);
    });

    contentDiv.innerHTML = dataHtml.join("");
  }
}

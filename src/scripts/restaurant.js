const data = require("../public/data/DATA.json");

export class Restaurant {
  constructor() {}

  generateRestaurantHtml() {
    const dataRestaurants = data.restaurants;

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
            <img src="${data.pictureId}" alt="${data.name}">
          </div>
          <div class="restDescription" tabindex="0">${data.description}</div>
        </article>`);
    });

    contentDiv.innerHTML = dataHtml.join("");
  }

  addRestaurant() {
    // Add restaurant functionality
  }

}

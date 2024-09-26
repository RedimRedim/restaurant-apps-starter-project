import "regenerator-runtime"; /* for async await transpile */
import "../styles/main.css";
import "../styles/mediastyles.css";
const data = require("../public/data/DATA.json");
const dataRestaurants = data.restaurants;

function generateRestaurantHtml(dataRestaurants) {
  const contentDiv = document.querySelector(".content");
  let dataHtml = [];

  dataRestaurants.forEach((data) => {
    dataHtml.push(`
        <div data-restId="${data.id}" class="restItemBox">
          <div class="restDetails">
          <div class="restName">${data.name}</div>
          <div class="restRating">${data.rating}</div>
          <div class="restCity">${data.city}</div>
          </div>
          <div class="restPictureId">
            <img src="${data.pictureId}" alt="restaurantPic">
          </div>
          <div class="restDescription">${data.description}</div>
        </div>`);
  });

  contentDiv.innerHTML = dataHtml.join("");
}

function showNav() {
  console.log("asd");
}

generateRestaurantHtml(dataRestaurants);

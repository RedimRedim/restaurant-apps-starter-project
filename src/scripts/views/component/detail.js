import "regenerator-runtime"; /* for async await transpile */
import "../../../styles/main.css";
import "../../../styles/mediastyles.css";
import { Restaurant } from "../utils/restaurant.js";
import { getQueryParameter } from "../utils/queryparams.js";
import { FavoriteRestIdb } from "../utils/indexdb.js";
const RestaurantClass = new Restaurant();
const hrefId = getQueryParameter("id");

function likeClickListener() {
  const likeBtnElement = document.querySelectorAll(".favBtn");

  likeBtnElement.forEach((btn) => {
    btn.addEventListener("click", async () => {
      console.log(btn.textContent);

      if (btn.textContent === "Like") {
        await FavoriteRestIdb.addRestaurant({
          id: btn.dataset.restid,
          favorite: true,
          data: await RestaurantClass.getRestDetails(btn.dataset.restid),
        });
        btn.textContent = "Unlike";
        console.log("Restaurant has been added to favorites db");
      } else {
        await FavoriteRestIdb.delRestaurant(btn.dataset.restid);
        btn.textContent = "Like";
        console.log("Restaurant has been unfavorited");
      }
    });
  });
}

document.addEventListener("DOMContentLoaded", async () => {
  await RestaurantClass.generateRestDetailHtml(hrefId);
  likeClickListener();
});

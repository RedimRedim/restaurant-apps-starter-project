import { Restaurant } from "../component/restaurant.js";
import { getQueryParameter } from "../utils/queryparams.js";
import { Reviews } from "../component/reviews.js";
const restaurant = new Restaurant();
const reviews = new Reviews();
import { FavoriteRestIdb } from "../component/indexdb.js";
import { initSkipLink } from "../utils/skip-link.js";

export const restDetail = {
  render() {
    return `
        <section>

            <div class="content-title" id="exploreContent">Detail Restaurant</div>

            <div class="detail-content">

                <!-- automatically generate through js box content-->
            </div>
        </section>

        </div>
    `;
  },

  changeLikeBtnColor() {
    const btn = document.querySelector(".restDetails > button");
    const btnText = btn.textContent;
    const addReviewBtn = document.querySelector(".restReviews > button");
    const addReviewText = addReviewBtn.textContent;
    btn.style.backgroundColor = btnText === "Unlike" ? "#424242" : "#1677ff";

    if (addReviewText === "Add Review") {
      addReviewBtn.textContent = "Add Review";
      addReviewBtn.style.backgroundColor = "#1677ff";
    } else {
      addReviewBtn.textContent = "Edit Review";
      addReviewBtn.style.backgroundColor = "#424242";
    }
  },

  addReviewClickListener() {
    this.changeLikeBtnColor();
    const addReviewBtn = document.querySelector("#addReview");
    addReviewBtn.addEventListener("click", () => {
      const currentDisplay =
        document.querySelector("#customerReview").style.display;
      if (currentDisplay === "none" || currentDisplay === "") {
        document.querySelector("#customerReview").style.display = "block"; // Show the form
        addReviewBtn.textContent = "Hide Review";
        addReviewBtn.style.backgroundColor = "#424242";
      } else {
        document.querySelector("#customerReview").style.display = "none"; // Hide the form
        addReviewBtn.textContent = "Add Review";
        addReviewBtn.style.backgroundColor = "#1677ff";
      }
    });
  },

  handlingSubmitRewiewFormListener() {
    const addReviewBtn = document.querySelector("#submitBtn");
    addReviewBtn.addEventListener("click", async (event) => {
      event.preventDefault();
      await reviews.postReview();
    });
  },

  likeClickListener() {
    const likeBtnElement = document.querySelectorAll(".favBtn");

    likeBtnElement.forEach((btn) => {
      btn.addEventListener("click", async () => {
        console.log(btn.textContent);

        if (btn.textContent === "Like") {
          await FavoriteRestIdb.addRestaurant({
            id: btn.dataset.restid,
            favorite: true,
            data: await restaurant.getRestDetails(btn.dataset.restid),
          });
          btn.style.backgroundColor = "#424242";
          btn.textContent = "Unlike";
          console.log("Restaurant has been added to favorites db");
        } else {
          await FavoriteRestIdb.delRestaurant(btn.dataset.restid);
          btn.style.backgroundColor = "#1677ff";
          btn.textContent = "Like";
          console.log("Restaurant has been unfavorited");
        }
      });
    });
  },

  initListener() {
    this.likeClickListener();
    this.addReviewClickListener();
    initSkipLink();
  },

  async afterRender() {
    const hrefId = getQueryParameter("id");

    await restaurant.generateRestDetailHtml(hrefId);
    this.changeLikeBtnColor();
    this.initListener();
    this.handlingSubmitRewiewFormListener();
  },
};

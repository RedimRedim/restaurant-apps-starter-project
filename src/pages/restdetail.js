import { Restaurant } from "../component/restaurant.js";
import { getQueryParameter } from "../utils/queryparams.js";
const restaurant = new Restaurant();
import { FavoriteRestIdb } from "../component/indexdb.js";
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

    btn.style.backgroundColor = btnText === "Unlike" ? "#424242" : "#1677ff";
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
  },

  async afterRender() {
    const hrefId = getQueryParameter("id");
    await restaurant.generateRestDetailHtml(hrefId);
    this.changeLikeBtnColor();
    this.initListener();
  },
};

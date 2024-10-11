import { Restaurant } from "../utils/restaurant.js";
import { getQueryParameter } from "../utils/queryparams.js";
const restaurant = new Restaurant();
import { FavoriteRestIdb } from "../utils/indexdb.js";
export const restDetail = {
  render() {
    return `
        <section>

            <div class="content-title" id="exploreContent">Detail Restaurant</div>

            <div class="content">

                <!-- automatically generate through js box content-->
            </div>
        </section>

        </div>
    `;
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
          btn.textContent = "Unlike";
          console.log("Restaurant has been added to favorites db");
        } else {
          await FavoriteRestIdb.delRestaurant(btn.dataset.restid);
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
    this.initListener();
  },
};

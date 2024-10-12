import { Restaurant } from "../component/restaurant";

export const home = {
  render() {
    return `

    <section>

      <div class="content-title" id="exploreContent">Explore Restaurant</div>

      <button id="addRestaurant">Add Restaurant</button>
      <form id="restForm" style="display:none">
        <div class="rest-group">
          <label for="restName">Name</label>
          <input type="text" id="restName" name="restName" required minlength=5>
        </div>

        <div class="rest-group">
          <label for="restDesc">Description</label>
          <textarea id="restDesc" name="restDesc" required></textarea>
        </div>

        <div class="rest-group">
          <label for="restCity">City</label>
          <input type="text" id="restCity" name="restCity" required>
        </div>

        <div class="rest-group">
          <label for="restPictureId">Upload Image</label>
          <input type="file" id="restPictureId" name="restPictureId" accept="image/*">
        </div>

        <div class="rest-group">
          <label for="restRating">Rating</label>
          <input type="number" id="restRating" name="restRating" min="1" max="5" step="0.5"     placeholder="Rate between 1 and 5"
          aria-describedby="ratingHelp"
          required></div>


        <div class="rest-button-group">
          <button type="submit" id="saveRest">Save</button>
          <button type="button" id="cancelRest">Cancel</button>
        </div>
      </form>

      <div class="dataContainer">
        <!-- automatically generate through js box content-->
      </div>
    </section>

    </div>
    `;
  },

  handlingAddRestBtn() {
    const addRestElement = document.getElementById("addRestaurant");

    addRestElement.addEventListener("click", () => {
      const currentDisplay = document.getElementById("restForm").style.display;
      if (currentDisplay === "none" || currentDisplay === "") {
        restForm.style.display = "block"; // Show the form
        addRestElement.textContent = "Hide Button";
      } else {
        restForm.style.display = "none"; // Hide the form
        addRestElement.textContent = "Add Restaurant";
      }
    });

    document.getElementById("cancelRest").addEventListener("click", () => {
      restForm.style.display = "none"; // Hide the form
      addRestElement.textContent = "Add Restaurant";
    });
  },

  handlingSubmitRestForm() {
    document.getElementById("restForm").addEventListener("submit", (event) => {
      event.preventDefault();
      const formData = new FormData(event.target); // Creates a FormData object

      const restData = {
        restName: formData.get("restName"),
        restDesc: formData.get("restDesc"),
        restCity: formData.get("restCity"),
        restPictureId: formData.get("restPictureId"),
        restRating: formData.get("restRating"),
      };

      window.alert(
        `${JSON.stringify(restData)}reserve post data to backend in the future`
      ); //reserve post data to backend in the future
    });
  },

  async afterRender() {
    const restaurant = new Restaurant();
    this.handlingAddRestBtn();
    this.handlingSubmitRestForm();
    await restaurant.generateRestaurantHtml();
    console.log("welcome to homepage");
  },
};

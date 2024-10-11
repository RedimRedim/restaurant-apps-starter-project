export const index = {
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
        <p class="error-message" id="titleError"></p>

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
          <input type="number" id="restRating" name="restRating" min="1" max="5" step="0.5" required>
        </div>


        <div class="rest-group rest-button-group">
          <button type="submit" id="saveRest">Save</button>
          <button type="button" id="cancelRest">Cancel</button>
        </div>
      </form>

      <div class="content">
        <!-- automatically generate through js box content-->
      </div>
    </section>

    </div>
    `;
  },
};

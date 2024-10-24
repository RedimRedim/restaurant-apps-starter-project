//TODO ERROR IF NAME IS BELOW 5
//TODO ERROR REVIEW IF FETCH API IS NOT EXISTING

//TODO SUCCESS CASE WHEN NAME ABOVE 5 AND FETCH API IS EXISTING

import { JSDOM } from "jsdom"; // Import JSDOM
import { describe, it, expect } from "vitest";
import { vi } from "vitest";
import { restDetail } from "../src/pages/restdetail";
import { Reviews } from "../src/component/reviews";

vi.mock("../src/utils/loading", () => ({
  showLoading: vi.fn(), // Mock the function
  hideLoading: vi.fn(),
}));

describe("Add Review", async () => {
  let submitButton;
  let reviewInstance;
  let postReviewMock;
  beforeEach(() => {
    const { window } = new JSDOM(`<!doctype html><body>
      <form id="customerReview" style="display: block;">
                   <div class="form-group">
                  <label for="customerReview">Name:</label>
                  <input type="text" id="customerName" name="customerName" required="" minlength="5">
                  </div>

                  <div class="form-group">
                  <label for="customerReview">Detail:</label>
                  <textarea id="customerReviewDesc" name="customerReview" required=""></textarea>
                  </div>
                   <button type="submit" id="submitBtn">Submit</button>
                </form>
      </body><html>`);

    global.document = window.document;
    global.window = window;
    window.alert = vi.fn(); // Mock alert

    submitButton = document.querySelector("#submitBtn");

    reviewInstance = new Reviews();
    // Mock the postReview method correctly
    postReviewMock = vi.spyOn(reviewInstance, "postReview");
    restDetail.handlingSubmitReviewFormListener();
  });

  it("should add review if name is valid and over 5 characters", async () => {
    const customerNameInput = document.querySelector("#customerName");
    const customerReviewInput = document.querySelector("#customerReviewDesc");

    // Set invalid input values
    customerNameInput.value = "123";
    customerReviewInput.value = "review1";

    await submitButton.click();

    expect(window.alert).toHaveBeenCalledWith(
      "Minimum Length for name is 5 characters"
    ); // Check alert message
  });
});

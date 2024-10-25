// //TODO ERROR IF NAME IS BELOW 5
// //TODO ERROR REVIEW IF FETCH API IS NOT EXISTING

// //TODO SUCCESS CASE WHEN NAME ABOVE 5 AND FETCH API IS EXISTING

// import { JSDOM } from "jsdom"; // Import JSDOM
// import { describe, it, expect } from "vitest";
// import { vi } from "vitest";
// import { restDetail } from "../src/pages/restdetail";
// import { Reviews } from "../src/component/reviews";

// vi.mock("../src/utils/loading", () => ({
//   showLoading: vi.fn(), // Mock the function
//   hideLoading: vi.fn(),
// }));

// describe("Add Review", async () => {
//   let submitButton;
//   let form;
//   let reviews;

//   beforeEach(() => {
//     const { window } = new JSDOM(`<!doctype html><body>
//       <form id="customerReview" style="display: block;">
//                    <div class="form-group">
//                   <label for="customerReview">Name:</label>
//                   <input type="text" id="customerName" name="customerName" required="" minlength="5">
//                   </div>

//                   <div class="form-group">
//                   <label for="customerReview">Detail:</label>
//                   <textarea id="customerReviewDesc" name="customerReview" required=""></textarea>
//                   </div>
//                    <button type="submit" id="submitBtn">Submit</button>
//                 </form>
//       </body><html>`);
//     global.document = window.document;

//     submitButton = document.querySelector("#submitBtn");
//     form = document.querySelector("#customerReview");

//     // Instantiate the Reviews class and mock the postReview method
//     reviews = new Reviews();
//     reviews.postReview = vi.fn(); // Mock the postReview method
//     // Mock the postReview method correctly
//     global.reviews = reviews;
//     global.alert = vi.fn();
//     restDetail.handlingSubmitReviewFormListener();
//   });

//   it("should add review if name is valid and over 5 characters", async () => {
//     form.querySelector("#customerName").value = "a";
//     form.querySelector("#customerReviewDesc").value = "review1";

//     await submitButton.click();
//     console.log(global.alert);
//     expect(global.alert).toHaveBeenCalledWith(
//       "Minimum Length for name is 5 characters",
//     );
//   });
// });

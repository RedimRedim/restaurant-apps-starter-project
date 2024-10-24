// //TODO ERROR IF NAME IS BELOW 5
// //TODO ERROR REVIEW IF FETCH API IS NOT EXISTING

// //TODO SUCCESS CASE WHEN NAME ABOVE 5 AND FETCH API IS EXISTING

// import { JSDOM } from "jsdom"; // Import JSDOM
// import { describe, it, expect } from "vitest";
// import { vi } from "vitest";
// import { restDetail } from "../src/pages/restdetail";
// import { Reviews } from "../src/component/reviews.js";

// const reviews = new Reviews();
// vi.spyOn(reviews, "postReview").mockResolvedValue({ success: true });
// // Access the mocked Reviews

// describe("Add Review", async () => {
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
//     global.window = window;
//     restDetail.handlingSubmitReviewFormListener();
//   });

//   it("should add review if name is valid and over 5 characters", async () => {
//     const customerNameDiv = document.querySelector("#customerName");
//     const customerReviewDiv = document.querySelector("#customerReview");
//     const submitButton = document.querySelector("#submitBtn");
//     customerNameDiv.value = "test11";
//     customerReviewDiv.value = "review1";
//     submitButton.click();

//     // Wait for promises to resolve

//     // Check if postReview was called
//     expect(reviews.postReview).toHaveBeenCalled();
//   });
// });

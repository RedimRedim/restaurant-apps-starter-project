import { API_ENDPOINT } from "../globals/config.js";
import { getQueryParameter } from "../utils/queryparams";
import { showLoading, hideLoading } from "../utils/loading.js";

export class Reviews {
  constructor() {}

  async postReview() {
    showLoading();
    try {
      const name = document.querySelector("#customerName").value;
      const review = document.querySelector("#customerReviewDesc").value;

      if (!name || !review) {
        alert("Please fill in all the required fields");
        return;
      }
      const id = getQueryParameter("id");

      if (!name || !review) {
        alert("Name and Review fields are required");
        return;
      }

      const data = {
        id: id,
        name,
        review,
      };

      const response = await fetch(`${API_ENDPOINT}/review`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        alert("Review has been added successfully" + JSON.stringify(data));
        document.querySelector("#reviewName").value = "";
        document.querySelector("#review").value = "";
        window.location.reload();
      }
    } catch (error) {
      console.error("Error adding review: ", error);
    } finally {
      hideLoading();
    }
  }
}

import { fireEvent, getByText } from "@testing-library/dom";
import { restDetail } from "../src/pages/restdetail";

describe("like button functionality", () => {
  beforeEach(() => {
    document.body.innerHTML =
      '<button class="likeBtn favBtn" data-restid="1">Like</button>';
    restDetail.likeClickListener();
  });

  it("changes like button text when clicked", () => {
    const button = document.querySelector(".favBtn");

    fireEvent.click(button);

    expect(button.innerHTML).toBe("Unlike");
  });
});

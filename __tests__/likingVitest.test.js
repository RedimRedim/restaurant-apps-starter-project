import { JSDOM } from "jsdom"; // Import JSDOM
import { restDetail } from "../src/pages/restdetail";
import { describe, it, expect } from "vitest";
import { vi } from "vitest";
import { FavoriteRestIdb } from "../src/component/indexdb";

vi.mock("../src/component/indexdb.js", () => ({
  FavoriteRestIdb: {
    addRestaurant: vi.fn().mockResolvedValue({ id: "1", favorite: true }), // Mock the function
    delRestaurant: vi.fn().mockResolvedValue("1"), // Mock the function
  },
}));

vi.mock("../src/component/restaurant.js", () => {
  return {
    Restaurant: vi.fn().mockImplementation(() => {
      return {
        getRestDetails: vi.fn().mockResolvedValue({ data: {} }),
      };
    }),
  };
});

vi.mock("../src/utils/loading", () => ({
  showLoading: vi.fn(), // Mock the function
  hideLoading: vi.fn(),
}));

describe("like button functionality", () => {
  let button;

  beforeEach(() => {
    const { window } = new JSDOM(`<!doctype html><html><body>
       <button class="likeBtn favBtn" data-restid="1">Like</button>
       </body></html>`);
    global.document = window.document; // Set global document
    button = document.querySelector(".favBtn"); // Initialize button
    restDetail.likeClickListener();
  });

  //First time Pressing like button
  it("should change button.TextContent = Unlike once clicked", async () => {
    expect(button.textContent).toEqual("Like");
    await button.click(); // First click to like
    expect(FavoriteRestIdb.addRestaurant).toHaveBeenCalledWith({
      id: "1",
      favorite: true,
      data: expect.anything(),
    }); // Check addRestaurant was called

    await Promise.resolve();
    expect(button.textContent).toEqual("Unlike");
  });

  it("should change button.TextContent = Like once unliked", async () => {
    button.textContent = "Unlike";
    expect(button.textContent).toEqual("Unlike");
    await button.click(); // First click to like
    expect(FavoriteRestIdb.delRestaurant).toHaveBeenCalledWith("1"); // Check delRestaurant was called

    await Promise.resolve();
    expect(button.textContent).toEqual("Like");
  });
});

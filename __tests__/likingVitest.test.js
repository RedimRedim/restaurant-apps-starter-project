import { JSDOM } from "jsdom"; // Import JSDOM
import { restDetail } from "../src/pages/restdetail";
import { describe, it, expect } from "vitest";
import { vi } from "vitest";
import { FavoriteRestIdb } from "../src/component/indexdb";

vi.mock("../src/component/indexdb.js", () => ({
  FavoriteRestIdb: {
    addRestaurant: vi.fn().mockResolvedValue({ id: 1 }), // Mock the function
    delRestaurant: vi.fn().mockResolvedValue({ id: 1 }), // Mock the function
  },
}));

vi.mock("../src/component/restaurant.js", () => {
  return {
    Restaurant: vi.fn().mockImplementation(() => {
      return {
        getRestDetails: vi.fn().mockResolvedValue({ id: 1 }),
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
       <button class="likeBtn favBtn">Like</button>
       </body></html>`);
    global.document = window.document; // Set global document
    button = document.querySelector(".favBtn"); // Initialize button
    restDetail.likeClickListener();
  });

  //First time Pressing like button
  it("it should change button.TextContent = Unlike once clicked", async () => {
    expect(button.textContent).toEqual("Like");
    await button.click(); // First click to like
    expect(FavoriteRestIdb.addRestaurant).toHaveBeenCalledWith({
      id: 1,
      favorite: true,
      data: { id: 1 },
    }); // Check addRestaurant was called
    expect(button.textContent).toEqual("Unlike");
  });

  it("it should change button.TextContent = Like once unliked", async () => {
    button.textContent = "Unlike";
    expect(button.textContent).toEqual("Unlike");
    await button.click(); // First click to like
    expect(FavoriteRestIdb.delRestaurant).toHaveBeenCalledWith({ id: 1 }); // Check delRestaurant was called
    expect(button.textContent).toEqual("Like");
  });
});

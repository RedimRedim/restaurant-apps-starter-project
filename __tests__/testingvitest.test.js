import { JSDOM } from "jsdom"; // Import JSDOM
import { restDetail } from "../src/pages/restdetail";
import { describe, it, expect } from "vitest";
import { vi } from "vitest";

vi.mock("../src/utils/loading", () => ({
  showLoading: vi.fn(), // Mock the function
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

  it("change button once clicked", async () => {
    expect(button.textContent).toEqual("Like");
    await button.click(); // First click to like
    await Promise.resolve(); // Wait for async operations to resolve

    expect(button.textContent).toEqual("Unlike");
  });
});

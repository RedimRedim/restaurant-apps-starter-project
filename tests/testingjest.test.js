const { restDetail } = require("../src/pages/restdetail");
const { JSDOM } = require("jsdom");

jest.mock("../src/component/indexdb.js", () => ({
  addRestaurant: jest.fn(),
  delRestaurant: jest.fn(),
}));

jest.mock("../src/component/restaurant.js", () => ({
  getRestDetails: jest.fn().mockResolvedValue({}),
}));

describe("like button functionality", () => {
  beforeEach(() => {
    const { window } = new JSDOM(`<!doctype html><html><body>
      <button class="likeBtn favBtn" data-restid="1">Like</button>
      </body></html>`);
    document = window.document;
    global.document = document;

    restDetail.likeClickListener();
  });

  test("changes like button text when clicked", async () => {
    const button = document.querySelector(".favBtn");

    button.click();

    await Promise.resolve();

    expect(button.textContent).toBe("Unlike");
  });
});

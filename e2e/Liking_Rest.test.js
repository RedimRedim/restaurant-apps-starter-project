/* eslint-env codeceptjs */

const { strict: assert } = require("assert");

Feature("Liking Restaurant");

Scenario("showing empty liked restaurant", ({ I }) => {
  I.amOnPage("/#/favorite");
  I.seeElement(".favContainer");

  I.see("Not yet added any favorite restaurant");
});

Scenario("Liking & Unliking one movie", async ({ I }) => {
  I.amOnPage("/");
  I.seeElement(".restPictureId > a");
  I.click(locate(".restPictureId > a").first());
  I.seeElement(".favBtn");
  I.see("Like");
  I.click(".favBtn");

  let dataRestId = await I.grabAttributeFrom(".favBtn", "data-restid");

  I.amOnPage("/#/favorite");
  const href = await I.grabAttributeFrom(".restPictureId > a", "href");
  console.log(dataRestId, href);
  assert(
    href.includes(dataRestId),
    `Expected Href to include DataRestId, but got: ${href}`
  );

  //Unliking part
  I.amOnPage("/#/favorite");
  await I.seeElement(".restPictureId > a");
  I.click(locate(".restPictureId > a").first());
  I.seeElement(".favBtn");
  I.see("Unlike");
  dataRestId = await I.grabAttributeFrom(".favBtn", "data-restid");
  I.click(".favBtn");

  I.amOnPage("/#/favorite");
  I.see("Not yet added any favorite restaurant");
});

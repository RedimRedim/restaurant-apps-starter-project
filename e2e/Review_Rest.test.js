/* eslint-env codeceptjs */

const { faker } = require("@faker-js/faker");

Feature("Review Restaurant");

Scenario("Adding Custom Review", ({ I }) => {
  const name = faker.person.fullName();
  const detail = faker.lorem.sentence();

  I.amOnPage("/");
  I.seeElement(".restPictureId > a");
  I.click(locate(".restPictureId > a").first());

  I.seeElement("#addReview");
  I.click("#addReview");
  I.fillField("customerName", name);
  I.fillField("customerReview", detail);

  I.click("#submitBtn");

  I.waitForElement("#reviewName", 5);
  I.see(name, "#reviewName");
  I.see(detail, "#review");
});

Feature("Review Restaurant Invalid Name Case");

Scenario("Adding Name that below 5 characters or null", ({ I }) => {
  I.amOnPage("/");
  I.seeElement(".restPictureId > a");
  I.click(locate(".restPictureId > a").first());

  I.seeElement("#addReview");
  I.click("#addReview");
  I.fillField("customerName", "a");
  I.fillField("customerReview", "test");
  I.click("#submitBtn");
  I.seeInPopup("Minimum Length for name is 5 characters");
  I.acceptPopup();
});

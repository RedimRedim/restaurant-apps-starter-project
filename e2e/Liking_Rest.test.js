Feature("Liking Restaurant");

Scenario("showing empty liked movies", ({ I }) => {
  I.amOnPage("/#/favorite");
  I.seeElement(".favContainer");

  I.see("Not yet added any favorite restaurant");
});

Scenario("Liking one movie", ({ I }) => {
  I.amOnPage("/#/detail/?id=s1knt6za9kkfw1e867");
  I.seeElement(".favBtn");
  I.see("Like");
  I.click(".favBtn");

  I.amOnPage("/#/favorite");

  I.grabAttributeFrom("a[href='#/detail/?id=s1knt6za9kkfw1e867']", "href").then(
    (href) => {
      console.log(href);

      I.assertEqual(href, "#/detail/?id=s1knt6za9kkfw1e867");
    }
  );
});

Scenario("Unliking one movie", ({ I }) => {
  I.amOnPage("/#/detail/?id=s1knt6za9kkfw1e867");
  I.seeElement(".favBtn");
  I.click(".favBtn"); //Like first click then will change into Unlike
  I.see("Unlike");
  I.click(".favBtn"); //Unlike click

  I.amOnPage("/#/favorite");

  I.see("Not yet added any favorite restaurant");
});

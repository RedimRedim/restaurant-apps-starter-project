function concatString(a, b) {
  return a + b;
}

test("concanate string", () => {
  expect(concatString("2", "2")).toBe("22");
});

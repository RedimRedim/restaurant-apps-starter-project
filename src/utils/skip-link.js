export const initSkipLink = () => {
  const skipLinkElem = document.querySelector(".skip-link");
  skipLinkElem.addEventListener("click", (event) => {
    event.preventDefault();
    document.querySelector("#mainContent").focus();
  });
};

export function setupSkipLink() {
  const skipLinkElem = document.querySelector(".skip-link");
  skipLinkElem.addEventListener("click", (event) => {
    event.preventDefault();
    const mainContent = document.querySelector("#mainContent");
    if (mainContent) {
      mainContent.focus();
      console.log("Focused on main content");
    } else {
      console.error("Main content element not found");
    }
  });
}

import anime from "animejs/lib/anime.es.js";

// Show loading spinner
export function showLoading() {
  const loading = document.getElementById("loading");
  loading.style.display = "flex";

  // Anime.js animation
  anime({
    targets: ".dot",
    translateY: [
      { value: -10, duration: 400, easing: "easeInOutQuad" },
      { value: 0, duration: 400, easing: "easeInOutQuad" },
    ],
    opacity: [
      { value: 0.5, duration: 400, easing: "easeInOutQuad" },
      { value: 1, duration: 400, easing: "easeInOutQuad" },
    ],
    delay: anime.stagger(500), // Delay each dot's animation
  });
}

// Hide loading spinner
export function hideLoading() {
  const loading = document.getElementById("loading");
  loading.style.display = "none";
}

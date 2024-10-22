const { skeletonPlugin } = require("@skeletonlabs/tw-plugin");

module.exports = {
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}", // Adjust paths as necessary
    "./node_modules/@skeletonlabs/skeleton/**/*.js",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    skeletonPlugin,
    // other plugins if needed
  ],
};

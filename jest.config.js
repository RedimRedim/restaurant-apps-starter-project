module.exports = {
  transform: {
    "^.+\\.jsx?$": "babel-jest",
    "^.+\\.js$": "babel-jest",
  },
  moduleNameMapper: {
    "\\.(css|less|scss)$": "identity-obj-proxy",
    "\\.(gif|ttf|eot|svg)$": "jest-transform-stub", // Mock other assets
  },
  testEnvironment: "jsdom", // If you're testing a web application
};

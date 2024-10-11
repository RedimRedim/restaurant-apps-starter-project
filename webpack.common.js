const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  entry: {
    main: "./src/component/main.js",
  },
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          {
            loader: "style-loader",
          },
          {
            loader: "css-loader",
          },
        ],
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),

    new HtmlWebpackPlugin({
      filename: "index.html",
      template: path.resolve(__dirname, "./src/templates/index.html"),
      chunks: ["main"],
    }),

    new CopyWebpackPlugin({
      patterns: [
        { from: "src/images", to: "images" }, // Adjust according to your file structure
      ],
    }),

    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, "./manifest.json"),
          to: path.resolve(__dirname, "dist/"),
        },
        {
          from: path.resolve(__dirname, "src/images/icons"), // if you have icons
          to: path.resolve(__dirname, "dist/icons"),
        },
      ],
    }),

    // new HtmlWebpackPlugin({
    //   filename: "restdetail.html",
    //   template: path.resolve(__dirname, "./src/templates/restdetail.html"),
    //   chunks: ["restdetail"],
    // }),

    // new HtmlWebpackPlugin({
    //   filename: "restfavorite.html",
    //   template: path.resolve(__dirname, "./src/templates/restfavorite.html"),
    //   chunks: ["restfavorite"],
    // }),
  ],
};

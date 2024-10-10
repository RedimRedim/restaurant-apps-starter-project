const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  entry: {
    main: "./src/scripts/views/component/main.js",
    restdetail: "./src/scripts/views/component/detail.js",
    restfavorite: "./src/scripts/views/component/favorite.js",
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

    // new CopyWebpackPlugin({
    //   patterns: [
    //     {
    //       from: path.resolve(__dirname, "src/public/"),
    //       to: path.resolve(__dirname, "dist/"),
    //     },
    //   ],
    // }),
  ],
};

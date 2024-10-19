const { API_ENDPOINT } = require("./src/globals/config.js");

const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const WorkboxPlugin = require("workbox-webpack-plugin");
const ImageminWebpackPlugin = require("imagemin-webpack-plugin").default;
const ImageminMozjpeg = require("imagemin-mozjpeg");

module.exports = {
  entry: {
    main: "./src/views/main.js",
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
        {
          from: path.resolve(__dirname, "src/public"),
          to: path.resolve(__dirname, "dist"),
        },
      ],
    }),

    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, "src/public"),
          to: path.resolve(__dirname, "dist"),
          globOptions: {
            ignore: ["images/**/*.jpg"], // Adjust as needed to ignore only specific images
          },
        },
      ],
    }),

    // new WorkboxPlugin.GenerateSW({
    //   clientsClaim: true,
    //   skipWaiting: true,
    //   runtimeCaching: [
    //     {
    //       // Caching API responses
    //       urlPattern: new RegExp(`${API_ENDPOINT}/(list|detail)`),
    //       handler: "NetworkFirst",
    //       options: {
    //         cacheName: "api-cache",
    //         expiration: {
    //           maxEntries: 50,
    //           maxAgeSeconds: 7 * 24 * 60 * 60, // Cache for 1 week
    //         },
    //         cacheableResponse: {
    //           statuses: [0, 200],
    //         },
    //       },
    //     },
    //     {
    //       // Caching API images
    //       urlPattern: new RegExp(
    //         "https://restaurant-api.dicoding.dev/images/.*"
    //       ),
    //       handler: "CacheFirst",
    //       options: {
    //         cacheName: "image-cache",
    //         expiration: {
    //           maxEntries: 100,
    //           maxAgeSeconds: 30 * 24 * 60 * 60, // Cache for 30 days
    //         },
    //         cacheableResponse: {
    //           statuses: [0, 200],
    //         },
    //       },
    //     },
    //     {
    //       // Caching static assets like js, css, html
    //       urlPattern: /\.(?:js|css|html|png|jpg|jpeg|gif|svg)$/,
    //       handler: "CacheFirst",
    //       options: {
    //         cacheName: "static-assets-cache",
    //         expiration: {
    //           maxEntries: 100,
    //           maxAgeSeconds: 30 * 24 * 60 * 60,
    //         },
    //       },
    //     },
    //   ],
    // }),

    new ImageminWebpackPlugin({
      plugins: [
        ImageminMozjpeg({
          quality: 50,
          progressive: true,
        }),
      ],
    }),
  ],
};
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

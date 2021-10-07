var path = require("path");

// Recreates the Html-File from the Orginal File
const HTMLWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
// 1) The Following Command does Delete the Dist Folder after Typing "npm run build" and make a new one
// 2) The Following Command does Delete the Dist Folder after Typing "npm run start:dev"
// const { CleanWebpackPlugin } = require("clean-webpack-plugin");

console.log("path.resolve(__dirname, 'src')", path.resolve(__dirname, "src"));

module.exports = {
  entry: "./src/assets/js/app.js",

  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "assets/js/bundle.js",
    // publicPath: "/dist",
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader",
            options: { minimize: true },
          },
        ],
      },
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.(png|jpg|gif|svg|jpeg)$/,
        type: "asset/resource",
        generator: {
          filename: "assets/images/[name][ext]",
        },
        // use: [
        //   {
        //     loader: "file-loader",
        //     options: {
        //       name: "[name].[ext]",
        //       publicPath: "assets/images/",
        //       outputPath: "assets/images/",
        //     },
        //   },
        // ],
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        type: "asset/resource",
        generator: {
          filename: "assets/fonts/[name][ext]",
        },
        /* This is the Syntax of the Old Webpack Version */

        // loader: "file-loader",
        // options: {
        //   // name: "[name].[ext]",
        //   // outputPath: "assets/fonts/",
        //   // publicPath: "../fonts/",
        // },
      },
    ],
  },
  plugins: [
    new HTMLWebpackPlugin({
      template: "src/index.html",
      filename: "index.html",
    }),
    new MiniCssExtractPlugin({
      filename: "[name].css",
      chunkFilename: "[id].css",
    }),
    // new CleanWebpackPlugin({
    //   cleanAfterEveryBuildPatterns: ["dist"],
    // }),
  ],
  resolve: {
    alias: {
      "~": path.resolve(__dirname, "src/assets/js"),
      "@src": path.resolve(__dirname, "src"),
      "@fonts": path.resolve(__dirname, "src/assets/fonts"),
      "@images": path.resolve(__dirname, "src/assets/images"),
      "@scss": path.resolve(__dirname, "src/assets/scss"),
    },
  },
};

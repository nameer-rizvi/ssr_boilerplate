const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const { browser } = require("../../shared/index");

module.exports = isProd => {
  return [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      ...browser.html,
      minify: isProd,
      hash: false,
      cache: true
    }),
    new MiniCssExtractPlugin({
      filename: isProd ? "[name].[hash].css" : "[name].css",
      chunkFilename: isProd ? "[id].[hash].css" : "[id].css"
    })
  ];
};

// If using moment.js:
//   1. Import IgnorePlugin:
//     const IgnorePlugin = require("webpack").IgnorePlugin;
//   2. Add to return statement:
//     new IgnorePlugin(/^\.\/locale$/, /moment$/)

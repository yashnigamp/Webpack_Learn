const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");
module.exports = {
  entry: "./index.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
    assetModuleFilename: "assets/[hash][ext]",
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./index.html",
    }),
    new CopyPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, "assets/1.jpg"),
          to: path.resolve(__dirname, "dist", "assets"),
        },
      ],
    }),
  ],
  module: {
    rules: [
      {
        test: /.(jpg)$/,
        type: "asset/resource",
      },
    ],
  },
};

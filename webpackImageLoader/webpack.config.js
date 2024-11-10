const path = require("path");

module.exports = {
  entry: "./index.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
    assetModuleFilename: "asset/[hash][ext]",
    clean: true,
  },
  module: {
    rules: [
      {
        type: "asset/resource",
        test: /.(jpg)$/,
      },
    ],
  },
};

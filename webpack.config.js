const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.js",

  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
    }),
  ],
  module: {
    rules: [
      // CSS
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"], // !!
      },
      // IMG
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        type: "asset/resource", // автоматически копирует в dist
      },
    ],
  },
  devServer: {
    static: "./dist",
    port: 8080,
    open: true,
    hot: true,
  },
  mode: "development",
};

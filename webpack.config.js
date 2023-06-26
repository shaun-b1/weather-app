const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  context: path.resolve(__dirname, "src"),
  entry: {
    index: "./js/index.js",
  },
  devtool: "inline-source-map",
  plugins: [
    new HtmlWebpackPlugin({
      title: "Development",
    }),
  ],
  watch: process.argv.indexOf("--watch") > -1,
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [["@babel/preset-env", { targets: "defaults" }]],
          },
        },
      },
    ],
  },
  output: {
    filename: "./js/[name].bundle.js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },
};

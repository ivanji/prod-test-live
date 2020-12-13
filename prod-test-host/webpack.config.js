const HtmlWebPackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

module.exports = (_, argv) => ({
  output: {
    publicPath:
      argv.mode === "development"
        ? "http://localhost:8080/"
        : "https://prod-test-live.vercel.app/",
  },

  resolve: {
    extensions: [".jsx", ".js", ".json"],
  },

  devServer: {
    port: 8080,
  },

  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
    ],
  },

  plugins: [
    new ModuleFederationPlugin({
      name: "designSystem",
      filename: "remoteEntry.js",
      remotes: {},
      exposes: {
        "./CarWidget": "./src/components/CardWidget",
        "./Header": "./src/components/Header",
      },
      shared: require("./package.json").dependencies,
    }),
    new HtmlWebPackPlugin({
      template: "./src/index.html",
    }),
  ],
});
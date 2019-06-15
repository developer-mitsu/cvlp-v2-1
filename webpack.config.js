const MODE = "development";
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const fileName = MODE == "production" ? "[name]-[hash]" : "[name]";

module.exports = {
  mode: MODE,
  entry: {
    main: "./src/js/main.js",
    contact: "./src/js/sub.js"
  },
  output: {
    filename: `${fileName}.js`,
    path: __dirname + "/dist"
  },
  devServer: {
    contentBase: "./dist"
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              importLoaders: 2
            }
          },
          {
            loader: "postcss-loader",
            options: {
              plugins: [
                require("autoprefixer")({
                  grid: true
                })
              ]
            }
          },
          "sass-loader"
        ]
      },
      {
        test: /\.ejs$/,
        use: [
          {
            loader: "extract-loader",
            options: {
              publicPath: "./dist"
            }
          },
          {
            loader: "html-loader",
            options: {
              attrs: ["img:src", ":data-src"]
            }
          },
          {
            loader: "ejs-compiled-loader"
          }
        ]
      },
      {
        test: /\.(gif|png|jpg|jpeg)$/,
        use: [
          {
            loader: "url-loader",
            options: {
              limit: 51200,
              name: `./img/${fileName}.[ext]`
            }
          }
        ]
      },
      {
        test: /\.php$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name].[ext]"
            }
          }
        ]
      },
      {
        test: /\.js$/,
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: [["@babel/preset-env", { modules: false }]]
            }
          }
        ],
        exclude: /node_modules/
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      // chunks: ["main"],
      filename: "main.html",
      template: "src/main.ejs"
    }),
    new HtmlWebpackPlugin({
      // chunks: ["contact"],
      filename: "contact.html",
      template: "src/contact.ejs"
    }),
    new CleanWebpackPlugin()
  ]
};

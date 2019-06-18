const MODE = "development";
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const fileName = MODE == "production" ? "[name]-[hash]" : "[name]";

module.exports = {
  mode: MODE,
  entry: {
    main: "./src/js/main.js",
    contact: "./src/js/sub.js",
    curriculum: "./src/js/curriculum.js",
    download: "./src/js/download.js",
    student1: "./src/js/student1.js",
    student2: "./src/js/student2.js",
    student3: "./src/js/student3.js",
    student4: "./src/js/student4.js",
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
        test: /\.css/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              url: false
            }
          }
        ]
      },
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
                  grid: true,
                  browsers: ["last 2 versions", "ie >= 11", "Android >= 4"]
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
              name: `${fileName}.[ext]`,
              outputPath: 'img/',
              publicPath: './img'
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
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery"
    }),
    new HtmlWebpackPlugin({
      chunks: ["main"],
      filename: "main.html",
      template: "src/main.ejs"
    }),
    new HtmlWebpackPlugin({
      chunks: ["contact"],
      filename: "contact.html",
      template: "src/contact.ejs"
    }),
    new HtmlWebpackPlugin({
      chunks: ["curriculum"],
      filename: "curriculum.html",
      template: "src/curriculum.ejs"
    }),
    new HtmlWebpackPlugin({
      chunks: ["download"],
      filename: "download.html",
      template: "src/download.ejs"
    }),
    new HtmlWebpackPlugin({
      chunks: ["student1"],
      filename: "student1.html",
      template: "src/student1.ejs"
    }),
    new HtmlWebpackPlugin({
      chunks: ["student2"],
      filename: "student2.html",
      template: "src/student2.ejs"
    }),
    new HtmlWebpackPlugin({
      chunks: ["student3"],
      filename: "student3.html",
      template: "src/student3.ejs"
    }),
    new HtmlWebpackPlugin({
      chunks: ["student4"],
      filename: "student4.html",
      template: "src/student4.ejs"
    }),
    new CleanWebpackPlugin()
  ]
};

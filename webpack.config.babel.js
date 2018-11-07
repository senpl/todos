import path from 'path';

export default {
  devtool: "eval",
  entry: "./src/index",
  output: {
    path: path.join(__dirname, "dist"),
    filename: "bundle.js",
    publicPath: "/static/"
  },
  module: {
    // module: {
    //   rules: [
    //   //   {
    //   //   test: /\.css$/,
    //   //   use: ["style-loader", "css-loader"],
    //   // },
    //     {
    //       test: /\.m?js$/,
    //       exclude: /(node_modules|bower_components)/,
    //       use: {
    //         loader: "babel",
    //         options: {
    //           presets: ["@babel/preset-env"]
    //         }
    //       }
    //     }
    //   //   , 
    //   ]
    // }
    loaders: [{
      test: /\.js$/,
      loaders: ['babel'],
      exclude: /node_modules/,
      include: __dirname,
    }],
    // rules: [
    //   {
    //   test: /\.js$/,
    //   loaders: ['babel'],
    //   exclude: /node_modules/,
    //   include: __dirname,
    // },
    //   {
    //     test: /\.css$/,
    //     use: ["style-loader", "css-loader"],

    //   }
    // ]
  }
};

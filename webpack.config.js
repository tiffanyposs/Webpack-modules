const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const config = {
  // basic required configs
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js',
  },

  module: {
    // define loaders
    rules: [
      {
        use: 'babel-loader',
        test: /\.js$/,
      },
      {
        // extract the css
        loader: ExtractTextPlugin.extract({
          loader: 'css-loader',
        }),
        test: /\.css$/,
      },
    ],
  },
  plugins: [
    // find any files that were transformed by it's loader and save as style.css
    new ExtractTextPlugin('style.css'),
  ],
};

module.exports = config;

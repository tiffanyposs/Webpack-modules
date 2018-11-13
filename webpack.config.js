const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const config = {
  // basic required configs
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js',
    publicPath: 'build/', // any 'public' asset will have this appended
  },

  module: {
    // define loaders
    rules: [
      // JS
      {
        use: 'babel-loader',
        test: /\.js$/,
      },
      // CSS
      {
        // extract the css
        loader: ExtractTextPlugin.extract({
          loader: 'css-loader',
        }),
        test: /\.css$/,
      },
      // IMAGES
      {
        test: /\.(jpe?g|png|gif|svg)$/,
        use: [
          {
            loader: 'url-loader',
            options: { limit: 40000 },
          },
          'image-webpack-loader',
        ],
      },
    ],
  },
  // define plugins
  plugins: [
    // find any files that were transformed by it's loader and save as style.css
    new ExtractTextPlugin('style.css'),
  ],
};

module.exports = config;

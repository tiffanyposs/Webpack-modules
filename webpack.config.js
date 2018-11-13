const path = require('path');

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
    ],
  },
};

module.exports = config;

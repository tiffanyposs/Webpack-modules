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
      {
        // css loaders, order matters. These will run from RIGHT TO LEFT
        use: ['style-loader', 'css-loader'],
        test: /\.css$/,
      },
    ],
  },
};

module.exports = config;

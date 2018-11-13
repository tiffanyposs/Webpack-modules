# WEBPACK

The purpose of `WEBPACK` is to take multiple `.js` files and consolidate them into 1 `.js` file and load them in the correct order.


### History

There are two ways to render a webpage:

* Server Side Templating  - Backend Server creates an HTML document and sends it to the server
* Single Page App - Server sends bare bones documents to the user, JavaScript runs on the user's machine to assemble a full webpage


JavaScript modules was born because editing large files is more difficult than editing more smaller files with dedicated functionality.

Issues with using modules:

* Modules have a load order (dependencies)
* Loading more files (modules) slows down performance


#### Module Systems

* CommonJS - uses `module.exports` and `require` - NodeJS implementation
* AMD - uses `define` and `require` - "Asynchronous Module Definitions" - load async
* ES2015 - uses `export` and `import` - More used in modern web development


### Basic Webpack Configs

`webpack.config.js` is the main Webpack file

* `entry` (required) - entry point to project, start of the module building process
* `output` (required) - where to save the output and what to name it
  * `path` (required) - path to folder to save bundle
  * `filename` (required) - filename (usually bundle.js)

#### Example

```
const path = require('path');

const config = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js',
  },
};

module.exports = config;
```

### Babel Loaders

Babel coverts ES6/7 code into ES5.

* `babel-loader` - Teaches babel how to work with webpack
* `babel-core` - Takes the code, parses it, and generates some output files
* `babel-preset-env` - Pieces of ES6/7 to look for and turn it into ES5

#### Example

* `rules` - all of the loaders
  * `use` - loader to use
  * `test` - Regex to match file

```
...
module: {
  rules: [
    {
      use: 'babel-loader',
      test: /\.js$/,
    },
  ],
},
...
```


### CSS Loaders

* `css-loader` - Knows how to deal with CSS imports
* `style-loader` - Takes CSS imports and adds them tot he HTML document

You can load multiple loaders that target the same type of file. These are processed from RIGHT to LEFT

```
...
{
  use: ['style-loader', 'css-loader'],
  test: /\.css$/,
},
...
```

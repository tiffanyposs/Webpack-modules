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
  * `publicPath` - file path to "public" assets

#### Example

```
const path = require('path');

const config = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js',
    publicPath: 'build/',
  },
};

module.exports = config;
```

## Loaders

To load a loader, you can use the `use` and `loader` keys. `use` is preferred unless the loader your are using requires `loader`.

### Babel Loaders

Babel coverts ES6/7 code into ES5.

* `babel-loader` - Teaches babel how to work with Webpack
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

### Image Loaders

* `image-webpack-loader` - compress images automatically
* `url-loader` - if it's small, include it in `bundle.js` as raw data, if the image is big it will be saved into our build directory

#### Example

If you need to pass options to your loader, you extract it into an object and pass options.

```
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
```

## Plugins

Plugins process data outside of the `bundle.js`.

#### Example

Find any files that were transformed by it's loader and save as style.css:

```
...
plugins: [
  new ExtractTextPlugin('style.css'),
],
...
```

## Code Splitting

When you split the code so only the minimum amount of JS is loaded. A good example is a login screen doesn't need to load all of the JS code until they actually login.

With Webpack you can load an import on an event. Below, when Webpack bundles everything it will separate the core bundle from the `./image_viewer` code into a separate file, so it will only load (in this case) when the user clicks the button.

```
...
button.onclick = () => {
  System.import('./image_viewer').then((module) => {
    module.default();
  });
};
...
```

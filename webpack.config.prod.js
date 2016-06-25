// webpack.config.js
var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: './src/index.js', // [1]

  output: { // [2]
    path: './dist', // [3]
    filename: 'bundle.js', // [4]
  },

  module: {
   loaders: [ // [1]
     {
       test: /\.js$/, // [2]
       loaders: ['babel'], // [3]
       include: path.join(__dirname, 'src'), // [4] only run on code in src directory
     },
   ],

  plugins: [ // [1]
    new webpack.optimize.UglifyJsPlugin({ // [2]
      screw_ie8: true, // This line speaks for itself...
      compressor: {
        warnings: false,
      },
    }),
  ],
 },
};

const path = require('path');
const OdinSimpleNodeWebsitePathPrefix = `./OdinExercises/SimpleNodeWebsite/src/ts/`;

const config = {
  entry: {
    OdinSimpleNodeWebsite_Index: `${OdinSimpleNodeWebsitePathPrefix}index.ts`
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name]-bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.ts(x)?$/,
        loader: 'ts-loader',
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: [
      '.tsx',
      '.ts',
      '.js'
    ]
  },
  target: 'node',
  mode: 'development',
  externals: { 'express': 'commonjs express' }
};

module.exports = config;
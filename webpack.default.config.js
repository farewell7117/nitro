const path = require('path');

// eslint-disable-next-line import/no-extraneous-dependencies
const HtmlWebpackPlugin = require('html-webpack-plugin');

const { EXT, HOST, ASSET_PATH } = require('./configs/webpack/common');
const tsLoader = require('./configs/webpack/ts-loader');

const htmlWebpackPlugin = new HtmlWebpackPlugin({
  template: 'app/index.html',
  minify: true,
});

module.exports = {
  entry: './app/index.tsx',
  resolve: {
    extensions: [EXT.EXT_JS, EXT.EXT_TS, EXT.EXT_TSX],
  },
  module: {
    rules: [tsLoader],
  },
  output: {
    path: path.resolve(__dirname, 'dist/'),
    publicPath: `http://${HOST}${ASSET_PATH}`,
    filename: '[name].js',
  },
  plugins: [htmlWebpackPlugin],
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
  },
};

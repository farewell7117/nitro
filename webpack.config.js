const defaultConfig = require('./webpack.default.config');
const devConfig = require('./webpack.dev.config');

module.exports = {
  ...defaultConfig,
  ...devConfig,
  stats: 'minimal',
};

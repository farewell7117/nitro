const { RE_EXT, RE_NODE_MODULES } = require('./common');

module.exports = {
  test: RE_EXT.RE_TSX,
  exclude: RE_NODE_MODULES,
  use: [{
    loader: 'ts-loader',
  }],
};

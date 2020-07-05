const RE_TSX = /\.ts(x?)$/;

const EXT_JS = '.js';
const EXT_TSX = '.tsx';

const RE_NODE_MODULES = /\/node_modules\//;

const HOST = 'localhost:8080';
const ASSET_PATH = '/';

module.exports = {
  RE_EXT: {
    RE_TSX,
  },
  EXT: {
    EXT_JS,
    EXT_TSX,
  },
  RE_NODE_MODULES,
  HOST,
  ASSET_PATH,
};

const { HOST, ASSET_PATH } = require('./configs/webpack/common');

module.exports = ({
  mode: 'development',
  devServer: {
    contentBase: './dist',
    hotOnly: true,
    public: HOST,
    publicPath: ASSET_PATH,
  },
});

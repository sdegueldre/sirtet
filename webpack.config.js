const path = require('path');

module.exports = env => ({
  mode: "development",
  module: {
    rules: [
      {
        test: /\.(png|jpe?g|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {},
          },
        ],
      },
    ],
  },
  output: {
    path: path.resolve(__dirname, './docs'),
    filename: 'js/bundle.js',
    publicPath: env.PUBLIC_PATH || '/'
  }
});

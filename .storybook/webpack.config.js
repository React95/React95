const path = require('path');

module.exports = {
  module: {
    rules: [
      {
        test: /\.(png|woff|woff2|eot|ttf|svg|ico|cur)$/,
        loaders: ['file-loader'],
        include: path.resolve(__dirname, '../'),
      },
    ],
  },
};

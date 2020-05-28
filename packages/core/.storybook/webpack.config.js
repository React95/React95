module.exports = {
  module: {
    rules: [
      {
        test: /\.(png|woff|woff2|eot|ttf|svg|ico|cur|mp4)$/,
        loaders: ['file-loader'],
      },

      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },

      {
        test: /\.jsx$/i,
        use: ['babel-loader'],
      },
    ],
  },
};

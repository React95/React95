module.exports = {
  webpackFinal: config => {
    config.module.rules = [
      {
        test: /\.(png|woff|woff2|eot|ttf|svg|ico|cur|mp4)$/,
        loaders: ['file-loader'],
      },

      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },

      {
        test: /\.(js|jsx)$/i,
        use: ['babel-loader'],
      },

      {
        test: /\.(ts|tsx)$/,
        use: [
          {
            loader: require.resolve('ts-loader'),
          },
          {
            loader: require.resolve('react-docgen-typescript-loader'),
          },
        ],
      },
    ];

    config.resolve.extensions.push('.ts', '.tsx');

    return config;
  },
};

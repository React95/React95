module.exports = {
  presets: [
    '@babel/preset-env',
    '@babel/preset-react',
    '@babel/preset-typescript',
  ],
  ignore: ['**/*.test.tsx'],
  env: {
    esm: { presets: [['@babel/preset-env', { modules: false }]] },
    cjs: { presets: ['@babel/preset-env'] },
  },
};

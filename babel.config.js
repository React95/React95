module.exports = {
  presets: [
    '@babel/preset-env',
    '@babel/preset-react',
    '@babel/preset-typescript',
  ],
  env: {
    esm: {
      presets: [['@babel/preset-env', { modules: false }]],
      ignore: ['**/*.test.tsx'],
    },
    cjs: { presets: ['@babel/preset-env'], ignore: ['**/*.test.tsx'] },
  },
  plugins: [
    ['@babel/plugin-proposal-private-methods', { loose: true }],
    ['@babel/plugin-proposal-class-properties', { loose: true }],
    ['@babel/plugin-proposal-private-property-in-object', { loose: true }],
  ],
};

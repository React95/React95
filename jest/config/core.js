const snapshotResolver = require('./snapshotResolver');
const { resolve } = require('path');

module.exports = {
  test: {
    alias: [
      {
        find: /\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga|ico)$/,
        replacement: '',
        customResolver() {
          return resolve(__dirname, '../mocks/fileMock.js')
        }
      }],
    name: 'core',
    globals: true,
    resolveSnapshotPath: snapshotResolver.resolveSnapshotPath,
    environment: "happy-dom",
    setupFiles: [
      'babel-polyfill',
      'jest-styled-components',
      '@testing-library/jest-dom',
      '../../jest/setup/core.setup.js',
    ],
    testMatch: [
      '<root>/packages/core/**/*.test.ts',
      '<root>/packages/core/**/*.test.tsx',
    ],
  },
};

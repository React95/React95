const snapshotResolver = require('./snapshotResolver')

module.exports = {
  testMatch: [
    '<rootDir>/packages/core/**/*.test.ts',
    '<rootDir>/packages/core/**/*.test.tsx',
  ],
  rootDir: './../../',
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga|ico)$':
      '<rootDir>/jest/mocks/fileMock.js',
    '\\.(css|less)$': '<rootDir>/jest/mocks/styleMock.js',
    'styled-components': 'styled-components/dist/styled-components.browser.cjs.js',
  },
  displayName: 'core',
  name: 'core',
  setupFilesAfterEnv: [
    'babel-polyfill',
    '@testing-library/jest-dom/extend-expect',
    'jest-styled-components',
    '<rootDir>/jest/setup/core.setup.js',
  ],
  environment: 'jsdom',
  test: {
    globals: true,
    resolveSnapshotPath: snapshotResolver.resolveSnapshotPath,
    environment: "happy-dom",
    setupFiles: [
      'babel-polyfill',
      'jest-styled-components',
      '@testing-library/jest-dom',
      '../../jest/setup/core.setup.js',
    ],
  },
};

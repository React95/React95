module.exports = {
  testMatch: [
    '<rootDir>/../../packages/core/**/*.test.js',
    '<rootDir>/../../packages/core/**/*.test.jsx',
  ],
  roots: ['<rootDir>/../../'],
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga|ico)$':
      '<rootDir>/../mocks/fileMock.js',
    '\\.(css|less)$': '<rootDir>/../mocks/styleMock.js',
  },
  displayName: 'core',
  setupFilesAfterEnv: [
    'babel-polyfill',
    '@testing-library/jest-dom/extend-expect',
    'jest-styled-components',
    '<rootDir>/../setup/core.setup.js',
  ],
};

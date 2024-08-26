import snapshotResolver from './snapshotResolver';
import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin';

export default {
  test: {
    testMatch: [
      '<rootDir>/packages/clippy/**/*.test.ts',
      '<rootDir>/packages/clippy/**/*.test.tsx',
    ],
    name: 'clippy',
    globals: true,
    resolveSnapshotPath: snapshotResolver.resolveSnapshotPath,
    setupFiles: [
      'babel-polyfill',
      '@testing-library/jest-dom',
      '../../config/setup/clippy.setup.js',
    ],
    environment: 'happy-dom',
    plugins: [vanillaExtractPlugin()],
  },
};

/// <reference types="vitest" />
import { resolve } from 'path';
import { defineConfig } from 'vite';
import snapshotResolver from './snapshotResolver';
import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin';

export default defineConfig({
  test: {
    alias: [
      {
        find: /\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga|ico)$/,
        replacement: '',
        customResolver() {
          return resolve(__dirname, '../mocks/fileMock.js');
        },
      },
    ],
    name: 'core',
    globals: true,
    resolveSnapshotPath: snapshotResolver.resolveSnapshotPath,
    environment: 'happy-dom',
    setupFiles: [
      '@testing-library/jest-dom',
      '../../config/setup/core.setup.js',
    ],
    coverage: {
      all: false,
      provider: 'istanbul',
    },
    onConsoleLog: log => {
      // ignore react-draggable deprecation warning:
      // Warning: findDOMNode is deprecated and will be removed in the next major release. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-find-node
      //  at DraggableCore (React95/node_modules/react-draggable/build/cjs/DraggableCore.js:75:5)
      //  at Draggable (React95/node_modules/react-draggable/build/cjs/Draggable.js:85:5)
      //  at ModalRenderer (React95/packages/core/components/Modal/Modal.tsx:20:20)
      const reactDraggableDeprecatedWarning = 'react-draggable';

      return !log.includes(reactDraggableDeprecatedWarning);
    },
  },
  plugins: [vanillaExtractPlugin()],
});

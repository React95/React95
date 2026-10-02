import { join } from 'path';
import { defineConfig, mergeConfig } from 'vitest/config';
import { storybookTest } from '@storybook/addon-vitest/vitest-plugin';

import viteConfig from './vite.config';

// Runs every story of @react95/core as a test, in a real browser: a story
// passes when it renders without errors (and its `play` function, if any,
// passes). The project annotations from `.storybook/preview.js` are applied by
// the plugin. The core Vite config brings the vanilla-extract plugin.
//
// It lives here, named `vitest.config`, so the test widget in Storybook's
// sidebar finds it (the unit tests use `config/test/core.js`).
export default mergeConfig(
  viteConfig,
  defineConfig({
    plugins: [
      storybookTest({
        configDir: join(import.meta.dirname, '.storybook'),
      }),
    ],
    resolve: {
      // @neodrag/react (used by Modal) only exports its ESM build under the
      // `development` and `production` conditions, and neither is set in the
      // `test` mode Vitest runs in
      conditions: ['development'],
      // Storybook's renderer (@storybook/react-dom-shim) has its own React 19
      // copy nested in node_modules, which can't render our React 18 elements
      dedupe: ['react', 'react-dom'],
    },
    optimizeDeps: {
      // imported by the code vanilla-extract generates, so Vite only finds
      // them mid-run and reloads the page, failing the stories being tested
      include: [
        '@vanilla-extract/recipes/createRuntimeFn',
        'rainbow-sprinkles/createRuntimeFn',
      ],
    },
    test: {
      name: 'storybook',
      coverage: {
        // same provider as the unit tests, and only the lib's code counts
        provider: 'istanbul',
        include: ['components/**'],
      },
      browser: {
        enabled: true,
        headless: true,
        provider: 'playwright',
        instances: [{ browser: 'chromium' }],
      },
    },
  }),
);

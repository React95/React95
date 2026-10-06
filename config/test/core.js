// @react95/core's only unit test is the event emitter's (components/shared):
// everything else is tested through the stories, in a browser (see
// packages/core/vitest.config.mjs)
export default {
  test: {
    name: 'core',
    environment: 'node',
    coverage: {
      provider: 'istanbul',
    },
  },
};

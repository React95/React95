// The core `package.json` `sideEffects` only lists fonts, so a bare
// `import '*.css.ts'` (e.g. GlobalStyle, which has no exports) is tree-shaken
// from the Storybook build. This marks every `.css.ts` module as having side
// effects, for Storybook only: `moduleSideEffects` returned from a transform
// hook overrides the one coming from `package.json`.
export const cssTsSideEffects = () => ({
  name: 'css-ts-side-effects',

  transform(_code, id) {
    if (id.endsWith('.css.ts')) {
      return { moduleSideEffects: true };
    }
  },
});

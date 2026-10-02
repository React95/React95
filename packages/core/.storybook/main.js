import { readdirSync } from 'fs';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

import { cssTsSideEffects } from './vite-plugin-css-ts-side-effects.js';

function getAbsolutePath(value) {
  return dirname(fileURLToPath(import.meta.resolve(`${value}/package.json`)));
}

// Which props show up in Controls and in the docs props table: the ones our
// components declare. Most components also spread ~300 React DOM attributes;
// the few that matter for a component (e.g. `placeholder` on Input) come from
// its stories' `args`, which get a control inferred from their value.
const propFilter = (prop, component) => {
  const files = [prop.parent, ...(prop.declarations ?? [])]
    .filter(Boolean)
    .map(({ fileName }) => fileName);

  // the Frame style props (~150, from sprinkles) come from a generated type
  // with no source file. They are the same on every component built on Frame,
  // so they only show up on Frame itself (see frame-arg-types.js)
  if (files.length === 0) {
    return component.name === 'Frame';
  }

  // declared by one of our components, even through Omit/Pick (`ref`, the
  // polymorphic `as` and `style` have no useful control)
  if (files.some(file => !file.includes('node_modules'))) {
    return !['ref', 'as', 'style'].includes(prop.name);
  }

  return prop.name === 'children';
};

export default {
  staticDirs: ['../components/GlobalStyle'],
  stories: [
    '../stories/all.stories.tsx',
    ...readdirSync(join(import.meta.dirname, '../stories'))
      .filter(file => file !== 'all.stories.tsx')
      .filter(file => file.endsWith('.stories.tsx'))
      .map(file => `../stories/${file}`),
  ],
  logLevel: 'debug',
  addons: [
    getAbsolutePath('@storybook/addon-docs'),
    getAbsolutePath('@storybook/addon-designs'),
    join(import.meta.dirname, 'src', 'theme-changer'),
  ],
  framework: {
    name: getAbsolutePath('@storybook/react-vite'),
    options: {},
  },
  typescript: {
    // react-docgen (the default) can't resolve imported types, so components
    // whose props come from React or Frame types showed no props at all
    reactDocgen: 'react-docgen-typescript',
    reactDocgenTypescriptOptions: {
      shouldExtractLiteralValuesFromEnum: true,
      shouldRemoveUndefinedFromOptional: true,
      propFilter,
      // only our components need docgen. Otherwise it also goes through every
      // .tsx Vite loads (~975 icons from @react95/icons, Clippy, decorators)
      // and warns that each one is outside the TypeScript project
      include: [join(import.meta.dirname, '../components/**/*.tsx')],
    },
  },
  features: {
    actions: false,
    // no story has a `play` function yet, so the panel would always be empty
    interactions: false,
  },
  viteFinal: config => ({
    ...config,
    plugins: [...(config.plugins ?? []), cssTsSideEffects()],
  }),
};

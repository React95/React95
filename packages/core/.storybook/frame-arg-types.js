// Frame's style props (~150, from sprinkles) are its API, so they show up on
// Frame's Controls and docs props table (see the propFilter in main.js), but
// grouped by category, with controls that work for them.

import { Frame } from '../components/Frame/Frame';
import { sprinkles } from '../components/Frame/Frame.css';
import * as styleGroups from '../components/Frame/props';
import { contract } from '../components/themes/contract.css';

// one table category per group of `components/Frame/props.ts`
const categories = {
  positioning: 'Position',
  zIndices: 'Position',
  displayAndBoxModel: 'Layout and spacing',
  colors: 'Color',
  background: 'Background',
  borders: 'Border',
  borderRadius: 'Border',
  outline: 'Outline',
  shadows: 'Shadow',
  font: 'Typography',
  text: 'Typography',
};

// Mirrors the `shorthands` in `components/Frame/Frame.css.ts`, which sprinkles
// doesn't expose at runtime. A mismatch is reported below.
const shorthands = {
  size: ['height', 'width'],
  h: ['height'],
  w: ['width'],
  minH: ['minHeight'],
  minW: ['minWidth'],
  m: ['margin'],
  mr: ['marginRight'],
  ml: ['marginLeft'],
  mt: ['marginTop'],
  mb: ['marginBottom'],
  marginX: ['marginLeft', 'marginRight'],
  marginY: ['marginTop', 'marginBottom'],
  mx: ['marginLeft', 'marginRight'],
  my: ['marginTop', 'marginBottom'],
  p: ['padding'],
  pr: ['paddingRight'],
  pl: ['paddingLeft'],
  pt: ['paddingTop'],
  pb: ['paddingBottom'],
  paddingX: ['paddingLeft', 'paddingRight'],
  paddingY: ['paddingTop', 'paddingBottom'],
  px: ['paddingLeft', 'paddingRight'],
  py: ['paddingTop', 'paddingBottom'],
  bgColor: ['backgroundColor'],
  bg: ['background'],
};

// property -> { group, tokens }, e.g. width -> { displayAndBoxModel, space }.
// `color` is in both `colors` and `text` (same tokens); it stays in `colors`.
const styleProps = new Map();

for (const [group, props] of Object.entries(styleGroups)) {
  for (const [name, tokens] of Object.entries(props)) {
    if (!styleProps.has(name) || group === 'colors') {
      styleProps.set(name, { group, tokens });
    }
  }
}

const known = new Set([...styleProps.keys(), ...Object.keys(shorthands)]);
const unknown = [...sprinkles.properties].filter(name => !known.has(name));
const stale = [...known].filter(name => !sprinkles.properties.has(name));

if (unknown.length || stale.length) {
  console.warn(
    '[storybook] Frame style props are out of sync with Frame.css.ts. ' +
      `Not mapped: ${unknown.join(', ') || '-'}. ` +
      `No longer exist: ${stale.join(', ') || '-'}.`,
  );
}

const responsiveNote =
  'Also takes responsive values like `{ mobile, tablet, desktop }`, which ' +
  "can't be edited here.";

const codeNote = 'In code, it also takes any CSS value.';

const describe = (...parts) => parts.filter(Boolean).join('\n\n');

// sizes (width, minHeight, ...) also use the space tokens, but those only go
// up to `$22` (22px), so sizes keep a free text control
const isSize = name => /^(width|height|min|max)/.test(name);

// `name` is the CSS property, the shorthand's target for shorthands
const styleArgType = (argType, name) => {
  const { group, tokens } = styleProps.get(name);
  const table = { ...argType.table, category: categories[group] };
  const responsive = group === 'displayAndBoxModel' ? responsiveNote : '';

  if (tokens === contract.space && isSize(name)) {
    return {
      ...argType,
      table,
      control: { type: 'text' },
      description: describe(
        argType.description,
        'A space token (e.g. `$4`) or any CSS value.',
        responsive,
      ),
    };
  }

  // spacing, colors, shadows and z-indices: pick one of the theme tokens
  if (typeof tokens === 'object') {
    return {
      ...argType,
      table,
      control: { type: 'select' },
      options: Object.keys(tokens).map(token => `$${token}`),
      description: describe(argType.description, codeNote, responsive),
    };
  }

  return {
    ...argType,
    table,
    control: argType.type?.name === 'enum' ? argType.control : { type: 'text' },
    description: describe(argType.description, responsive),
  };
};

export const organizeFrameStyleProps = ({ argTypes, component }) => {
  if (component !== Frame) {
    return argTypes;
  }

  return Object.fromEntries(
    Object.entries(argTypes).map(([name, argType]) => {
      if (styleProps.has(name)) {
        return [name, styleArgType(argType, name)];
      }

      if (shorthands[name]) {
        const targets = shorthands[name];
        const target = styleArgType(argType, targets[0]);
        const names = targets.map(t => `\`${t}\``).join(' and ');

        return [
          name,
          {
            ...target,
            description: describe(
              `Shorthand for ${names}.`,
              target.description,
            ),
          },
        ];
      }

      return [name, argType];
    }),
  );
};

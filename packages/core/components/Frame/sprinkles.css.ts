import { createRainbowSprinkles, defineProperties } from 'rainbow-sprinkles';
import {
  background,
  borderRadius,
  borders,
  colors,
  displayAndBoxModel,
  font,
  outline,
  positioning,
  shadows,
  text,
  zIndices,
} from './props';

const displayAndBoxModelAtomicProps = defineProperties({
  dynamicProperties: displayAndBoxModel,
  shorthands: {
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
  },
});

const positioningAtomicProps = defineProperties({
  dynamicProperties: positioning,
});

const colorsAtomicProps = defineProperties({
  dynamicProperties: colors,
});

const backgroundAtomicProps = defineProperties({
  dynamicProperties: background,
  shorthands: {
    bg: ['background'],
    bgColor: ['backgroundColor'],
  },
});

const bordersAtomicProps = defineProperties({
  dynamicProperties: borders,
});

const borderRadiusAtomicProps = defineProperties({
  dynamicProperties: borderRadius,
});

const shadowsAtomicProps = defineProperties({
  dynamicProperties: shadows,
});

const outlineAtomicProps = defineProperties({
  dynamicProperties: outline,
});

const fontAtomicProps = defineProperties({
  dynamicProperties: font,
});

const textAtomicProps = defineProperties({
  dynamicProperties: text,
});

const zIndicesAtomicProps = defineProperties({
  dynamicProperties: zIndices,
});

export const sprinkles = createRainbowSprinkles(
  displayAndBoxModelAtomicProps,
  positioningAtomicProps,
  colorsAtomicProps,
  backgroundAtomicProps,
  bordersAtomicProps,
  borderRadiusAtomicProps,
  shadowsAtomicProps,
  outlineAtomicProps,
  fontAtomicProps,
  textAtomicProps,
  zIndicesAtomicProps,
);

export type Sprinkles = Parameters<typeof sprinkles>[0];

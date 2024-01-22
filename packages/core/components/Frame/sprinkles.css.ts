import { createRainbowSprinkles, defineProperties } from 'rainbow-sprinkles';
import { displayAndBoxModel, positioning } from './props';

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

export const sprinkles = createRainbowSprinkles(
  displayAndBoxModelAtomicProps,
  positioningAtomicProps,
);

export type Sprinkles = Parameters<typeof sprinkles>[0];

import { DefaultTheme, IBorderStyles, IBorderWidth, ISpace, IColors, IZIndices } from 'styled-components'

type DefaultThemeWithoutColors = Omit<DefaultTheme, "colors" | "shadows">

const space: ISpace = [
  0,
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  10,
  11,
  12,
  13,
  14,
  15,
  16,
  17,
  18,
  19,
  20,
];

const borderWidths: IBorderWidth = [0, 1];
const borderStyles: IBorderStyles = ['none', 'solid'];

const zIndices: IZIndices = {
  modal: 1,
  tooltip: 2
}

export const generateShadows = (colors : IColors) => {
  return {
    out: `inset 0.5px 0.5px 0px 0.5px ${colors.borderLightest},
          inset 0 0 0 1px ${colors.borderDark},
          1px 0px 0 0px ${colors.borderDarkest},
          0px 1px 0 0px ${colors.borderDarkest},
          1px 1px 0 0px ${colors.borderDarkest}`,
    in: `inset 0px 0px 0px 0px,
        inset 1px 1px 0px 0px ${colors.borderDark},
        0.5px 0.5px 0px 0.5px ${colors.borderLightest}`,
    input: `inset -1px -1px 0 0 ${colors.borderLight},
            inset 1px 1px 0 0 ${colors.borderDarkest},
            0.5px 0.5px 0 0.5px ${colors.borderLightest}`,
  };
}

const theme: DefaultThemeWithoutColors = {
  space,
  borderWidths,
  borderStyles,
  zIndices
};

export default theme;
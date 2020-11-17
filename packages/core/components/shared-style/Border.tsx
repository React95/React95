import {
  css,
  DefaultTheme,
  FlattenInterpolation,
  ThemeProps,
} from 'styled-components';

interface IBorderStyle {
  direction?: 'extrude' | 'intrude';
  useBoxShadow?: boolean;
}

interface IBorder extends IBorderStyle {
  outerTopLeft: FlattenInterpolation<ThemeProps<DefaultTheme>>;
  innerTopLeft: FlattenInterpolation<ThemeProps<DefaultTheme>>;
  outerBottomRight: FlattenInterpolation<ThemeProps<DefaultTheme>>;
  innerBottomRight: FlattenInterpolation<ThemeProps<DefaultTheme>>;
}

export const createBorder = ({
  direction,
  outerTopLeft,
  innerTopLeft,
  outerBottomRight,
  innerBottomRight,
}: IBorder) => css`
  position: relative;
  border-width: 2px;
  border-style: solid;
  border-top-color: ${direction == 'extrude' ? outerTopLeft : innerBottomRight};
  border-right-color: ${direction == 'extrude'
    ? outerBottomRight
    : outerTopLeft};
  border-bottom-color: ${direction == 'extrude'
    ? outerBottomRight
    : outerTopLeft};
  border-left-color: ${direction == 'extrude'
    ? outerTopLeft
    : innerBottomRight};
  :before {
    content: '';
    position: absolute;
    left: -1px;
    top: -1px;
    width: 100%;
    height: 100%;
    border-style: solid;
    border-width: 1px;
    border-top-color: ${direction == 'extrude'
      ? innerTopLeft
      : outerBottomRight};
    border-right-color: ${direction == 'extrude'
      ? innerBottomRight
      : innerTopLeft};
    border-bottom-color: ${direction == 'extrude'
      ? innerBottomRight
      : innerTopLeft};
    border-left-color: ${direction == 'extrude'
      ? innerTopLeft
      : outerBottomRight};
    pointer-events: none;
  }
`;

export const createBoxShadowBorder = ({
  direction,
  outerTopLeft,
  innerTopLeft,
  outerBottomRight,
  innerBottomRight,
}: IBorder) => css`
  position: relative;
  border-width: 1px;
  border-style: solid;
  border-top-color: ${direction == 'extrude' ? outerTopLeft : innerBottomRight};
  border-right-color: ${direction == 'extrude'
    ? outerBottomRight
    : outerTopLeft};
  border-bottom-color: ${direction == 'extrude'
    ? outerBottomRight
    : outerTopLeft};
  border-left-color: ${direction == 'extrude'
    ? outerTopLeft
    : innerBottomRight};
  box-shadow: inset -1px -1px 0 0px
      ${direction == 'extrude' ? innerBottomRight : innerTopLeft},
    inset 1px 1px 0 0px
      ${direction == 'extrude' ? innerTopLeft : outerBottomRight};
`;

/*

    box-shadow: inset -1px -1px 0 0px
        ${direction == 'extrude' ? outerBottomRight : outerTopLeft},
      inset 1px 1px 0 0px
        ${direction == 'extrude' ? outerTopLeft : innerBottomRight},
      inset -2px -2px 0 0px
        ${direction == 'extrude' ? innerBottomRight : innerTopLeft},
      inset 2px 2px 0 0px
        ${direction == 'extrude' ? innerTopLeft : outerBottomRight};

*/

export const border = ({
  direction = 'extrude',
  useBoxShadow = false,
}: IBorderStyle = {}) => {
  let borderFn = useBoxShadow ? createBoxShadowBorder : createBorder;
  return borderFn({
    direction,
    outerBottomRight: css`
      ${({ theme }) => theme.colors.borderDarkest}
    `,
    innerBottomRight: css`
      ${({ theme }) => theme.colors.borderDark}
    `,
    outerTopLeft: css`
      ${({ theme }) => theme.colors.borderLightest}
    `,
    innerTopLeft: css`
      ${({ theme }) => theme.colors.borderLight}
    `,
  });
};

export const windowBorder = ({
  direction = 'extrude',
  useBoxShadow = false,
}: IBorderStyle = {}) => {
  let borderFn = useBoxShadow ? createBoxShadowBorder : createBorder;
  return borderFn({
    direction,
    outerBottomRight: css`
      ${({ theme }) => theme.colors.borderDarkest}
    `,
    innerBottomRight: css`
      ${({ theme }) => theme.colors.borderDark}
    `,
    outerTopLeft: css`
      ${({ theme }) => theme.colors.borderLight}
    `,
    innerTopLeft: css`
      ${({ theme }) => theme.colors.borderLightest}
    `,
  });
};

export const scrollBarBorder = ({
  direction = 'extrude',
  useBoxShadow = false,
}: IBorderStyle = {}) => {
  let borderFn = useBoxShadow ? createBoxShadowBorder : createBorder;
  return borderFn({
    direction,
    outerBottomRight: css`
      ${({ theme }) => theme.colors.borderDarkest}
    `,
    innerBottomRight: css`
      ${({ theme }) => theme.colors.borderDark}
    `,
    outerTopLeft: css`
      ${({ theme }) => theme.colors.borderLight}
    `,
    innerTopLeft: css`
      ${({ theme }) => theme.colors.borderLightest}
    `,
  });
};

export default border;

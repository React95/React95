import { css, DefaultTheme, FlattenInterpolation, ThemeProps } from 'styled-components';

interface IBorderStyle {
  direction?: 'extrude' | 'intrude',
}

interface IBorder extends IBorderStyle {
  outerTopLeft: FlattenInterpolation<ThemeProps<DefaultTheme>>
  innerTopLeft: FlattenInterpolation<ThemeProps<DefaultTheme>>
  outerBottomRight: FlattenInterpolation<ThemeProps<DefaultTheme>>
  innerBottomRight: FlattenInterpolation<ThemeProps<DefaultTheme>>
}

export const createBorder = ({ direction, outerTopLeft, innerTopLeft, outerBottomRight, innerBottomRight} : IBorder) => {
  return direction == 'extrude'
    ? css`
        border: 0;
        box-shadow: 
          inset -1px -1px 0 0px ${outerBottomRight},
          inset 1px 1px 0 0px ${outerTopLeft},
          inset -2px -2px 0 0px ${innerBottomRight},
          inset 2px 2px 0 0px ${innerTopLeft};
      `
    : css`
        border: 0;
        box-shadow: 
          inset -1px -1px 0 0px ${outerTopLeft}, // outer bottom right
          inset 1px 1px 0 0px ${innerBottomRight}, // outer top left
          inset -2px -2px 0 0px ${innerTopLeft}, // inner bottom right
          inset 2px 2px 0 0px ${outerBottomRight}; // inner top left
      `
}

export const border = ({
  direction = 'extrude'
} : IBorderStyle = {}) => createBorder({
  direction,
  outerBottomRight: css`${({ theme }) => theme.colors.borderDarkest }`,
  innerBottomRight: css`${({ theme }) => theme.colors.borderDark }`,
  outerTopLeft: css`${({ theme }) => theme.colors.borderLightest }`,
  innerTopLeft: css`${({ theme }) => theme.colors.borderLight }`
})

export const windowBorder = ({
  direction = 'extrude'
} : IBorderStyle = {}) => createBorder({
  direction,
  outerBottomRight: css`${({ theme }) => theme.colors.borderDarkest }`,
  innerBottomRight: css`${({ theme }) => theme.colors.borderDark }`,
  outerTopLeft: css`${({ theme }) => theme.colors.borderLight }`,
  innerTopLeft: css`${({ theme }) => theme.colors.borderLightest }`
})

export const scrollBarBorder = ({
  direction = 'extrude'
} : IBorderStyle = {}) => createBorder({
  direction,
  outerBottomRight: css`${({ theme }) => theme.colors.borderDarkest }`,
  innerBottomRight: css`${({ theme }) => theme.colors.borderDark }`,
  outerTopLeft: css`${({ theme }) => theme.colors.borderLight }`,
  innerTopLeft: css`${({ theme }) => theme.colors.borderLightest }`
})

export default border
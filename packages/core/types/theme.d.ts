import 'styled-components';

export interface R95_Space extends Array<number> {}
export interface R95_BorderWidth extends Array<number> {}
export interface R95_BorderStyles extends Array<string> {}
export interface R95_Colors {
  borderDark: string;
  borderDarkest: string;
  borderLight: string;
  borderLighter: string;
  borderLightest: string;
  canvas: string;
  canvasText: string;
  canvasTextDisabled: string;
  canvasTextDisabledShadow: string;
  canvasTextInvert: string;
  headerBackground: string;
  headerNotActiveBackground: string;
  headerNotActiveText: string;
  anchor: string;
  anchorVisited: string;
  headerText: string;
  material: string;
  materialDark: string;
  materialText: string;
  materialTextDisabled: string;
  materialTextDisabledShadow: string;
  materialTextInvert: string;
  tooltip: string;
  progress: string;
  inputBackground: string;
  inputBackgroundDisabled: string;
}

export interface R95_Shadows {
  out: string;
  in: string;
  input: string;
}

export interface R95_ZIndices {
  modal: number;
  tooltip: number;
  taskbar: number;
}

export interface R95_DefaultTheme {
  colors: IColors;
  space: Array<number>;
  shadows: IShadows;
  borderWidths: IBorderWidth;
  borderStyles: IBorderStyles;
  zIndices: IZIndices;
}

declare module 'styled-components' {
  export interface ISpace extends R95_Space {}

  export interface IBorderWidth extends R95_BorderWidth {}

  export interface IBorderStyles extends R95_BorderStyles {}

  export interface IColors extends R95_Colors {}

  export interface IShadows extends R95_Shadows {}

  export interface IZIndices extends R95_ZIndices {}

  export interface DefaultTheme extends R95_DefaultTheme {
    colors: IColors;
    space: Array<number>;
    shadows: IShadows;
    borderWidths: IBorderWidth;
    borderStyles: IBorderStyles;
    zIndices: IZIndices;
  }
}

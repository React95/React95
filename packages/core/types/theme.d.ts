import 'styled-components'

// and extend them!
declare module 'styled-components' {
  
  export interface ISpace extends Array<number> {}
  export interface IBorderWidth extends Array<number> {}
  export interface IBorderStyles extends Array<string> {}

  export interface IColors {
    borderDark: string
    borderDarkest: string
    borderLight: string
    borderLightest: string
    canvas: string
    canvasText: string
    canvasTextDisabled: string
    canvasTextDisabledShadow: string
    canvasTextInvert: string
    headerBackground: string
    headerNotActiveBackground: string
    headerNotActiveText: string
    anchor: string
    anchorVisited: string
    headerText: string
    material: string
    materialDark: string
    materialText: string
    materialTextDisabled: string
    materialTextDisabledShadow: string
    materialTextInvert: string
    tooltip: string
    progress: string
  }
  
  export interface IShadows {
    out: string;
    in: string;
    input: string;
  }

  export interface IZIndices {
    modal: number,
    tooltip: number
  }

  export interface DefaultTheme {
    colors: IColors;
    space: Array<number>;
    shadows: IShadows;
    borderWidths: IBorderWidth;
    borderStyles: IBorderStyles;
    zIndices: IZIndices;
  }
}
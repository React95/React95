import 'styled-components'

// and extend them!
declare module 'styled-components' {
  
  export interface ISpace extends Array<number> {}
  export interface IBorderWidth extends Array<number> {}
  export interface IBorderStyles extends Array<string> {}

  export interface IColors {
    grays: Array<string>;
    black: string;
    white: string;
    primary: string;
    secondary: string;
  }
  
  export interface IShadows {
    out: string;
    in: string;
    input: string;
  }

  export interface DefaultTheme {
    colors: IColors;
    space: Array<number>;
    shadows: IShadows;
    borderWidths: IBorderWidth;
    borderStyles: IBorderStyles;
    zIndices: Array<number>;
  }
}
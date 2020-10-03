export interface IColors {
  grays: Array<string>;
  black: string;
  white: string;
  primary: string;
  secondary: string;
}

export class Colors implements IColors {
  grays: Array<string>;
  black: string;
  white: string;
  primary: string;
  secondary: string;

  constructor(values: IColors) {
    const { grays, black, white, primary, secondary } = values;

    this.grays = grays;
    this.black = black;
    this.white = white;
    this.primary = primary;
    this.secondary = secondary;
  }

  get bg(): string {
    return this.grays[2];
  }
}

const colors = new Colors({
  grays: ['#e6e6e6', '#d2d2d2', '#c3c7cb', '#868a8e'],
  black: '#000000',
  white: '#ffffff',
  primary: '#000e7a',
  secondary: '#55aaaa',
});

interface ISpace extends Array<number> {}

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

export interface IBorderWidth extends Array<number> {}

const borderWidths: IBorderWidth = [0, 1];

export interface IBorderStyles extends Array<string> {}

const borderStyles: IBorderStyles = ['none', 'solid'];

export interface IShadows {
  out: string;
  in: string;
  input: string;
}

const shadows: IShadows = {
  out: `inset 0.5px 0.5px 0px 0.5px ${colors.white},
        inset 0 0 0 1px ${colors.grays[3]},
        1px 0px 0 0px ${colors.black},
        0px 1px 0 0px ${colors.black},
        1px 1px 0 0px ${colors.black}`,
  in: `inset 0px 0px 0px 0px,
      inset 1px 1px 0px 0px ${colors.grays[3]},
      0.5px 0.5px 0px 0.5px ${colors.white}`,
  input: `inset -1px -1px 0 0 ${colors.grays[2]},
          inset 1px 1px 0 0 ${colors.black},
          0.5px 0.5px 0 0.5px ${colors.white}`,
};

export class ZIndexes extends Array<number> {
  private _modal: number;
  private _taskbar: number;

  constructor(values: number[]) {
    super(...values);
  }

  get modal(): number {
    return this._modal ?? this[1];
  }
  set modal(value: number) {
    this._modal = value;
  }

  get taskbar(): number {
    return this._taskbar ?? this[2];
  }
  set taskbar(value: number) {
    this._taskbar = value;
  }
}

const zIndices: ZIndexes = new ZIndexes([0, 1, 2]);
[, zIndices.modal, zIndices.taskbar] = zIndices;

export interface ITheme {
  colors: IColors;
  space: Array<number>;
  shadows: IShadows;
  borderWidths: IBorderWidth;
  borderStyles: IBorderStyles;
  zIndices: ZIndexes;
}

const theme: ITheme = {
  colors,
  space,
  shadows,
  borderWidths,
  borderStyles,
  zIndices,
};

export default theme;

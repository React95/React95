export interface IColors {
  grays: Array<String>;
  black: String;
  white: String;
  primary: String;
  secondary: String;
}

export class Colors implements IColors {
  grays: Array<String>;
  black: String;
  white: String;
  primary: String;
  secondary: String;

  constructor(values: IColors) {
    const { grays, black, white, primary, secondary } = values;

    this.grays = grays;
    this.black = black;
    this.white = white;
    this.primary = primary;
    this.secondary = secondary;
  }

  get bg(): String {
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

interface ISpace extends Array<Number> {}

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

export interface IBorderWidth extends Array<Number> {}

const borderWidths: IBorderWidth = [0, 1];

export interface IBorderStyles extends Array<String> {}

const borderStyles: IBorderStyles = ['none', 'solid'];

export interface IShadows {
  out: String;
  in: String;
  input: String;
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

export class ZIndexes extends Array<Number> {
  private _modal: Number;
  private _taskbar: Number;

  constructor(values: Number[]) {
    super(...values);
  }

  get modal(): Number {
    return this._modal ?? this[1];
  }
  set modal(value: Number) {
    this._modal = value;
  }

  get taskbar(): Number {
    return this._taskbar ?? this[2];
  }
  set taskbar(value: Number) {
    this._taskbar = value;
  }
}

const zIndices: ZIndexes = new ZIndexes([0, 1, 2]);
[, zIndices.modal, zIndices.taskbar] = zIndices;

export interface ITheme {
  colors: IColors;
  space: Array<Number>;
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

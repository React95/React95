const space = {
  '0': '0px',
  '1': '1px',
  '2': '2px',
  '3': '3px',
  '4': '4px',
  '5': '5px',
  '6': '6px',
  '7': '7px',
  '8': '8px',
  '9': '9px',
  '10': '10px',
  '11': '11px',
  '12': '12px',
  '13': '13px',
  '14': '14px',
  '15': '15px',
  '16': '16px',
  '17': '17px',
  '18': '18px',
  '19': '19px',
  '20': '20px',
};

const colors = {
  anchor: '',
  anchorVisited: '',
  borderDark: '',
  borderDarkest: '',
  borderLight: '',
  borderLighter: '',
  borderLightest: '',
  canvas: '',
  canvasText: '',
  headerBackground: '',
  headerNotActiveBackground: '',
  headerNotActiveText: '',
  headerText: '',
  material: '',
  materialText: '',
  materialTextDisabled: '',
  materialTextDisabledShadow: '',
  materialTextInvert: '',
  progress: '',
  inputBackground: '',
  inputBackgroundDisabled: '',
};

type IColors = typeof colors;

const zIndices = {
  modal: '1',
  tooltip: '2',
  taskbar: '2',
};

export const generateShadows = (colors: IColors) => {
  return {
    out: `inset 0.5px 0.5px 0px 0.5px ${colors.borderLightest},
          inset 0 0 0 1px ${colors.borderDark},
          1px 0px 0 0px ${colors.borderDarkest},
          0px 1px 0 0px ${colors.borderDarkest},
          1px 1px 0 0px ${colors.borderDarkest}`,
    in: `inset 0px 0px 0px 0px,
        inset 1px 1px 0px 0px ${colors.borderDark},
        0.5px 0.5px 0px 0.5px ${colors.borderLightest}`,
    input: `inset -1px -1px 0 0 ${colors.material},
            inset 1px 1px 0 0 ${colors.borderDarkest},
            0.5px 0.5px 0 0.5px ${colors.borderLightest}`,
  };
};

export const theme = {
  zIndices,
  space,
  colors,
};

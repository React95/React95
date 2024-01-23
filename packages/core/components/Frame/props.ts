import { contract } from '../ThemeProvider/themes/contract.css';

export const positioning = {
  position: true,
  top: true,
  right: true,
  pointerEvents: true,
} as const;

export const displayAndBoxModel = {
  display: true,
  overflow: true,
  boxSizing: true,

  grid: true,
  gridArea: true,
  gridAutoColumns: true,
  gridAutoFlow: true,
  gridAutoRows: true,
  gridColumn: true,
  gridColumnEnd: true,
  gridColumnStart: true,
  gridRow: true,
  gridRowEnd: true,
  gridRowStart: true,
  gridTemplate: true,
  gridTemplateAreas: true,
  gridTemplateColumns: true,
  gridTemplateRows: true,

  flex: true,
  flexBasis: true,
  flexDirection: true,
  flexFlow: true,
  flexGrow: true,
  flexShrink: true,
  flexWrap: true,

  justifyContent: true,
  justifyItems: true,
  justifySelf: true,
  alignContent: true,
  alignItems: true,
  alignSelf: true,

  gap: contract.space,

  width: contract.space,
  maxWidth: contract.space,
  minWidth: contract.space,
  height: contract.space,
  maxHeight: contract.space,
  minHeight: contract.space,

  margin: contract.space,
  marginBlock: contract.space,
  marginBlockEnd: contract.space,
  marginBlockStart: contract.space,
  marginBottom: contract.space,
  marginInline: contract.space,
  marginInlineEnd: contract.space,
  marginInlineStart: contract.space,
  marginLeft: contract.space,
  marginRight: contract.space,
  marginTop: contract.space,

  padding: contract.space,
  paddingBlock: contract.space,
  paddingBlockEnd: contract.space,
  paddingBlockStart: contract.space,
  paddingBottom: contract.space,
  paddingInline: contract.space,
  paddingInlineEnd: contract.space,
  paddingInlineStart: contract.space,
  paddingLeft: contract.space,
  paddingRight: contract.space,
  paddingTop: contract.space,
} as const;

export const colors = {
  backgroundColor: contract.colors,
  colors: contract.colors,
};

export const background = {
  background: true,
  backgroundAttachment: true,
  backgroundColor: true,
  backgroundImage: true,
  backgroundPosition: true,
  backgroundRepeat: true,
  backgroundSize: true,
  backgroundOrigin: true,
  backgroundClip: true,
} as const;

export const borders = {
  border: true,
  borderStyle: true,
  borderWidth: true,
  borderColor: contract.colors,
  borderTop: true,
  borderTopColor: contract.colors,
  borderTopStyle: true,
  borderTopWidth: true,
  borderRight: true,
  borderRightColor: contract.colors,
  borderRightStyle: true,
  borderRightWidth: true,
  borderBottom: true,
  borderBottomColor: contract.colors,
  borderBottomStyle: true,
  borderBottomWidth: true,
  borderLeft: true,
  borderLeftColor: contract.colors,
  borderLeftStyle: true,
  borderLeftWidth: true,
} as const;

export const borderRadius = {
  borderBottomLeftRadius: true,
  borderBottomRightRadius: true,
  borderImage: true,
  borderImageOutset: true,
  borderImageRepeat: true,
  borderImageSlice: true,
  borderImageSource: true,
  borderImageWidth: true,
  borderRadius: true,
  borderTopLeftRadius: true,
  borderTopRightRadius: true,
} as const;

export const shadows = {
  boxShadow: contract.shadows,
} as const;

export const outline = {
  outline: true,
  outlineColor: true,
  outlineStyle: true,
  outlineWidth: true,
} as const;

export const font = {
  font: true,
  fontFamily: true,
  fontStyle: true,
  fontSize: true,
  fontWeight: true,
  fontVariant: true,
  fontSizeAdjust: true,
} as const;

export const text = {
  color: contract.colors,
  direction: true,
  letterSpacing: true,
  lineHeight: true,
  textAlign: true,
  textDecoration: true,
  textIndent: true,
  textShadow: true,
  textTransform: true,
  verticalAlign: true,
  whiteSpace: true,
  wordSpacing: true,
  wordBreak: true,
} as const;

export const zIndices = {
  zIndex: contract.zIndices,
} as const;

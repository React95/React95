import { contract } from '../ThemeProvider/themes/contract.css';

export const positioning = {
  position: true,
  top: true,
  right: true,
} as const;

export const displayAndBoxModel = {
  display: true,
  overflow: true,
  boxSizing: true,

  width: contract.space,
  maxWidth: contract.space,
  minWidth: contract.space,
  height: contract.space,
  maxHeight: contract.space,
  minHeight: contract.space,

  margin: contract.space,
  marginTop: contract.space,
  marginLeft: contract.space,
  marginRight: contract.space,
  marginBottom: contract.space,

  padding: contract.space,
  paddingTop: contract.space,
  paddingLeft: contract.space,
  paddingRight: contract.space,
  paddingBottom: contract.space,
} as const;

import { globalStyle, style } from '@vanilla-extract/css';
import { contract } from '../themes/contract.css';
import { calc } from '@vanilla-extract/css-utils';
import { recipe } from '@vanilla-extract/recipes';
import { inLayer, components } from '../shared/layers.css';

const base = { listStyle: 'none', margin: '0', padding: '0' };

export const tree = style(inLayer(components, base));

globalStyle(
  `${tree} ul`,
  inLayer(components, { ...base, marginLeft: contract.space[6] }),
);

export const rootGroup = style(inLayer(components, base));

// `${tree} ul` indents nested groups; the root's group is exempt so its
// nodes keep the positioning they had as direct children of the tree
globalStyle(`${tree} ul.${rootGroup}`, inLayer(components, { marginLeft: 0 }));

export const node = style(
  inLayer(components, {
    marginLeft: contract.space[13],
    borderLeftWidth: 'thin',
    borderLeftStyle: 'dotted',
    borderLeftColor: contract.colors.borderDarkest,
    position: 'relative',
    selectors: {
      '&:last-child': {
        borderLeftColor: 'transparent',
      },
      // the focus lands on the `li` (roving tabindex): hide its default
      // outline, the label below draws the dotted one instead
      '&:focus': {
        outline: 'none',
      },
      '&:before': {
        position: 'absolute',
        left: 0,
        width: contract.space[16],
        height: contract.space[10],
        verticalAlign: 'top',
        borderBottomWidth: 'thin',
        borderBottomStyle: 'dotted',
        borderBottomColor: contract.colors.borderDarkest,
        content: '""',
        display: 'inline-block',
      },
      '&:last-child:before': {
        borderLeftWidth: 'thin',
        borderLeftStyle: 'dotted',
        borderLeftColor: contract.colors.borderDarkest,
        left: calc.negate(contract.space[1]),
        width: contract.space[15],
      },
    },
  }),
);

export const nodeRoot = style(
  inLayer(components, {
    padding: 0,
    margin: 0,
    borderLeft: 'unset',
    selectors: {
      '&:before': {
        content: 'unset',
      },
      // like `node`: the label draws the dotted focus indicator instead
      '&:focus': {
        outline: 'none',
      },
    },
  }),
);

export const nodeContent = style(
  inLayer(components, {
    display: 'flex',
    alignItems: 'center',
    position: 'relative',
  }),
);

export const label = style(
  inLayer(components, {
    outline: 'none',
    padding: contract.space[1],
    selectors: {
      // the focus lands on the `li` (roving tabindex), so the label draws
      // the dotted focus indicator when its node is focused — the old
      // `label:focus` style, moved up to the node; same dotted style as
      // Tabs
      [`${node}:focus > ${nodeContent} > &`]: {
        outline: `${contract.space[1]} dotted ${contract.colors.materialText}`,
      },
      [`${nodeRoot}:focus > ${nodeContent} > &`]: {
        outline: `${contract.space[1]} dotted ${contract.colors.materialText}`,
      },
    },
  }),
);

export const folderStatus = style(
  inLayer(components, {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    minWidth: contract.space[10],
    height: contract.space[10],
    borderWidth: contract.space[1],
    borderStyle: 'solid',
    borderColor: contract.colors.borderDarkest,
    backgroundColor: contract.colors.inputBackground,
    fontSize: '11px',
    marginLeft: calc.negate(contract.space[5]),
    userSelect: 'none',
  }),
);

export const iconContainer = recipe({
  base: inLayer(components, {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    minWidth: contract.space[20],
    minHeight: contract.space[20],
    marginRight: contract.space[2],
  }),
  variants: {
    hasChildren: {
      true: inLayer(components, {
        marginLeft: contract.space[2],
      }),
      false: inLayer(components, {
        marginLeft: contract.space[6],
      }),
    },
  },
});

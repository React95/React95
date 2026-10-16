import { recipe } from '@vanilla-extract/recipes';
import { contract } from '../themes/contract.css';
import { style } from '@vanilla-extract/css';
import { inLayer, components } from '../shared/layers.css';

export const avatar = recipe({
  base: inLayer(components, {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontWeight: 'bold',
    overflow: 'hidden',
    marginRight: contract.space[1],
    marginBottom: contract.space[1],
    backgroundColor: contract.colors.material,
    boxShadow: contract.shadows.in,
  }),

  variants: {
    circle: {
      true: inLayer(components, {
        borderRadius: '50%',
        borderStyle: 'solid',
        borderWidth: contract.space[1],
        borderTopColor: contract.colors.borderDark,
        borderRightColor: contract.colors.borderLightest,
        borderBottomColor: contract.colors.borderLightest,
        borderLeftColor: contract.colors.borderDark,
        boxShadow: 'none',
      }),
    },
  },
});

export const imgStyle = style(
  inLayer(components, {
    maxWidth: '100%',
  }),
);

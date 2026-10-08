import { globalLayer, StyleRule } from '@vanilla-extract/css';
import { getFileScope } from '@vanilla-extract/css/fileScope';

// React95's CSS sits in cascade layers, so any CSS outside of them wins over
// it: the Frame props, the Cursor classes and the app's own styles
export const globals = 'react95.global';
export const components = 'react95.components';
// components that restyle the ones they render, e.g. Video's buttons
export const composed = 'react95.composed';

const order = ['react95', globals, components, composed];
const declaredIn = new Set<string>();

export const inLayer = (layer: string, rule: StyleRule): StyleRule => {
  // every file declares the whole order, since the first layer the browser
  // sees takes the first place: the build drops the import of a shared file
  // that would only declare layers
  const { filePath } = getFileScope();

  if (!declaredIn.has(filePath)) {
    declaredIn.add(filePath);
    order.forEach(name => globalLayer(name));
  }

  const layers: Record<string, StyleRule> = { [layer]: rule };

  return { '@layer': layers } as unknown as StyleRule;
};

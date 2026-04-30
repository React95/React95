// Type declarations for clippyjs subpath imports.
// moduleResolution: "node" doesn't resolve package.json exports fields,
// so we declare these manually. Vite handles actual module resolution.
declare module 'clippyjs/agents' {
  import type { initAgent } from 'clippyjs';
  type Loaders = Parameters<typeof initAgent>[0];
  export const Bonzi: Loaders;
  export const Clippy: Loaders;
  export const F1: Loaders;
  export const Genie: Loaders;
  export const Genius: Loaders;
  export const Links: Loaders;
  export const Merlin: Loaders;
  export const Peedy: Loaders;
  export const Rocky: Loaders;
  export const Rover: Loaders;
}

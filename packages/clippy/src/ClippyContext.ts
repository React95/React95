import { initAgent } from 'clippyjs';
import { createContext } from 'react';

export type ClippyAgent = Awaited<ReturnType<typeof initAgent>>;

export const ClippyContext = createContext<{
  clippy: ClippyAgent | undefined;
}>({
  clippy: undefined,
});

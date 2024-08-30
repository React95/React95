import { Agent } from 'clippyts';
import { createContext } from 'react';

export const ClippyContext = createContext<{
  clippy: Agent | undefined;
}>({
  clippy: undefined,
});

import { AGENTS, ClippyProvider, useClippy } from '@react95/clippy';
import { renderHook, waitFor } from '@testing-library/react';
import { initAgent } from 'clippyjs';
import type { FC, ReactNode } from 'react';
import { describe, expect, it } from 'vitest';
import * as agentLoaders from 'clippyjs/agents';

describe('useClippy', () => {
  it('should get agent from ClippyContext', async () => {
    const wrapper: FC<{
      children?: ReactNode;
    }> = ({ children }) => <ClippyProvider>{children}</ClippyProvider>;

    const agent = renderHook(() => useClippy(), { wrapper });

    expect(agent.result.current.clippy).toBeUndefined();

    await waitFor(() => {
      expect(agent.result.current.clippy).toMatchObject({
        show: expect.any(Function),
        hide: expect.any(Function),
        dispose: expect.any(Function),
      });
    });
  });

  it('agent should be Clippy by default', async () => {
    const wrapper: FC<{
      children?: ReactNode;
    }> = ({ children }) => <ClippyProvider>{children}</ClippyProvider>;

    renderHook(() => useClippy(), { wrapper });

    await waitFor(() => {
      expect(initAgent).toHaveBeenCalledWith(agentLoaders[AGENTS.CLIPPY]);
    });
  });

  it('agent should be different', async () => {
    const agentName = AGENTS.MERLIN;

    const wrapper: FC<{
      children?: ReactNode;
    }> = ({ children }) => (
      <ClippyProvider agentName={agentName}>{children}</ClippyProvider>
    );

    renderHook(() => useClippy(), { wrapper });

    await waitFor(() => {
      expect(initAgent).toHaveBeenCalledWith(agentLoaders[AGENTS.MERLIN]);
    });
  });
});

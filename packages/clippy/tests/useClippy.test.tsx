import { AGENTS, ClippyProvider, useClippy } from '@react95/clippy';
import { renderHook } from '@testing-library/react';
import clippyts from 'clippyts';
import React from 'react';
import { describe, expect, it } from 'vitest';

const wrapper: React.FC<{
  children?: React.ReactNode;
}> = ({ children }) => <ClippyProvider>{children}</ClippyProvider>;

describe('useClippy', () => {
  it('should get agent from ClippyContext', () => {
    const agent = renderHook(() => useClippy(), { wrapper });
    const clippy = agent.result.current.clippy;

    expect(clippy).toBeTruthy();
  });

  it('agent should be Clippy by default', () => {
    renderHook(() => useClippy(), { wrapper });

    expect(clippyts.load).toHaveBeenCalledWith(
      expect.objectContaining({ name: AGENTS.CLIPPY }),
    );
  });

  it('agent should be different', () => {
    const agentName = AGENTS.MERLIN;

    const wrapper: React.FC<{
      children?: React.ReactNode;
    }> = ({ children }) => (
      <ClippyProvider agentName={agentName}>{children}</ClippyProvider>
    );

    renderHook(() => useClippy(), { wrapper });

    expect(clippyts.load).toHaveBeenCalledWith(
      expect.objectContaining({ name: AGENTS.MERLIN }),
    );
  });
});

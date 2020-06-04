/* eslint-disable react/prop-types */
import React from 'react';
import { renderHook } from '@testing-library/react-hooks';
import { useClippy, AGENTS, ClippyProvider } from '@react95/clippy';

describe('useClippy', () => {
  it('should get agent from ClippyContext', () => {
    const wrapper = ({ children }) => (
      <ClippyProvider>{children}</ClippyProvider>
    );
    const { result } = renderHook(() => useClippy(), { wrapper });
    const { clippy: agent } = result.current;

    expect(agent).toBeTruthy();
  });

  it('agent should be Clippy by default', () => {
    const wrapper = ({ children }) => (
      <ClippyProvider>{children}</ClippyProvider>
    );
    const { result } = renderHook(() => useClippy(), { wrapper });
    const { clippy: agent } = result.current;

    expect(agent.agentName).toBe(AGENTS.CLIPPY);
  });

  it('agent should be different', () => {
    const agentName = AGENTS.MERLIN;

    const wrapper = ({ children }) => (
      <ClippyProvider agentName={agentName}>{children}</ClippyProvider>
    );
    const { result } = renderHook(() => useClippy(), { wrapper });
    const { clippy: agent } = result.current;

    expect(agent.agentName).toBe(agentName);
  });
});

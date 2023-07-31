import { AGENTS, ClippyProvider, useClippy } from '@react95/clippy';
import { render } from '@testing-library/react';
import React from 'react';
import { describe, expect, it } from 'vitest';

describe('useClippy', () => {
  it('should get agent from ClippyContext', () => {
    const wrapper = ({ children }) => (
      <ClippyProvider>{children}</ClippyProvider>
    );
    const result = React.createRef();

    function Test() {
      const pendingResult = useClippy();

      React.useEffect(() => {
        result.current = pendingResult;
      });

      return null;
    }

    render(<Test />, { wrapper });

    const { clippy: agent } = result.current;

    expect(agent).toBeTruthy();
  });

  it('agent should be Clippy by default', () => {
    const wrapper = ({ children }) => (
      <ClippyProvider>{children}</ClippyProvider>
    );

    const result = React.createRef();

    function Test() {
      const pendingResult = useClippy();

      React.useEffect(() => {
        result.current = pendingResult;
      });

      return null;
    }
    render(<Test />, { wrapper });

    const { clippy: agent } = result.current;

    expect(agent.agentName).toBe(AGENTS.CLIPPY);
  });

  it('agent should be different', () => {
    const agentName = AGENTS.MERLIN;

    const wrapper = ({ children }) => (
      <ClippyProvider agentName={agentName}>{children}</ClippyProvider>
    );

    const result = React.createRef();

    function Test() {
      const pendingResult = useClippy();

      React.useEffect(() => {
        result.current = pendingResult;
      });

      return null;
    }
    render(<Test />, { wrapper });

    const { clippy: agent } = result.current;

    expect(agent.agentName).toBe(agentName);
  });
});

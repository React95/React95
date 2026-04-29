import React, { FC, ReactNode, useEffect, useRef, useState } from 'react';
import { initAgent } from 'clippyjs';
import * as agentLoaders from 'clippyjs/agents';
import AGENTS, { AgentType } from './agents';
import { ClippyAgent, ClippyContext } from './ClippyContext';

export const ClippyProvider: FC<{
  agentName?: AgentType;
  children?: ReactNode;
}> = ({ children, agentName = AGENTS.CLIPPY }) => {
  const [clippy, setClippy] = useState<ClippyAgent>();
  const agentRef = useRef<ClippyAgent | null>(null);

  useEffect(() => {
    let cancelled = false;

    async function loadAgent() {
      try {
        const agent = await initAgent(agentLoaders[agentName]);
        if (cancelled) {
          agent.dispose();
          return;
        }
        agentRef.current = agent;
        agent.show(false);
        setClippy(agent);
      } catch (error) {
        console.error(error);
      }
    }

    const prev = agentRef.current;
    if (prev) {
      prev.hide(false, () => {
        prev.dispose();
        if (!cancelled) loadAgent();
      });
    } else {
      loadAgent();
    }

    return () => {
      cancelled = true;
    };
  }, [agentName]);

  useEffect(() => {
    return () => {
      agentRef.current?.dispose();
      agentRef.current = null;
    };
  }, []);

  return (
    <ClippyContext.Provider value={{ clippy }}>
      {children}
    </ClippyContext.Provider>
  );
};

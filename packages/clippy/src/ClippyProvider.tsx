import React, { FC, ReactNode, useEffect, useState } from 'react';
import clippyts, { Agent } from 'clippyts';
import clippyStyle from './style';
import AGENTS from './agents';
import { ClippyContext } from './ClippyContext';
import { AgentType } from 'clippyts/dist/types';

let clippyAgent: Agent;

export const ClippyProvider: FC<{
  agentName?: AgentType;
  children?: ReactNode;
}> = ({ children, agentName = AGENTS.CLIPPY }) => {
  const [clippy, setClippy] = useState<Agent>();

  function byebye(agent: Agent, cb?: () => void) {
    agent?.hide(false, () => {
      if (cb) cb();
    });
  }

  useEffect(() => {
    const { head } = document;
    const link = document.createElement('style');

    link.appendChild(document.createTextNode(clippyStyle));

    head.appendChild(link);

    return () =>
      byebye(clippyAgent, () => {
        head.removeChild(link);
      });
  }, []);

  useEffect(() => {
    function getAgent() {
      clippyts.load({
        name: agentName,
        successCb: agent => {
          agent.show(false);
          setClippy(agent);
          clippyAgent = agent;
        },
        failCb: error => {
          console.error(error);
          setClippy(undefined);
        },
      });
    }

    if (clippy) {
      byebye(clippy, () => getAgent());
    } else {
      getAgent();
    }
  }, [agentName]);

  return (
    <ClippyContext.Provider
      value={{
        clippy,
      }}
    >
      {children}
    </ClippyContext.Provider>
  );
};

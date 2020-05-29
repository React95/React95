import 'jquery';
import React, { useEffect, useState } from 'react';
import clippyjs from 'clippyjs';
import clippyStyle from './style';
import AGENTS from './agents';
import ClippyContext from './ClippyContext';

window.CLIPPY_CDN = '//s3.amazonaws.com/clippy.js/Agents/';

let clippyAgent;

const ClippyProvider = ({ children, agentName = AGENTS.CLIPPY }) => {
  const [clippy, setClippy] = useState();

  function byebye(agent, cb) {
    agent.hide(false, () => {
      if (cb) cb();
    });
  }

  useEffect(() => {
    const { head } = document;
    const link = document.createElement('style');

    link.type = 'text/css';

    if (link.styleSheet) {
      link.styleSheet.cssText = clippyStyle;
    } else {
      link.appendChild(document.createTextNode(clippyStyle));
    }

    head.appendChild(link);

    return () => byebye(clippyAgent);
  }, []);

  useEffect(() => {
    function getAgent() {
      clippyjs.load(
        agentName,
        agent => {
          agent.show();
          setClippy(agent);
          clippyAgent = agent;
        },
        () => {
          setClippy();
        },
      );
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

export default ClippyProvider;

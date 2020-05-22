import 'jquery';
import { useEffect, useState } from 'react';
import clippyjs from 'clippyjs';
import clippyStyle from './style';
import AGENTS from './agents';

function useClippy(agentName = AGENTS.CLIPPY) {
  const [clippy, setClippy] = useState(null);

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
  }, []);

  useEffect(() => {
    clippyjs.load(agentName, agent => {
      agent.show();
      setClippy(agent);
    });
  }, [agentName]);

  return fn => fn(clippy);
}

export default useClippy;

import React from 'react';
import {
  addons,
  types,
  useChannel,
  useStorybookApi,
} from '@storybook/manager-api';
import clippy from 'clippyts';

import { STORY_CHANGED } from '@storybook/core-events';

const channel = addons.getChannel();

let agent;
const availableAgents = [
  'Bonzi',
  'Clippy',
  'F1',
  'Genie',
  'Genius',
  'Links',
  'Merlin',
  'Peedy',
  'Rocky',
  'Rover',
];

const talks = [
  'New to our project? Let me show you around!',
  'What brings you here today? Need help with something?',
  "We're always improving! Check out our latest updates.",
  'Want to get involved? We love contributions from our community!',
  "Stuck on something? Don't worry, we've got resources to help!",
  "Thanks for checking out our project! We're glad you're here.",
  "We're passionate about building something amazing. Want to join us?",
  "What do you think of our project so far? We'd love to hear your feedback!",
  "Ready to dig in? We've got plenty of resources to get you started.",
  "We're always learning and growing. Stay tuned for exciting updates!",
];

const Clippy = () => {
  const [state, setState] = React.useState({
    pkg: 'core',
    component: '',
    code: '',
    clippyButton: false,
    showModal: false,
  });
  const api = useStorybookApi();

  const emit = useChannel({
    [STORY_CHANGED]: (...args) => console.log(...args),
  });

  React.useEffect(() => {
    const agentName =
      availableAgents[Math.floor(Math.random() * availableAgents.length)];

    if (!agent) {
      clippy.load({
        name: agentName,
        successCb: loadedAgent => {
          agent = loadedAgent;

          agent.show();
          agent.play('Wave');

          const msg = talks[Math.floor(Math.random() * talks.length)];
          agent.speak(msg);

          agent._el.addEventListener('click', speak);
        },
      });
    }

    if (api.onStory) {
      return api.onStory(() => setComponent(''));
    }
  }, []);

  const speak = () => {
    const { component, code } = state;

    if (component && code) {
      agent.speak('Do you wanna see the code?');
    }

    agent.animate();
  };

  return null;
};

const ADDON_ID = 'clippy';
const PANEL_ID = `${ADDON_ID}/panel`;

addons.register(ADDON_ID, api => {
  addons.add(PANEL_ID, {
    type: types.PANEL,
    title: ADDON_ID,
    render: ({ active }) => {
      return <Clippy channel={addons.getChannel()} api={api} active={active} />;
    },
  });
});

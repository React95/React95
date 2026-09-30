import React from 'react';
import { createRoot } from 'react-dom/client';
import type { Decorator } from '@storybook/react-vite';
import { AGENTS, ClippyProvider, useClippy } from '@react95/clippy';

type ClippyAgent = NonNullable<ReturnType<typeof useClippy>['clippy']>;

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

const random = <T,>(list: T[]) => list[Math.floor(Math.random() * list.length)];

let resolveAgent: (agent: ClippyAgent) => void;
const agentReady = new Promise<ClippyAgent>(resolve => {
  resolveAgent = resolve;
});

const Greeter = () => {
  const { clippy } = useClippy();

  React.useEffect(() => {
    if (!clippy) {
      return;
    }

    clippy.play('Wave');
    clippy.speak(random(talks), false);

    const onClick = () => {
      clippy.speak(random(talks), false);
      clippy.animate();
    };

    clippy._el.addEventListener('click', onClick);
    resolveAgent(clippy);

    return () => {
      clippy._el.removeEventListener('click', onClick);
    };
  }, [clippy]);

  return null;
};

let mounted = false;

// Each story (and each story on a docs page) renders in its own React root, and
// every `ClippyProvider` owns an agent. So a single provider is mounted once,
// outside the stories, and the agent is shared across all of them.
const mountClippy = () => {
  if (mounted) {
    return;
  }

  mounted = true;

  const container = document.createElement('div');
  document.body.appendChild(container);

  createRoot(container).render(
    <ClippyProvider agentName={random(Object.values(AGENTS))}>
      <Greeter />
    </ClippyProvider>,
  );
};

// waits for the agent, so it is safe to call while it is still loading
const speak = (message: string) => {
  agentReady.then(agent => agent.speak(message, false));
};

export const withClippy: Decorator = (Story, context) => {
  mountClippy();

  return Story({ ...context, speak });
};

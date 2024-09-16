import React from 'react';
import clippy from 'clippyts';

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

const ClippyContext = React.createContext({ speak: () => {} });

export const ClippyProvider = ({ children, ...props }) => {
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

          agent._el.addEventListener('click', () => {
            const msg = talks[Math.floor(Math.random() * talks.length)];

            speak(msg, true);
          });
        },
      });
    }
  }, []);

  const speak = (msg, animate = false) => {
    agent.speak(msg);

    if (animate) {
      agent.animate();
    }
  };

  return (
    <ClippyContext.Provider value={{ speak }}>
      {children({ ...props, ...{ speak } })}
    </ClippyContext.Provider>
  );
};

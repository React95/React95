/// <reference types="vite/client" />
/**
 * Clippy in Storybook
 *
 * A random agent from `@react95/clippy` lives in the preview while you browse
 * the stories.
 *
 * Setup
 * - One `ClippyProvider` is mounted once, in its own React root, outside the
 *   stories. Each story (and each story on a docs page) renders in a separate
 *   root, and every provider owns an agent, so this keeps a single agent that
 *   survives story changes.
 * - clippyjs styles the balloon inline, so the project font (MS Sans Serif) is
 *   applied to it once the agent is ready.
 *
 * When Clippy talks
 * - On load: waves and says a general phrase (`talks`).
 * - When clicked: says a phrase from the current story or from `talks`.
 * - On story change (a docs page counts as a single change):
 *   - stories with `parameters.clippy.phrases` always get one of them, right
 *     away, queued after any open balloon (the first story too, after the
 *     greeting);
 *   - other stories get, at most every 30s and only if no balloon is open, the
 *     Figma tip when they have `parameters.design`, or a general phrase.
 * - When idle: a phrase 60–90s after the last one, only while the tab is
 *   visible and no balloon is open.
 * - Never the same phrase twice in a row.
 *
 * Using it in a story
 * - Story phrases: `parameters: { clippy: { phrases: ['...'] } }`, at the story
 *   or component (meta) level.
 * - Talking from a story: the render function receives `speak` in its context,
 *   e.g. `render: (_, { speak }) => ...` and `speak('Copied to clipboard!')`.
 *   It is safe to call while the agent is still loading, and is always queued.
 *
 * Clippy is left out of the story tests (`vitest.config.mjs`).
 */
import React from 'react';
import { createRoot } from 'react-dom/client';
import type { Decorator } from '@storybook/react-vite';
import { AGENTS, ClippyProvider, useClippy } from '@react95/clippy';
import { MSSansSerif } from '../../components/shared/font-names';

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
  "It looks like you're browsing a component library. Would you like help?",
  'Did you know? You can switch themes in the Themes panel below.',
  'Click any icon on the Icon page to copy its code to your clipboard.',
  'Looking for a component? Try the search at the top of the sidebar.',
  'Found a bug? Open an issue on GitHub and we will take a look!',
  'Every component here is built with React and a lot of nostalgia.',
  "Don't forget to save your work. Ctrl+S is your friend!",
  'Remember when 16MB of RAM felt like a lot?',
  'It is now safe to turn off your computer. Just kidding, keep exploring!',
];

// only said on stories that have a Figma design attached
const designTip = 'Psst! The Design tab shows the Figma file for this one.';

// automatic speech (on story change or when idle) is spaced out, so Clippy
// comments on things without talking over every click
const STORY_CHANGE_COOLDOWN = 30_000;
const IDLE_DELAY_MIN = 60_000;
const IDLE_DELAY_MAX = 90_000;
const IDLE_CHECK_INTERVAL = 5_000;

const random = <T,>(list: T[]) => list[Math.floor(Math.random() * list.length)];

const randomIdleDelay = () =>
  IDLE_DELAY_MIN + Math.random() * (IDLE_DELAY_MAX - IDLE_DELAY_MIN);

let lastSpokeAt = 0;
let lastPhrase: string | undefined;
let lastStoryKey: string | undefined;
// phrases about the story being viewed, from `parameters.clippy.phrases`
let storyPhrases: string[] = [];

// avoids saying the same phrase twice in a row
const pick = (phrases: string[]) =>
  random(phrases.length > 1 ? phrases.filter(p => p !== lastPhrase) : phrases);

const say = (agent: ClippyAgent, message: string) => {
  lastSpokeAt = Date.now();
  lastPhrase = message;
  agent.speak(message, false);
};

// automatic speech is dropped, not queued, while a balloon is open
const sayIfQuiet = (agent: ClippyAgent, message: string) => {
  if (agent._balloon._hidden) {
    say(agent, message);
  }
};

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

    // clippyjs styles the balloon inline (with "Microsoft Sans"), so the
    // project font is applied straight to its content element
    Object.assign(clippy._balloon._content.style, {
      fontFamily: `'${MSSansSerif}', sans-serif`,
      fontSize: '12px',
    });

    // clippyjs sizes the balloon with offsetWidth/offsetHeight, which round
    // down. With MS Sans Serif a line can be a fraction of a pixel wider (e.g.
    // 195.44px), so once the width is fixed its last word wraps to a line that
    // wasn't measured and spills out of the balloon. This measures it again,
    // rounding up.
    const balloon = clippy._balloon;
    const sizeBalloon = balloon.speak.bind(balloon);

    balloon.speak = (complete: () => void, text: string, hold: boolean) => {
      sizeBalloon(complete, text, hold);

      const content = balloon._content;
      const typed = content.textContent;

      content.style.width = 'auto';
      content.style.height = 'auto';
      content.textContent = text;

      const { width, height } = content.getBoundingClientRect();

      content.style.width = `${Math.ceil(width)}px`;
      content.style.height = `${Math.ceil(height)}px`;
      content.textContent = typed;
      balloon.reposition();
    };

    clippy.play('Wave');
    say(clippy, pick(talks));

    const onClick = () => {
      say(clippy, pick([...storyPhrases, ...talks]));
      clippy.animate();
    };

    let idleDelay = randomIdleDelay();
    const idleCheck = setInterval(() => {
      if (
        document.visibilityState !== 'visible' ||
        Date.now() - lastSpokeAt < idleDelay
      ) {
        return;
      }

      sayIfQuiet(clippy, pick([...storyPhrases, ...talks]));
      idleDelay = randomIdleDelay();
    }, IDLE_CHECK_INTERVAL);

    clippy._el.addEventListener('click', onClick);
    resolveAgent(clippy);

    return () => {
      clearInterval(idleCheck);
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

type StoryPhrases = {
  // from `parameters.clippy.phrases`
  configured: string[];
  // derived from the story, like the Figma tip
  contextual: string[];
};

const onStoryChange = (
  storyKey: string,
  { configured, contextual }: StoryPhrases,
) => {
  if (storyKey === lastStoryKey) {
    return;
  }

  const isFirstStory = lastStoryKey === undefined;

  lastStoryKey = storyKey;
  storyPhrases = [...configured, ...contextual];

  agentReady.then(agent => {
    // a story with its own phrases always gets one, right away (queued after
    // any open balloon, including the greeting on the first story)
    if (configured.length > 0) {
      say(agent, pick(configured));

      return;
    }

    // otherwise the greeting covers the first story, and later changes are
    // spaced out
    if (!isFirstStory && Date.now() - lastSpokeAt >= STORY_CHANGE_COOLDOWN) {
      sayIfQuiet(agent, pick(contextual.length > 0 ? contextual : talks));
    }
  });
};

const StoryChange = ({
  storyKey,
  phrases,
}: {
  storyKey: string;
  phrases: StoryPhrases;
}) => {
  React.useEffect(() => {
    // mounting the provider's own root during a story render makes React warn
    // about nested updates from render, so it happens after the story commits
    mountClippy();
    onStoryChange(storyKey, phrases);
  }, [storyKey]);

  return null;
};

// waits for the agent, so it is safe to call while it is still loading
const speak = (message: string) => {
  agentReady.then(agent => say(agent, message));
};

export const withClippy: Decorator = (Story, context) => {
  // story tests (Vitest runs in `test` mode) don't need a random agent with
  // timers and network requests
  if (import.meta.env.MODE === 'test') {
    return Story({ ...context, speak: () => {} });
  }

  const { clippy, design } = context.parameters;
  const phrases: StoryPhrases = {
    configured: (clippy as { phrases?: string[] } | undefined)?.phrases ?? [],
    contextual: design ? [designTip] : [],
  };

  // a docs page renders every story of a component, so it counts as a single
  // change instead of one per story
  const storyKey = context.viewMode === 'docs' ? context.title : context.id;

  return (
    <>
      <StoryChange storyKey={storyKey} phrases={phrases} />
      {Story({ ...context, speak })}
    </>
  );
};

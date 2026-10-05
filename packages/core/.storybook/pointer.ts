/// <reference types="vite/client" />
/**
 * Real pointer hover for play functions.
 *
 * The `userEvent` a play function gets simulates events, which CSS `:hover`
 * doesn't respond to (e.g. List's submenus). In the story tests (Vitest), a
 * real pointer is available through Playwright, so `hover` uses it there. In
 * the Storybook UI (Interactions panel) there's no real pointer: `hover`
 * falls back to the simulated one, and checks that depend on `:hover` should
 * only run when `isRealPointer` is true.
 */
import type { UserEventObject } from 'storybook/test';

// Vitest runs the story tests in `test` mode
export const isRealPointer = import.meta.env.MODE === 'test';

export const hover = async (
  element: Element,
  userEvent: Pick<UserEventObject, 'hover'>,
) => {
  if (!isRealPointer) {
    await userEvent.hover(element);

    return;
  }

  const { userEvent: realUserEvent } = await import('@vitest/browser/context');

  await realUserEvent.hover(element);
};

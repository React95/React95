import type { Meta, StoryObj } from '@storybook/react-vite';
import * as React from 'react';
import { expect, waitFor, within } from 'storybook/test';

import { ReaderClosed, WindowsExplorer } from '@react95/icons';
import { List, Modal, TitleBar } from '../components';
import { TaskBar } from '../components/TaskBar/TaskBar';

export default {
  title: 'TaskBar',
  component: TaskBar,
  tags: ['autodocs'],
} satisfies Meta<typeof TaskBar>;

const SimpleDemo = () => {
  const [first, toggleFirst] = React.useState(false);
  const [second, toggleSecond] = React.useState(false);

  const closeFirst = () => toggleFirst(false);
  const closeSecond = () => toggleSecond(false);

  return (
    <>
      {first && (
        <Modal
          icon={<WindowsExplorer variant="16x16_4" />}
          title="Windows Explorer"
          titleBarOptions={[
            <TitleBar.Close key="close" onClick={closeFirst} />,
          ]}
          width="300px"
          height="200px"
        />
      )}

      {second && (
        <Modal
          dragOptions={{
            defaultPosition: { x: 50, y: 50 },
          }}
          width="300px"
          height="200px"
          icon={<ReaderClosed variant="16x16_4" />}
          title="Local Disk (C:)"
          titleBarOptions={[
            <TitleBar.Close key="close" onClick={closeSecond} />,
          ]}
        />
      )}

      <TaskBar
        list={
          <List>
            <List.Item
              icon={<ReaderClosed variant="32x32_4" />}
              onClick={() => toggleSecond(true)}
            >
              Local Disk (C:)
            </List.Item>
            <List.Item
              icon={<WindowsExplorer variant="32x32_4" />}
              onClick={() => {
                toggleFirst(true);
              }}
            >
              Windows Explorer
            </List.Item>
          </List>
        }
      />
    </>
  );
};

// what the TaskBar's clock shows: the time, and the date in its tooltip
const clockTime = (date: Date) =>
  [date.getHours(), date.getMinutes()]
    .map(part => String(part).padStart(2, '0'))
    .join(':');

const clockDate = (date: Date) =>
  `${String(date.getDate()).padStart(2, '0')} ${date.toLocaleString('en-US', {
    month: 'long',
  })} ${date.getFullYear()}`;

export const Simple: StoryObj<typeof TaskBar> = {
  render: () => <SimpleDemo />,
  play: async ({ canvas, userEvent }) => {
    const start = canvas.getByRole('button', { name: 'Start' });
    const taskBar = start.parentElement!;
    const menus = () => within(taskBar).queryAllByRole('menu');
    const windowButtons = () =>
      within(taskBar)
        .getAllByRole('button')
        .filter(button => button !== start)
        .map(button => button.textContent);

    // Start opens and closes its menu
    await expect(menus()).toHaveLength(0);

    await userEvent.click(start);

    await expect(menus()).toHaveLength(1);

    await userEvent.click(start);

    await expect(menus()).toHaveLength(0);

    // Start is a menu button: Enter opens the menu on its first item, and Esc
    // closes it and gives the focus back to Start
    await expect(start).toHaveAttribute('aria-haspopup', 'menu');
    await expect(start).toHaveAttribute('aria-expanded', 'false');

    start.focus();
    await userEvent.keyboard('{Enter}');

    await expect(start).toHaveAttribute('aria-expanded', 'true');
    await expect(within(menus()[0]).getAllByRole('menuitem')[0]).toHaveFocus();

    await userEvent.keyboard('{Escape}');

    await expect(menus()).toHaveLength(0);
    await expect(start).toHaveAttribute('aria-expanded', 'false');
    await expect(start).toHaveFocus();

    // ↓ opens it on its first item, ↑ on its last
    await userEvent.keyboard('{ArrowDown}');

    await expect(within(menus()[0]).getAllByRole('menuitem')[0]).toHaveFocus();

    await userEvent.keyboard('{Escape}{ArrowUp}');

    await expect(
      within(menus()[0]).getAllByRole('menuitem').at(-1),
    ).toHaveFocus();

    // Tab leaves the menu and closes it
    await userEvent.tab();

    await expect(menus()).toHaveLength(0);
    await expect(start).toHaveAttribute('aria-expanded', 'false');

    // choosing an item closes the menu, and the window it opens gets a button
    await userEvent.click(start);
    await userEvent.click(within(menus()[0]).getByText('Local Disk (C:)'));

    await expect(menus()).toHaveLength(0);
    await expect(windowButtons()).toEqual(['Local Disk (C:)']);

    // the buttons follow the order the windows opened in
    await userEvent.click(start);
    await userEvent.click(within(menus()[0]).getByText('Windows Explorer'));

    await expect(windowButtons()).toEqual([
      'Local Disk (C:)',
      'Windows Explorer',
    ]);

    // a window's button gives the focus to the window it activates...
    const windowButton = (name: string) =>
      within(taskBar).getByRole('button', { name });
    const localDisk = canvas.getByRole('dialog', { name: 'Local Disk (C:)' });
    const explorer = canvas.getByRole('dialog', { name: 'Windows Explorer' });

    await userEvent.click(windowButton('Local Disk (C:)'));

    await expect(localDisk).toHaveFocus();

    // ...and minimizing the window leaves the focus on its button, not on the
    // hidden window
    await userEvent.click(windowButton('Local Disk (C:)'));

    await expect(localDisk).not.toBeVisible();
    await expect(windowButton('Local Disk (C:)')).toHaveFocus();

    // a window gets back the element that had the focus in it last, and the
    // keyboard works too
    const closeExplorer = within(explorer).getByRole('button');

    closeExplorer.focus();
    await userEvent.click(windowButton('Local Disk (C:)'));

    await expect(localDisk).toHaveFocus();

    windowButton('Windows Explorer').focus();
    await userEvent.keyboard('{Enter}');

    await expect(closeExplorer).toHaveFocus();

    // the clock shows the time (either side of a minute change)...
    const before = new Date();
    const clock = await waitFor(() =>
      within(taskBar).getByText(/^\d{2}:\d{2}$/),
    );

    await expect([clockTime(before), clockTime(new Date())]).toContain(
      clock.textContent,
    );

    // ...and hovering it shows the date
    await userEvent.hover(clock);

    await waitFor(() => expect(taskBar).toHaveTextContent(clockDate(before)), {
      timeout: 2000,
    });
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/2cbigNitjcruBDZT12ixIq/React95-Design-Kit?node-id=3%3A17',
    },
  },
};

// a moment with single digits everywhere: 9:07 on 5 January 2026
const morning = new Date(2026, 0, 5, 9, 7);

export const Clock: StoryObj<typeof TaskBar> = {
  render: () => <TaskBar />,
  // freezes "now" while the story is open, so the clock always shows it
  beforeEach: () => {
    const RealDate = Date;

    class FrozenDate extends RealDate {
      constructor(...args: unknown[]) {
        if (args.length) {
          super(...(args as [number]));
        } else {
          super(morning.getTime());
        }
      }

      static now() {
        return morning.getTime();
      }
    }

    globalThis.Date = FrozenDate as DateConstructor;

    return () => {
      globalThis.Date = RealDate;
    };
  },
  play: async ({ canvas, userEvent }) => {
    // hours, minutes and the day get a leading zero
    const clock = canvas.getByText('09:07');

    await userEvent.hover(clock);

    await waitFor(
      () => expect(clock.parentElement).toHaveTextContent('05 January 2026'),
      { timeout: 2000 },
    );
  },
};

import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect, fn, within } from 'storybook/test';

import {
  Computer3,
  FileFind,
  FolderExe,
  FolderExe2,
  FolderFile,
  FolderPrint,
  FolderSettings,
  HelpBook,
  LoaderBat,
  MicrosoftExchange,
  MicrosoftNetwork,
  MsDos,
  Settings,
  WindowsExplorer,
} from '@react95/icons';
import { List, ListProps } from '../components/List/List';
import { hover, isRealPointer } from '../.storybook/pointer';

// `as`, not `satisfies`: the polymorphic props make the type too complex
// for TypeScript (TS2590)
const meta = {
  title: 'List',
  component: List,
  subcomponents: { 'List.Item': List.Item, 'List.Divider': List.Divider },
  tags: ['autodocs'],
  args: {
    width: '200px',
  },
} as Meta<ListProps>;

export default meta;

type Story = StoryObj<typeof meta>;

export const WithIcons: Story = {
  render: args => (
    <List {...args}>
      <List.Item icon={<FolderExe2 variant="32x32_4" />}>
        <List width={'200px'}>
          <List.Item icon={<FolderExe variant="16x16_4" />}>
            Accessories
          </List.Item>
          <List.Item icon={<FolderExe variant="16x16_4" />}>StartUp</List.Item>
          <List.Item icon={<MicrosoftExchange variant="16x16_4" />}>
            Microsoft Exchange
          </List.Item>
          <List.Item icon={<MsDos variant="16x16_32" />}>
            MS-DOS Prompt
          </List.Item>
          <List.Item icon={<MicrosoftNetwork variant="16x16_4" />}>
            The Microsoft Network
          </List.Item>
          <List.Item icon={<WindowsExplorer variant="16x16_4" />}>
            Windows Explorer
          </List.Item>
        </List>
        Programs
      </List.Item>
      <List.Item icon={<FolderFile variant="32x32_4" />}>Documents</List.Item>
      <List.Item icon={<Settings variant="32x32_4" />}>
        <List width={'200px'}>
          <List.Item icon={<FolderSettings variant="16x16_4" />}>
            Control Panel
          </List.Item>
          <List.Item icon={<FolderPrint variant="16x16_4" />}>
            Printers
          </List.Item>
        </List>
        Settings
      </List.Item>
      <List.Item icon={<FileFind variant="32x32_4" />}>Find</List.Item>
      <List.Item icon={<HelpBook variant="32x32_4" />}>Help</List.Item>
      <List.Item icon={<LoaderBat variant="32x32_4" />}>Run...</List.Item>
      <List.Divider />
      <List.Item icon={<Computer3 variant="32x32_4" />}>Shut Down...</List.Item>
    </List>
  ),
  play: async ({ canvas, userEvent }) => {
    const menu = canvas.getByRole('menu');
    const items = within(menu).getAllByRole('menuitem');
    const [programs, documents, settings] = items;
    const shutDown = items[items.length - 1];
    // submenus are hidden, so their menus aren't in the accessibility tree
    const submenu = (item: HTMLElement) =>
      within(item).getByRole('menu', { hidden: true });

    await expect(submenu(programs)).not.toBeVisible();
    await expect(submenu(settings)).not.toBeVisible();

    // the items that open a submenu say so
    await expect(programs).toHaveAttribute('aria-haspopup', 'menu');
    await expect(programs).toHaveAttribute('aria-expanded', 'false');
    await expect(documents).not.toHaveAttribute('aria-haspopup');

    // the whole menu is a single tab stop, on its first item
    await userEvent.tab();
    await expect(programs).toHaveFocus();
    await expect(items.filter(item => item.tabIndex === 0)).toEqual([programs]);

    // ↑/↓ move between the items, wrapping around; Home/End jump to the ends
    await userEvent.keyboard('{ArrowDown}');
    await expect(documents).toHaveFocus();
    await userEvent.keyboard('{ArrowUp}{ArrowUp}');
    await expect(shutDown).toHaveFocus();
    await userEvent.keyboard('{Home}');
    await expect(programs).toHaveFocus();
    await userEvent.keyboard('{End}');
    await expect(shutDown).toHaveFocus();
    await userEvent.keyboard('{Home}');

    // → opens the submenu and moves into it
    await userEvent.keyboard('{ArrowRight}');
    await expect(programs).toHaveAttribute('aria-expanded', 'true');
    await expect(submenu(programs)).toBeVisible();

    const programItems = within(submenu(programs)).getAllByRole('menuitem');
    await expect(programItems[0]).toHaveFocus();

    // the submenu's items are reached with the arrows, not with Tab
    await expect(programItems.every(item => item.tabIndex === -1)).toBe(true);
    await userEvent.keyboard('{ArrowUp}');
    await expect(programItems[programItems.length - 1]).toHaveFocus();

    // ← closes it and goes back to its item
    await userEvent.keyboard('{ArrowLeft}');
    await expect(programs).toHaveFocus();
    await expect(programs).toHaveAttribute('aria-expanded', 'false');
    await expect(submenu(programs)).not.toBeVisible();

    // Enter opens it too, and Esc closes it
    await userEvent.keyboard('{Enter}');
    await expect(programItems[0]).toHaveFocus();
    await userEvent.keyboard('{Escape}');
    await expect(programs).toHaveFocus();
    await expect(submenu(programs)).not.toBeVisible();

    // the tab stop follows the focus, so Tab leaves the menu in one step
    await userEvent.keyboard('{ArrowDown}');
    await expect(items.filter(item => item.tabIndex === 0)).toEqual([
      documents,
    ]);
    await userEvent.tab();
    await expect(menu).not.toContainElement(
      document.activeElement as HTMLElement,
    );

    // hovering an item opens its submenu. That's CSS `:hover`, which only a
    // real pointer triggers (see .storybook/pointer.ts)
    await hover(programs, userEvent);

    if (isRealPointer) {
      await expect(submenu(programs)).toBeVisible();
      await expect(submenu(settings)).not.toBeVisible();
    }

    // moving to another item closes the first submenu and opens its own
    await hover(settings, userEvent);

    if (isRealPointer) {
      await expect(submenu(programs)).not.toBeVisible();
      await expect(submenu(settings)).toBeVisible();
    }
  },

  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/2cbigNitjcruBDZT12ixIq/React95-Design-Kit?node-id=3%3A11',
    },
  },
};

export const Simple: Story = {
  render: args => (
    <List {...args}>
      <List.Item>View</List.Item>
      <List.Divider />
      <List.Item>Customize this Folder...</List.Item>
      <List.Divider />
      <List.Item>Arrange Icons</List.Item>
      <List.Item>Line Up Icons</List.Item>
      <List.Divider />
      <List.Item>Refresh</List.Item>
      <List.Divider />
      <List.Item>Paste</List.Item>
      <List.Item>Paste Shortcut</List.Item>
      <List.Item>Undo Copy</List.Item>
      <List.Divider />
      <List.Item>New</List.Item>
      <List.Divider />
      <List.Item>Properties</List.Item>
    </List>
  ),
  args: {
    onClick: fn(),
  },
  play: async ({ args, canvas, userEvent }) => {
    const menu = canvas.getByRole('menu');
    const entries = Array.from(menu.children).map(entry =>
      entry.getAttribute('role') === 'separator' ? '---' : entry.textContent,
    );

    // the items in order, with the dividers between the groups
    await expect(entries).toEqual([
      'View',
      '---',
      'Customize this Folder...',
      '---',
      'Arrange Icons',
      'Line Up Icons',
      '---',
      'Refresh',
      '---',
      'Paste',
      'Paste Shortcut',
      'Undo Copy',
      '---',
      'New',
      '---',
      'Properties',
    ]);

    // ↓ skips the dividers
    await userEvent.tab();
    await userEvent.keyboard('{ArrowDown}');
    await expect(
      canvas.getByRole('menuitem', { name: 'Customize this Folder...' }),
    ).toHaveFocus();

    // Enter and Space click the focused item, like the mouse does
    const onClick = args.onClick as unknown as ReturnType<typeof fn>;
    const clicked = () =>
      (onClick.mock.lastCall?.[0].target as HTMLElement).textContent;

    await userEvent.keyboard('{Enter}');
    await expect(onClick).toHaveBeenCalledTimes(1);
    await expect(clicked()).toBe('Customize this Folder...');
    await userEvent.keyboard('{ArrowDown} ');
    await expect(onClick).toHaveBeenCalledTimes(2);
    await expect(clicked()).toBe('Arrange Icons');
  },

  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/2cbigNitjcruBDZT12ixIq/React95-Design-Kit?node-id=3%3A11',
    },
  },
};

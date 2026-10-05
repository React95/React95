import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect, within } from 'storybook/test';

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
    const menu = canvas.getByRole('list');
    const [programs, , settings] = within(menu).getAllByRole('listitem');
    // submenus are hidden, so their lists aren't in the accessibility tree
    const submenu = (item: HTMLElement) =>
      within(item).getByRole('list', { hidden: true });

    await expect(submenu(programs)).not.toBeVisible();
    await expect(submenu(settings)).not.toBeVisible();

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
  play: async ({ canvas }) => {
    const menu = canvas.getByRole('list');
    const items = within(menu).getAllByRole('listitem');

    // the items in order, with the dividers (empty items) between the groups
    await expect(items.map(item => item.textContent)).toEqual([
      'View',
      '',
      'Customize this Folder...',
      '',
      'Arrange Icons',
      'Line Up Icons',
      '',
      'Refresh',
      '',
      'Paste',
      'Paste Shortcut',
      'Undo Copy',
      '',
      'New',
      '',
      'Properties',
    ]);
  },

  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/2cbigNitjcruBDZT12ixIq/React95-Design-Kit?node-id=3%3A11',
    },
  },
};

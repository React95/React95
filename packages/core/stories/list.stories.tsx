import type { Meta } from '@storybook/react';
import * as React from 'react';

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
import List from '../components/List';

export default {
  title: 'List',
  component: List,
  subcomponents: { 'List.Item': List.Item, 'List.Divider': List.Divider },
} as Meta<typeof List>;

export const WithIcons = {
  render: () => (
    <List>
      <List.Item icon={<FolderExe2 variant="32x32_4" />}>
        <List>
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
        <List>
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

  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/2cbigNitjcruBDZT12ixIq/React95-Design-Kit?node-id=3%3A11',
    },
  },
};

export const Simple = {
  render: () => (
    <List>
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

  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/2cbigNitjcruBDZT12ixIq/React95-Design-Kit?node-id=3%3A11',
    },
  },
};

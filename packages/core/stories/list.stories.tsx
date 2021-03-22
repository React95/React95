import * as React from 'react';
import { Meta } from '@storybook/react/types-6-0';

import List from '../components/List';
import {
  IconComputer3,
  IconFileFind,
  IconFolderExe,
  IconFolderExe2,
  IconFolderFile,
  IconFolderPrint,
  IconFolderSettings,
  IconHelpBook,
  IconLoaderBat,
  IconMicrosoftExchange,
  IconMicrosoftNetwork,
  IconMsDos,
  IconSettings,
  IconWindowsExplorer,
} from '@react95/icons';

export default {
  title: 'List',
  component: List,
  subcomponents: { 'List.Item': List.Item, 'List.Divider': List.Divider },
} as Meta;

export const WithIcons = () => (
  <List>
    <List.Item icon={<IconFolderExe2 variant="32x32_4" />}>
      <List>
        <List.Item icon={<IconFolderExe variant="16x16_4" />}>
          Accessories
        </List.Item>
        <List.Item icon={<IconFolderExe variant="16x16_4" />}>
          StartUp
        </List.Item>
        <List.Item icon={<IconMicrosoftExchange variant="16x16_4" />}>
          Microsoft Exchange
        </List.Item>
        <List.Item icon={<IconMsDos variant="16x16_32" />}>
          MS-DOS Prompt
        </List.Item>
        <List.Item icon={<IconMicrosoftNetwork variant="16x16_4" />}>
          The Microsoft Network
        </List.Item>
        <List.Item icon={<IconWindowsExplorer variant="16x16_4" />}>
          Windows Explorer
        </List.Item>
      </List>
      Programs
    </List.Item>
    <List.Item icon={<IconFolderFile variant="32x32_4" />}>Documents</List.Item>
    <List.Item icon={<IconSettings variant="32x32_4" />}>
      <List>
        <List.Item icon={<IconFolderSettings variant="16x16_4" />}>
          Control Panel
        </List.Item>
        <List.Item icon={<IconFolderPrint variant="16x16_4" />}>
          Printers
        </List.Item>
      </List>
      Settings
    </List.Item>
    <List.Item icon={<IconFileFind variant="32x32_4" />}>Find</List.Item>
    <List.Item icon={<IconHelpBook variant="32x32_4" />}>Help</List.Item>
    <List.Item icon={<IconLoaderBat variant="32x32_4" />}>Run...</List.Item>
    <List.Divider />
    <List.Item icon={<IconComputer3 variant="32x32_4" />}>
      Shut Down...
    </List.Item>
  </List>
);

WithIcons.parameters = {
  design: {
    type: 'figma',
    url:
      'https://www.figma.com/file/2cbigNitjcruBDZT12ixIq/React95-Design-Kit?node-id=3%3A11',
  },
};

export const Simple = () => (
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
);

Simple.parameters = {
  design: {
    type: 'figma',
    url:
      'https://www.figma.com/file/2cbigNitjcruBDZT12ixIq/React95-Design-Kit?node-id=3%3A11',
  },
};

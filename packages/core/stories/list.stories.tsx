import * as React from 'react';
import { Meta } from '@storybook/react/types-6-0';

import List from '../components/List';

export default {
  title: 'List',
  component: List,
  subcomponents: { 'List.Item': List.Item, 'List.Divider': List.Divider },
} as Meta;

export const WithIcons = () => (
  <List>
    <List.Item icon="folder_exe2_32x32_4bit">
      <List>
        <List.Item icon="folder_exe_32x32_4bit">Accessories</List.Item>
        <List.Item icon="folder_exe_32x32_4bit">StartUp</List.Item>
        <List.Item icon="microsoft_exchange_32x32_4bit">
          Microsoft Exchange
        </List.Item>
        <List.Item icon="ms_dos_32x32_32bit">MS-DOS Prompt</List.Item>
        <List.Item icon="microsoft_network_32x32_4bit">
          The Microsoft Network
        </List.Item>
        <List.Item icon="windows_explorer_32x32_4bit">
          Windows Explorer
        </List.Item>
      </List>
      Programs
    </List.Item>
    <List.Item icon="folder_file_32x32_4bit">Documents</List.Item>
    <List.Item icon="settings_32x32_4bit">
      <List>
        <List.Item icon="folder_settings_32x32_4bit">Control Panel</List.Item>
        <List.Item icon="folder_print_32x32_4bit">Printers</List.Item>
      </List>
      Settings
    </List.Item>
    <List.Item icon="file_find_32x32_4bit">Find</List.Item>
    <List.Item icon="help_book_32x32_4bit">Help</List.Item>
    <List.Item icon="loader_bat_32x32_4bit">Run...</List.Item>
    <List.Divider />
    <List.Item icon="computer_3_32x32_4bit">Shut Down...</List.Item>
  </List>
);

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

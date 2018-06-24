import React from 'react';
import List from '../components/List';

import { storiesOf } from '@storybook/react';

storiesOf('List', module).add('default', () => (
  <React.Fragment>
    <List>
      <List.Item icon="folder_exe2">
        <List>
          <List.Item icon="folder_exe">Accessories</List.Item>
          <List.Item icon="folder_exe">StartUp</List.Item>
          <List.Item icon="microsoft_exchange">Microsoft Exchange</List.Item>
          <List.Item icon="ms_dos">MS-DOS Prompt</List.Item>
          <List.Item icon="microsoft_network">The Microsoft Network</List.Item>
          <List.Item icon="windows_explorer">Windows Explorer</List.Item>
        </List>
        Programs
      </List.Item>
      <List.Item icon="folder_file">Documents</List.Item>
      <List.Item icon="settings">
        <List>
          <List.Item icon="folder_settings">Control Panel</List.Item>
          <List.Item icon="folder_print">Printers</List.Item>
        </List>
        Settings
      </List.Item>
      <List.Item icon="file_find">Find</List.Item>
      <List.Item icon="help_book">Help</List.Item>
      <List.Item icon="loader_bat">Run...</List.Item>
      <List.Divider />
      <List.Item icon="computer_3">Shut Down...</List.Item>
    </List>

    <br />

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
  </React.Fragment>
));

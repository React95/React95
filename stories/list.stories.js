import React from 'react';
import List from '../components/List';

import { storiesOf } from '@storybook/react';

storiesOf('List', module).add('default', () => (
  <List>
    <List.Item icon="folder_exe2">Programs</List.Item>
    <List.Item icon="folder_file">Documents</List.Item>
    <List.Item icon="settings">Settings</List.Item>
    <List.Item icon="file_find">Find</List.Item>
    <List.Item icon="help_book">Help</List.Item>
    <List.Item icon="loader_bat">Run...</List.Item>
    <List.Divider />
    <List.Item icon="computer_3">Shut Down...</List.Item>
  </List>
));

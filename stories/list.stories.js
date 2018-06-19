import React from 'react';
import List from '../components/List';

import { storiesOf } from '@storybook/react';

storiesOf('List', module).add('default', () => (
  <List>
    <List.Item>
      <List.Icon name="folder_exe2" />
      Programs
    </List.Item>
    <List.Item>
      <List.Icon name="folder_file" />
      Documents
    </List.Item>
    <List.Item>
      <List.Icon name="settings" />
      Settings
    </List.Item>
    <List.Item>
      <List.Icon name="file_find" />
      Find
    </List.Item>
    <List.Item>
      <List.Icon name="help_book" />
      Help
    </List.Item>
    <List.Item>
      <List.Icon name="loader_bat" />
      Run...
    </List.Item>
    <List.Divider />
    <List.Item>
      <List.Icon name="computer_3" />Shut Down...
    </List.Item>
  </List>
));

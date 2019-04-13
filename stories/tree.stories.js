import React from 'react';
import { storiesOf } from '@storybook/react';
import withClippy from '../.storybook/src/clippy-addon/clippy-addon';
import Tree from '../components/Tree';

const { icons } = Tree;

const data = [{
  id: 0,
  label: 'Applications',
  children: [{
    id: 1,
    label: 'virus.exe',
    iconName: icons.FILE_EXECUTABLE
  }],
}, {
  id: 2,
  label: 'Music',
  children: [{
    id: 3,
    label: 'Indie',
    children: [{
      id: 3,
      label: 'Weezer',
      iconName: icons.FILE_MEDIA,
      onClick: () => alert('nice!')
    }, {
      id: 4,
      label: 'Supergrass',
      iconName: icons.FILE_MEDIA
    }]
  }]
}, {
  id: 3,
  label: 'Other',
  children: [{
    id: 0,
    label: 'Fira Code.ttf',
    iconName: icons.FILE_FONT
  }, {
    id: 1,
    label: 'Journal.txt',
    iconName: icons.FILE_TEXT
  }]
}, {
  id: 3,
  label: 'config.cfg',
  iconName: icons.FILE_SETTINGS
}, {
  id: 4,
  label: 'random_file',
  iconName: icons.FILE_UNKNOWN
}];

const code = `
import { Tree } from '@react95/core';

const { icons } = Tree;

const data = [{
  id: 0,
  label: 'Applications',
  children: [{
    id: 1,
    label: 'virus.exe',
    iconName: icons.FILE_EXECUTABLE
  }],
}, {
  id: 2,
  label: 'Music',
  children: [{
    id: 3,
    label: 'Indie',
    children: [{
      id: 3,
      label: 'Weezer',
      iconName: icons.FILE_MEDIA,
      onClick: () => alert('nice!')
    }, {
      id: 4,
      label: 'Supergrass',
      iconName: icons.FILE_MEDIA
    }]
  }]
}, {
  id: 3,
  label: 'Other',
  children: [{
    id: 0,
    label: 'Fira Code.ttf',
    iconName: icons.FILE_FONT
  }, {
    id: 1,
    label: 'Journal.txt',
    iconName: icons.FILE_TEXT
  }]
}, {
  id: 3,
  label: 'config.cfg',
  iconName: icons.FILE_SETTINGS
}, {
  id: 4,
  label: 'random_file',
  iconName: icons.FILE_UNKNOWN
}];

const App = () => (
  <Tree data={data} />
);`;

storiesOf('Tree', module)
  .addDecorator(withClippy)
  .addParameters({ code })
  .add('default', () => <Tree data={data} />);

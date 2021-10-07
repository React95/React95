import * as React from 'react';
import { Meta } from '@storybook/react/types-6-0';
import { withDesign } from 'storybook-addon-designs';

import DropdownCustom from '../components/DropdownCustom';
import { DropdownCustomOption } from '../components/DropdownCustom/DropdownCustom';

export default {
  title: 'DropdownCustom',
  component: DropdownCustom,
  decorators: [withDesign],
} as Meta;

const options: DropdownCustomOption[] = [
  'C:\\Documents and Settings',
  'C:\\Documents and Settings\\Documents',
  'iexplorer.exe',
  'Solitaire',
  'FreeCell',
  'Spider Solitaire',
  'Hearts',
  'Minesweeper',
  'Microsoft Word',
  'Microsoft Excel',
  'Microsoft PowerPoint',
  'Microsoft Access',
  {
    value: 'Space Pinball',
    onClick: (value, index) =>
      console.log(`Option clicked: index ${index}, value ${value}`),
  },
];

export const Simple = () => (
  <DropdownCustom
    options={options}
    maxHeight="200px"
    onChange={(value, index) => {
      console.log(`Value changed: index ${index}, value ${value}`);
    }}
  />
);

Simple.parameters = {
  design: {
    type: 'figma',
    url:
      'https://www.figma.com/file/2cbigNitjcruBDZT12ixIq/React95-Design-Kit?node-id=3%3A6',
  },
};

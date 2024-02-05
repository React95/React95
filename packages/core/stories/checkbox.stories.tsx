import type { Meta } from '@storybook/react';
import * as React from 'react';

import Checkbox from '../components/Checkbox';
import { Frame } from '../components/Frame/Frame';

export default {
  title: 'Checkbox',
  component: Checkbox,
  tags: ['autodocs'],
} as Meta<typeof Checkbox>;

export const All = {
  render: () => {
    const [checked, toggleChecked] = React.useState(true);

    return (
      <Frame display="flex" flexDirection="column">
        <Checkbox
          checked={checked}
          onChange={() => {
            toggleChecked(!checked);
          }}
        >
          Working
        </Checkbox>

        <Checkbox checked>Checked</Checkbox>
        <Checkbox checked={false}>Unchecked</Checkbox>
        <Checkbox disabled>Disabled</Checkbox>

        <Checkbox disabled checked>
          Checked and Disabled
        </Checkbox>
      </Frame>
    );
  },

  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/2cbigNitjcruBDZT12ixIq/React95-Design-Kit?node-id=3%3A4',
    },
  },
};

export const Checked = {
  render: () => <Checkbox checked>Checked</Checkbox>,

  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/2cbigNitjcruBDZT12ixIq/React95-Design-Kit?node-id=3%3A4',
    },
  },
};

export const Unchecked = {
  render: () => <Checkbox checked={false}>Unchecked</Checkbox>,

  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/2cbigNitjcruBDZT12ixIq/React95-Design-Kit?node-id=3%3A4',
    },
  },
};

export const Disabled = {
  render: () => <Checkbox disabled>Disabled</Checkbox>,

  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/2cbigNitjcruBDZT12ixIq/React95-Design-Kit?node-id=3%3A4',
    },
  },
};

export const CheckedAndDisabled = {
  render: () => (
    <Checkbox disabled checked>
      Checked and Disabled
    </Checkbox>
  ),

  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/2cbigNitjcruBDZT12ixIq/React95-Design-Kit?node-id=3%3A4',
    },
  },
};

export const Working = {
  render: () => {
    const [checked, toggleChecked] = React.useState(true);

    return (
      <Checkbox checked={checked} onChange={() => toggleChecked(!checked)}>
        Working
      </Checkbox>
    );
  },

  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/2cbigNitjcruBDZT12ixIq/React95-Design-Kit?node-id=3%3A4',
    },
  },
};

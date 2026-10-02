import type { Meta, StoryObj } from '@storybook/react-vite';
import * as React from 'react';

import { Alert, AlertProps } from '../components/Alert/Alert';
import { Button, TitleBar } from '../components';

const meta = {
  title: 'Alert',
  component: Alert,
  tags: ['autodocs'],
  args: {
    title: 'Windows Networking',
    type: 'error',
    message: 'The Windows password you typed is incorrect.',
    hasSound: false,
    // Alert centers its buttons, unlike Modal
    buttonsAlignment: 'center',
  },
  argTypes: {
    // inferred as `any`, as the title comes from the polymorphic TitleBar
    title: { control: 'text' },
    buttonsAlignment: {
      control: 'select',
      options: ['flex-start', 'center', 'flex-end', 'space-between'],
    },
  },
} as Meta<typeof Alert>;

export default meta;

type Story = StoryObj<typeof meta>;

const SimpleDemo = (props: AlertProps) => {
  const [showAlert, toggleShowAlert] = React.useState(true);

  const handleOpenAlert = () => toggleShowAlert(true);
  const handleCloseAlert = () => toggleShowAlert(false);

  return (
    <>
      <Button onClick={handleOpenAlert}>Trigger Alert</Button>
      {showAlert && (
        <Alert
          {...props}
          titleBarOptions={
            <TitleBar.Close key="close" onClick={handleCloseAlert} />
          }
          buttons={[{ value: 'OK', onClick: handleCloseAlert }]}
        />
      )}
    </>
  );
};

export const Simple: Story = {
  args: {
    hasWindowButton: false,
  },

  render: args => <SimpleDemo {...args} />,

  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/2cbigNitjcruBDZT12ixIq/React95-Design-Kit?node-id=0%3A1',
    },
  },
};

import type { Meta, StoryObj } from '@storybook/react-vite';
import * as React from 'react';
import { expect, within } from 'storybook/test';

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
  play: async ({ args, canvas, userEvent }) => {
    // the alert starts open, with its title and message
    const alert = canvas.getByRole('dialog');

    await expect(alert).toHaveTextContent(args.title as string);
    await expect(alert).toHaveTextContent(args.message);

    // OK closes it (the story keeps it open or closed)
    await userEvent.click(within(alert).getByRole('button', { name: 'OK' }));

    await expect(canvas.queryAllByRole('dialog')).toHaveLength(0);

    await userEvent.click(
      canvas.getByRole('button', { name: 'Trigger Alert' }),
    );

    // and so does the title bar's close option
    await userEvent.click(
      within(canvas.getByRole('dialog')).getByRole('button', { name: 'close' }),
    );

    await expect(canvas.queryAllByRole('dialog')).toHaveLength(0);
  },

  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/2cbigNitjcruBDZT12ixIq/React95-Design-Kit?node-id=0%3A1',
    },
  },
};

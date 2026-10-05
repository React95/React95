import type { Meta, StoryObj } from '@storybook/react-vite';
import * as React from 'react';
import { expect, spyOn, within } from 'storybook/test';

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

// what assistive technologies call each type's icon
const iconNames = {
  error: 'Error',
  info: 'Information',
  question: 'Question',
  warning: 'Warning',
};

const SimpleDemo = ({
  defaultOpen = true,
  ...props
}: AlertProps & { defaultOpen?: boolean }) => {
  const [showAlert, toggleShowAlert] = React.useState(defaultOpen);

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
    // the alert starts open, with its title, message and the icon of its type
    const alert = canvas.getByRole('dialog');

    await expect(alert).toHaveTextContent(args.title as string);
    await expect(alert).toHaveTextContent(args.message);
    await expect(
      within(alert).getByRole('img', { name: iconNames[args.type!] }),
    ).toBeVisible();

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

export const Warning: Story = {
  ...Simple,
  args: {
    ...Simple.args,
    type: 'warning',
    title: 'Recycle Bin',
    message: 'Are you sure you want to delete these 3 items?',
  },
};

export const Info: Story = {
  ...Simple,
  args: {
    ...Simple.args,
    type: 'info',
    title: 'Disk Defragmenter',
    message: 'Defragmentation of drive C is complete.',
  },
};

export const Question: Story = {
  ...Simple,
  args: {
    ...Simple.args,
    type: 'question',
    title: 'Notepad',
    message: 'The text in the Untitled file has changed. Save the changes?',
  },
};

// browsers only play sound after a real click on the page, so this alert
// starts closed: click "Trigger Alert" to hear it
export const WithSound: Story = {
  args: {
    ...Simple.args,
    hasSound: true,
  },
  render: args => <SimpleDemo {...args} defaultOpen={false} />,
  // watches the chord without silencing it
  beforeEach: () => {
    const play = spyOn(HTMLMediaElement.prototype, 'play').mockName(
      'audio.play',
    );

    return () => play.mockRestore();
  },
  play: async ({ canvas, userEvent }) => {
    await expect(HTMLMediaElement.prototype.play).not.toHaveBeenCalled();

    // opening the alert plays the chord
    await userEvent.click(
      canvas.getByRole('button', { name: 'Trigger Alert' }),
    );

    await expect(HTMLMediaElement.prototype.play).toHaveBeenCalledOnce();

    // closed again, ready for a real click
    await userEvent.click(
      within(canvas.getByRole('dialog')).getByRole('button', { name: 'OK' }),
    );
  },
  parameters: {
    clippy: {
      phrases: ['Click "Trigger Alert" to hear the Windows chord!'],
    },
  },
};

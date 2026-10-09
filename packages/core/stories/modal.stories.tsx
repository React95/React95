import type { Meta, StoryObj } from '@storybook/react-vite';
import * as React from 'react';
import { expect, spyOn, within } from 'storybook/test';

import {
  Button,
  List,
  TitleBar,
  TaskBar,
  Frame,
  useModal,
} from '../components';
import { Modal, ModalProps } from '../components/Modal/Modal';

import * as styles from './modal.stories.css';
import { contract } from '../components/themes/contract.css';
import { themeColor } from '../.storybook/theme-color';

import {
  Computer,
  Mmsys113,
  Mshtml32534,
  ReaderClosed,
  WindowsExplorer,
} from '@react95/icons';

const meta = {
  title: 'Modal',
  component: Modal,
  tags: ['autodocs'],
  args: {
    title: 'Browse',
    hasWindowButton: true,
    buttonsAlignment: 'flex-end',
  },
  argTypes: {
    // inferred as `any`, as the title comes from the polymorphic TitleBar
    title: { control: 'text' },
    buttonsAlignment: {
      control: 'select',
      options: ['flex-start', 'center', 'flex-end', 'space-between'],
    },
  },
} satisfies Meta<typeof Modal>;

export default meta;

type Story = StoryObj<typeof meta>;

const SimpleDemo = (props: ModalProps) => {
  const [showModal, toggleShowModal] = React.useState(true);

  const handleOpenModal = () => toggleShowModal(true);
  const handleCloseModal = () => toggleShowModal(false);

  return (
    <>
      <Button onClick={handleOpenModal}>Trigger Modal</Button>
      {showModal && (
        <Modal
          {...props}
          icon={<Computer variant="16x16_4" />}
          dragOptions={{
            defaultPosition: {
              x: 0,
              y: 20,
            },
          }}
          titleBarOptions={[
            <TitleBar.Help key="help" onClick={() => console.log('Help')} />,
            <TitleBar.Close key="close" onClick={handleCloseModal} />,
          ]}
          buttons={[
            { value: 'Ok', onClick: () => console.log('Ok') },
            { value: 'Cancel', onClick: () => console.log('Cancel') },
          ]}
          menu={[
            {
              name: 'File',
              list: (
                <List width="200px">
                  <List.Item onClick={handleCloseModal}>Exit</List.Item>
                </List>
              ),
            },
            {
              name: 'Edit',
              list: (
                <List width="200px">
                  <List.Item>Copy</List.Item>
                </List>
              ),
            },
          ]}
        >
          <Modal.Content
            width="300px"
            height="160px"
            boxShadow="$in"
            bgColor="white"
          >
            Simple modal
          </Modal.Content>
        </Modal>
      )}
    </>
  );
};

export const Simple: Story = {
  render: args => <SimpleDemo {...args} />,
  // the demo's buttons log what was clicked; the spy still prints it
  beforeEach: () => {
    const log = spyOn(console, 'log').mockName('console.log');

    return () => log.mockRestore();
  },
  play: async ({ args, canvas, userEvent }) => {
    const modal = canvas.getByRole('dialog');

    // the modal starts open, with its title and content
    await expect(modal).toHaveTextContent(args.title as string);
    await expect(modal).toHaveTextContent('Simple modal');

    // its buttons and title bar options call their onClick
    await userEvent.click(within(modal).getByRole('button', { name: 'Ok' }));

    await expect(console.log).toHaveBeenLastCalledWith('Ok');

    await userEvent.click(
      within(modal).getByRole('button', { name: 'Cancel' }),
    );

    await expect(console.log).toHaveBeenLastCalledWith('Cancel');

    await userEvent.click(within(modal).getByRole('button', { name: 'help' }));

    await expect(console.log).toHaveBeenLastCalledWith('Help');

    // a menu opens its list when pressed, one menu at a time
    await expect(modal).not.toHaveTextContent('Exit');

    await userEvent.click(within(modal).getByText('File'));

    await expect(modal).toHaveTextContent('Exit');

    await userEvent.click(within(modal).getByText('Edit'));

    await expect(modal).toHaveTextContent('Copy');
    await expect(modal).not.toHaveTextContent('Exit');

    // and closes it when the press is outside the menu
    await userEvent.click(within(modal).getByText('Simple modal'));

    await expect(modal).not.toHaveTextContent('Copy');

    // the menu's Exit closes the modal, and so does the title bar's close
    await userEvent.click(within(modal).getByText('File'));
    await userEvent.click(within(modal).getByText('Exit'));

    await expect(canvas.queryAllByRole('dialog')).toHaveLength(0);

    await userEvent.click(
      canvas.getByRole('button', { name: 'Trigger Modal' }),
    );
    await userEvent.click(
      within(canvas.getByRole('dialog')).getByRole('button', { name: 'close' }),
    );

    await expect(canvas.queryAllByRole('dialog')).toHaveLength(0);
  },

  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/2cbigNitjcruBDZT12ixIq/React95-Design-Kit?node-id=3%3A12',
    },
  },
};

const MODAL_IDS = {
  first: 'first-modal',
  second: 'second-modal',
};

const MultipleDemo = () => {
  const { remove, minimize, restore, focus, add } = useModal();

  const handleCloseFirstModal = () => {
    minimize(MODAL_IDS.first);
    remove(MODAL_IDS.first);
  };
  const handleCloseSecondModal = () => {
    minimize(MODAL_IDS.second);
    remove(MODAL_IDS.second);
  };

  // Handlers for first modal
  const handleMinimizeFirst = () => {
    minimize(MODAL_IDS.first);
    focus('no-id');
  };
  const handleRestoreFirst = () => {
    add({
      id: MODAL_IDS.first,
      title: 'First Modal',
      icon: <Mmsys113 variant="32x32_4" />,
      hasButton: true,
    });
    restore(MODAL_IDS.first);
    focus(MODAL_IDS.first);
  };
  const handleFocusFirst = () => focus(MODAL_IDS.first);

  // Handlers for second modal
  const handleMinimizeSecond = () => {
    minimize(MODAL_IDS.second);
    focus('no-id');
  };
  const handleRestoreSecondModal = () => {
    add({
      id: MODAL_IDS.second,
      title: 'Second Modal',
      icon: <Mshtml32534 variant="32x32_4" />,
      hasButton: true,
    });
    restore(MODAL_IDS.second);
    focus(MODAL_IDS.second);
  };
  const handleFocusSecond = () => focus(MODAL_IDS.second);

  return (
    <Frame>
      <TaskBar />

      <Frame display="flex" flexDirection="column" gap="8px">
        <Frame display="flex" gap="8px" flexWrap="wrap">
          <Button onClick={handleMinimizeFirst}>Minimize First</Button>
          <Button onClick={handleRestoreFirst}>Restore First</Button>
          <Button onClick={handleCloseFirstModal}>Close First</Button>
          <Button onClick={handleFocusFirst}>Focus First</Button>
        </Frame>
        <Frame display="flex" gap="8px" flexWrap="wrap">
          <Button onClick={handleMinimizeSecond}>Minimize Second</Button>
          <Button onClick={handleRestoreSecondModal}>Restore Second</Button>
          <Button onClick={handleCloseSecondModal}>Close Second</Button>
          <Button onClick={handleFocusSecond}>Focus Second</Button>
        </Frame>
      </Frame>

      <Modal
        id="first-modal"
        icon={<Mmsys113 variant="32x32_4" />}
        title="First Modal"
        dragOptions={{
          defaultPosition: {
            x: 50,
            y: 100,
          },
        }}
        titleBarOptions={<Modal.Minimize />}
        buttons={[
          { value: 'Ok', onClick: () => console.log('Ok') },
          { value: 'Cancel', onClick: () => console.log('Cancel') },
        ]}
        menu={[
          {
            name: 'File',
            list: (
              <List width="200px">
                <List.Item onClick={handleCloseFirstModal}>Exit</List.Item>
              </List>
            ),
          },
          {
            name: 'Edit',
            list: (
              <List width="200px">
                <List.Item>Copy</List.Item>
              </List>
            ),
          },
        ]}
      >
        <Modal.Content width="350px" boxShadow="$in" bgColor="white" p="16px">
          <Frame as="div" display="flex" flexDirection="column" gap="8px">
            <h4>Modal Control</h4>
            <p>
              This modal is controlled entirely using the{' '}
              <code>useModal()</code> hook:
            </p>
            <ul style={{ fontSize: '14px', margin: '8px 0' }}>
              <li>
                <code>minimize(id)</code> - Minimize modal
              </li>
              <li>
                <code>restore(id)</code> - Restore modal
              </li>
              <li>
                <code>focus(id)</code> - Bring to focus
              </li>
            </ul>
            <p>Try the control buttons above or use the TaskBar below.</p>
          </Frame>
        </Modal.Content>
      </Modal>

      <Modal
        id="second-modal"
        icon={<Mshtml32534 variant="32x32_4" />}
        title="Second Modal"
        dragOptions={{
          defaultPosition: {
            x: 200,
            y: 150,
          },
        }}
        titleBarOptions={<TitleBar.Close onClick={handleCloseSecondModal} />}
        buttons={[
          { value: 'Ok', onClick: () => console.log('Ok') },
          { value: 'Cancel', onClick: () => console.log('Cancel') },
        ]}
        menu={[
          {
            name: 'File',
            list: (
              <List width="200px">
                <List.Item onClick={handleCloseSecondModal}>Exit</List.Item>
              </List>
            ),
          },
          {
            name: 'Edit',
            list: (
              <List width="200px">
                <List.Item>Copy</List.Item>
              </List>
            ),
          },
        ]}
      >
        <Modal.Content width="350px" boxShadow="$in" bgColor="white" p="16px">
          <Frame as="div" display="flex" flexDirection="column" gap="8px">
            <h4>Complete Modal Management</h4>
            <p>Key features demonstrated:</p>
            <Frame as="ul" marginY="$8">
              <li>No React state management needed</li>
              <li>Modals controlled by ID</li>
              <li>Automatic TaskBar integration</li>
              <li>Event-driven architecture</li>
            </Frame>
            <p>Both modals can be controlled independently using their IDs.</p>
          </Frame>
        </Modal.Content>
      </Modal>
    </Frame>
  );
};

// the active modal is marked as the current one, and its title bar shows it
const expectActive = async (modal: HTMLElement, active: boolean) => {
  if (active) {
    await expect(modal).toHaveAttribute('aria-current', 'true');
  } else {
    await expect(modal).not.toHaveAttribute('aria-current');
  }

  await expect(modal.querySelector('.draggable')).toHaveStyle({
    backgroundColor: themeColor(
      active
        ? contract.colors.headerBackground
        : contract.colors.headerNotActiveBackground,
    ),
  });
};

export const Multiple: Story = {
  render: () => <MultipleDemo />,
  play: async ({ canvas, userEvent }) => {
    const [first, second] = canvas.getAllByRole('dialog');
    const taskBarButton = (title: string) =>
      canvas.getByRole('button', { name: title });

    // each modal gets a TaskBar button, and the last one to open is active
    await expect(taskBarButton('First Modal')).toBeVisible();
    await expect(taskBarButton('Second Modal')).toBeVisible();
    await expectActive(first, false);
    await expectActive(second, true);

    // clicking a modal makes it the active one
    await userEvent.click(within(first).getByText('Modal Control'));

    await expectActive(first, true);
    await expectActive(second, false);

    // minimizing hides it, and its TaskBar button brings it back, active
    await userEvent.click(
      within(first).getByRole('button', { name: 'minimize' }),
    );

    await expect(first).not.toBeVisible();

    await userEvent.click(taskBarButton('First Modal'));

    await expect(first).toBeVisible();
    await expectActive(first, true);

    // closing the active modal removes its TaskBar button, and the last one
    // left becomes active
    await userEvent.click(
      within(second).getByText('Complete Modal Management'),
    );

    await expectActive(second, true);

    await userEvent.click(
      within(second).getByRole('button', { name: 'close' }),
    );

    await expect(second).not.toBeVisible();
    await expect(
      canvas.queryAllByRole('button', { name: 'Second Modal' }),
    ).toHaveLength(0);
    await expectActive(first, true);

    // the active modal's TaskBar button minimizes it
    await userEvent.click(taskBarButton('First Modal'));

    await expect(first).not.toBeVisible();
  },
  parameters: {
    // a demo of several modals at once; the controls are on Simple
    controls: { disable: true },
  },
};

const MinimizeDemo = () => {
  const [first, toggleFirst] = React.useState(true);
  const [second, toggleSecond] = React.useState(true);

  const closeFirst = () => toggleFirst(false);
  const closeSecond = () => toggleSecond(false);

  return (
    <>
      <TaskBar
        list={
          <List>
            <List.Item
              icon={<ReaderClosed variant="32x32_4" />}
              onClick={() => toggleSecond(true)}
            >
              Local Disk (C:)
            </List.Item>
            <List.Item
              icon={<WindowsExplorer variant="32x32_4" />}
              onClick={() => {
                toggleFirst(true);
              }}
            >
              Windows Explorer
            </List.Item>
          </List>
        }
      />

      {first && (
        <Modal
          icon={<WindowsExplorer variant="16x16_4" />}
          title="Windows Explorer"
          titleBarOptions={[
            <TitleBar.Minimize
              key="minimize"
              onClick={() => console.log("I'm in control")}
            />,
            <TitleBar.Close key="close" onClick={closeFirst} />,
          ]}
          width="300px"
          height="220px"
        >
          <Modal.Content boxShadow="$in" bgColor="white">
            <Frame as="p" lineHeight="1.1rem">
              You can still use the{' '}
              <code className={styles.code}>{'<TitleBar.Minimize />'}</code>{' '}
              component if you want to add the behavior yourself by handling the
              click event and updating the state or props of your component
              accordingly.
            </Frame>
          </Modal.Content>
        </Modal>
      )}

      {second && (
        <Modal
          dragOptions={{
            defaultPosition: { x: 120, y: 120 },
          }}
          width="300px"
          height="220px"
          icon={<ReaderClosed variant="16x16_4" />}
          title="Local Disk (C:)"
          titleBarOptions={[
            <Modal.Minimize key="minimize" />,
            <TitleBar.Close key="close" onClick={closeSecond} />,
          ]}
        >
          <Modal.Content boxShadow="$in" bgColor="white">
            <Frame as="p" lineHeight="1.1rem">
              The <code className={styles.code}>Modal.Minimize</code> component
              is a utility component provided by the{' '}
              <code className={styles.code}>Modal</code> component. It allows
              you to easily add minimize functionality to your modal. To use it,
              simply add{' '}
              <code className={styles.code}>{'<Modal.Minimize />'}</code> to the{' '}
              <code className={styles.code}>titleBarOptions</code> prop of the{' '}
              <code className={styles.code}>Modal</code> component. This will
              add the minimize button to the title bar of your modal, and
              clicking on it will minimize the modal.
            </Frame>
          </Modal.Content>
        </Modal>
      )}
    </>
  );
};

export const Minimize: Story = {
  render: () => <MinimizeDemo />,
  // the custom minimize logs; the spy still prints it
  beforeEach: () => {
    const log = spyOn(console, 'log').mockName('console.log');

    return () => log.mockRestore();
  },
  play: async ({ canvas, userEvent }) => {
    const [explorer, disk] = canvas.getAllByRole('dialog');
    const taskBarButtons = (title: string) =>
      canvas.queryAllByRole('button', { name: title });

    // Modal.Minimize minimizes the modal to its TaskBar button
    await userEvent.click(
      within(disk).getByRole('button', { name: 'minimize' }),
    );

    await expect(disk).not.toBeVisible();

    await userEvent.click(
      canvas.getByRole('button', { name: 'Local Disk (C:)' }),
    );

    await expect(disk).toBeVisible();

    // TitleBar.Minimize only calls its own onClick
    await userEvent.click(
      within(explorer).getByRole('button', { name: 'minimize' }),
    );

    await expect(console.log).toHaveBeenLastCalledWith("I'm in control");
    await expect(explorer).toBeVisible();

    // closing removes the modal, and its TaskBar button with it
    await userEvent.click(
      within(explorer).getByRole('button', { name: 'close' }),
    );

    await expect(explorer).not.toBeInTheDocument();
    await expect(taskBarButtons('Windows Explorer')).toHaveLength(0);

    // the Start menu opens it again
    await userEvent.click(canvas.getByRole('button', { name: 'Start' }));
    await userEvent.click(canvas.getByText('Windows Explorer'));

    await expect(canvas.getAllByRole('dialog')).toHaveLength(2);
    await expect(taskBarButtons('Windows Explorer')).toHaveLength(1);
  },

  parameters: {
    // a demo of minimizing to the TaskBar; the controls are on Simple
    controls: { disable: true },
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/2cbigNitjcruBDZT12ixIq/React95-Design-Kit?node-id=3%3A17',
    },
  },
};

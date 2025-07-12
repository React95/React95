import type { Meta } from '@storybook/react';
import * as React from 'react';

import {
  Button,
  List,
  TitleBar,
  TaskBar,
  Frame,
  useModal,
} from '../components';
import { Modal } from '../components/Modal/Modal';

import * as styles from './modal.stories.css';

import {
  Computer,
  Mmsys113,
  Mshtml32534,
  ReaderClosed,
  WindowsExplorer,
} from '@react95/icons';

export default {
  title: 'Modal',
  component: Modal,
  tags: ['autodocs'],
} as Meta<typeof Modal>;

export const Simple = {
  render: () => {
    const [showModal, toggleShowModal] = React.useState(true);

    const handleOpenModal = () => toggleShowModal(true);
    const handleCloseModal = () => toggleShowModal(false);
    const handleButtonClick = (e: React.MouseEvent<HTMLLIElement>) =>
      alert(e.currentTarget.value);

    return (
      <>
        <Button onClick={handleOpenModal}>Trigger Modal</Button>
        {showModal && (
          <Modal
            icon={<Computer variant="16x16_4" />}
            title="Browse"
            dragOptions={{
              defaultPosition: {
                x: 0,
                y: 20,
              },
            }}
            titleBarOptions={[
              <TitleBar.Help
                key="help"
                onClick={() => {
                  alert('Help!');
                }}
              />,
              <TitleBar.Close key="close" onClick={handleCloseModal} />,
            ]}
            buttons={[
              { value: 'Ok', onClick: handleButtonClick },
              { value: 'Cancel', onClick: handleButtonClick },
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
  },

  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/2cbigNitjcruBDZT12ixIq/React95-Design-Kit?node-id=3%3A12',
    },
  },
};

const MODAL_IDS = {
  first: 'first-modal',
  second: 'second-modal',
};

export const Multiple = () => {
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

  const handleButtonClick = (e: React.MouseEvent<HTMLLIElement>) =>
    alert(e.currentTarget.value);

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
          { value: 'Ok', onClick: handleButtonClick },
          { value: 'Cancel', onClick: handleButtonClick },
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
            <Frame as="p" fontSize="$12">
              Try the control buttons above or use the TaskBar below.
            </Frame>
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
          { value: 'Ok', onClick: handleButtonClick },
          { value: 'Cancel', onClick: handleButtonClick },
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
            <Frame as="ul" fontSize="$14" marginY="$8">
              <li>No React state management needed</li>
              <li>Modals controlled by ID</li>
              <li>Automatic TaskBar integration</li>
              <li>Event-driven architecture</li>
            </Frame>
            <Frame as="p" fontSize="$12">
              Both modals can be controlled independently using their IDs.
            </Frame>
          </Frame>
        </Modal.Content>
      </Modal>
    </Frame>
  );
};

export const Minimize = {
  render: () => {
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
                onClick={() => {
                  alert("I'm in control");
                }}
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
                component if you want to add the behavior yourself by handling
                the click event and updating the state or props of your
                component accordingly.
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
                The <code className={styles.code}>Modal.Minimize</code>{' '}
                component is a utility component provided by the{' '}
                <code className={styles.code}>Modal</code> component. It allows
                you to easily add minimize functionality to your modal. To use
                it, simply add{' '}
                <code className={styles.code}>{'<Modal.Minimize />'}</code> to
                the <code className={styles.code}>titleBarOptions</code> prop of
                the <code className={styles.code}>Modal</code> component. This
                will add the minimize button to the title bar of your modal, and
                clicking on it will minimize the modal.
              </Frame>
            </Modal.Content>
          </Modal>
        )}
      </>
    );
  },

  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/2cbigNitjcruBDZT12ixIq/React95-Design-Kit?node-id=3%3A17',
    },
  },
};

import type { Meta } from '@storybook/react';
import * as React from 'react';

import { Button, List, TitleBar, TaskBar, Frame } from '../components';
import { Modal } from '../components/Modal/Modal';

import * as styles from './modal.stories.css';

import {
  Computer,
  Mmsys113,
  Mshtml32534,
  ReaderClosed,
  WindowsExplorer,
} from '@react95/icons';
import { position } from '@neodrag/react';

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
            dragPlugins={[position({ default: { x: 0, y: 20 } })]}
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

export const Multiple = () => {
  const [showFirstModal, toggleShowFirstModal] = React.useState(false);
  const [showSecondModal, toggleShowSecondModal] = React.useState(false);

  const handleOpenBothModals = () => {
    toggleShowFirstModal(true);
    toggleShowSecondModal(true);
  };
  const handleOpenFirstModal = () => toggleShowFirstModal(true);
  const handleOpenSecondModal = () => toggleShowSecondModal(true);
  const handleCloseFirstModal = () => toggleShowFirstModal(false);
  const handleCloseSecondModal = () => toggleShowSecondModal(false);
  const handleButtonClick = (e: React.MouseEvent<HTMLLIElement>) =>
    alert(e.currentTarget.value);

  return (
    <>
      <Button onClick={handleOpenBothModals}>Trigger Both</Button>
      <Button onClick={handleOpenFirstModal}>Trigger 1st</Button>
      <Button onClick={handleOpenSecondModal}>Trigger 2nd</Button>
      {showFirstModal && (
        <Modal
          icon={<Mmsys113 variant="32x32_4" />}
          title="First Modal"
          dragPlugins={[position({ default: { x: 0, y: 20 } })]}
          titleBarOptions={<TitleBar.Close onClick={handleCloseFirstModal} />}
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
          <Modal.Content
            width="300px"
            height="160px"
            boxShadow="$in"
            bgColor="white"
          >
            <p>
              The active modal will be based on the order they render, most
              recently rendered will be the active component. On click of a
              non-active modal will fire an action to set that modal as the
              active one.
            </p>
          </Modal.Content>
        </Modal>
      )}
      {showSecondModal && (
        <Modal
          icon={<Mshtml32534 variant="32x32_4" />}
          title="Second Modal"
          dragPlugins={[position({ default: { x: 250, y: 100 } })]}
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
          <Modal.Content
            width="300px"
            height="160px"
            boxShadow="$in"
            bgColor="white"
          >
            <p>
              Try playing with the modals. See which one is active, click and
              drag them. Understand their behavior.
            </p>
          </Modal.Content>
        </Modal>
      )}
    </>
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
            dragPlugins={[position({ default: { x: 120, y: 120 } })]}
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

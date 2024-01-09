import type { Meta } from '@storybook/react';
import * as React from 'react';

import Button from '../components/Button';
import Frame from '../components/Frame';
import List from '../components/List';
import { Modal } from '../components/Modal';

import { Computer, Mmsys113, Mshtml32534 } from '@react95/icons';

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
            width="300"
            height="200"
            icon={<Computer variant="16x16_4" />}
            title="Browse"
            defaultPosition={{
              x: 0,
              y: 20,
            }}
            closeModal={handleCloseModal}
            buttons={[
              { value: 'Ok', onClick: handleButtonClick },
              { value: 'Cancel', onClick: handleButtonClick },
            ]}
            menu={[
              {
                name: 'File',
                list: (
                  <List>
                    <List.Item onClick={handleCloseModal}>Exit</List.Item>
                  </List>
                ),
              },
              {
                name: 'Edit',
                list: (
                  <List>
                    <List.Item>Copy</List.Item>
                  </List>
                ),
              },
            ]}
          />
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
          width="300"
          height="200"
          icon={<Mmsys113 variant="32x32_4" />}
          title="First Modal"
          defaultPosition={{
            x: 0,
            y: 20,
          }}
          closeModal={handleCloseFirstModal}
          buttons={[
            { value: 'Ok', onClick: handleButtonClick },
            { value: 'Cancel', onClick: handleButtonClick },
          ]}
          menu={[
            {
              name: 'File',
              list: (
                <List>
                  <List.Item onClick={handleCloseFirstModal}>Exit</List.Item>
                </List>
              ),
            },
            {
              name: 'Edit',
              list: (
                <List>
                  <List.Item>Copy</List.Item>
                </List>
              ),
            },
          ]}
        >
          <Frame bg="white" boxShadow="in" h="100%" w="100%" padding="0px 5px">
            <p>
              The active modal will be based on the order they render, most
              recently rendered will be the active component. On click of a
              non-active modal will fire an action to set that modal as the
              active one.
            </p>
          </Frame>
        </Modal>
      )}
      {showSecondModal && (
        <Modal
          width="300"
          height="200"
          icon={<Mshtml32534 variant="32x32_4" />}
          title="Second Modal"
          defaultPosition={{
            x: 250,
            y: 100,
          }}
          closeModal={handleCloseSecondModal}
          buttons={[
            { value: 'Ok', onClick: handleButtonClick },
            { value: 'Cancel', onClick: handleButtonClick },
          ]}
          menu={[
            {
              name: 'File',
              list: (
                <List>
                  <List.Item onClick={handleCloseSecondModal}>Exit</List.Item>
                </List>
              ),
            },
            {
              name: 'Edit',
              list: (
                <List>
                  <List.Item>Copy</List.Item>
                </List>
              ),
            },
          ]}
        >
          <Frame bg="white" boxShadow="in" h="100%" w="100%" padding="0px 5px">
            <p>
              Try playing with the modals. See which on is active, click and
              drag them. Understand their behavior.
            </p>
          </Frame>
        </Modal>
      )}
    </>
  );
};

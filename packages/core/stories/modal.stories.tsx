import * as React from 'react';
import { Meta } from '@storybook/react/types-6-0';

import { Modal } from '../components/Modal';
import Button from '../components/Button';
import List from '../components/List';

export default {
  title: 'Modal',
  component: Modal,
} as Meta;

export const Simple = () => {
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
          icon="computer_32x32_4bit"
          title="Browse"
          handle="handle"
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
};

Simple.parameters = {
  design: {
    type: 'figma',
    url:
      'https://www.figma.com/file/2cbigNitjcruBDZT12ixIq/React95-Design-Kit?node-id=3%3A12',
  },
};

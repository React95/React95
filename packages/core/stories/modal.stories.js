import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { storiesOf } from '@storybook/react';
import withClippy from '../.storybook/src/clippy-addon/clippy-addon';

import { Modal } from '../components/Modal';
import Button from '../components/Button';
import List from '../components/List';

const ModalStory = ({ children }) => {
  const [showModal, toggleShowModal] = useState(true);

  const handleOpenModal = () => toggleShowModal(true);
  const handleCloseModal = () => toggleShowModal(false);
  const handleButtonClick = e => alert(e.target.value);

  return (
    <>
      <Button onClick={handleOpenModal}>Trigger Modal</Button>
      {showModal && (
        <Modal
          width={300}
          height={200}
          icon="computer"
          title="Browse"
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
        >
          {children}
        </Modal>
      )}
    </>
  );
};

const code = `<Modal
  icon="computer"
  title="Browse"
  closeModal={() => {}}
  buttons={[
    { value: 'Ok', onClick: () => {} },
    { value: 'Cancel', onClick: () => {} },
  ]}
  menu={[
    {
      name: 'File',
      list: (
        <List>
          <List.Item onClick={() => {}}>Exit</List.Item>
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
  {this.props.children}
</Modal>
`;

ModalStory.propTypes = {
  children: PropTypes.node,
};

ModalStory.defaultProps = {
  children: undefined,
};

storiesOf('Modal', module)
  .addDecorator(withClippy)
  .addParameters({ code })
  .add('default', () => <ModalStory />);

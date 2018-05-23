import React from 'react';
import Modal from '../components/Modal';
import Button from '../components/Button';

import { storiesOf } from '@storybook/react';

class ModalStory extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showModal: true,
    };
  }

  handleOpenModal = () => this.setState({ showModal: true });

  handleCloseModal = () => this.setState({ showModal: false });

  handleButtonClick = e => alert(e.target.value);

  render() {
    return (
      <div>
        <Button onClick={this.handleOpenModal}>Trigger Modal</Button>

        <Modal
          title="Browse"
          opened={this.state.showModal}
          closeModal={this.handleCloseModal}
          buttons={[
            { value: 'Ok', onClick: this.handleButtonClick },
            { value: 'Cancel', onClick: this.handleButtonClick },
          ]}
        >
          <div style={{ backgroundColor: 'tomato', minHeight: '200px' }}>
            Content
          </div>
        </Modal>
      </div>
    );
  }
}

storiesOf('Modal', module).add('default', () => <ModalStory />);

/* eslint no-alert: 0 */
import React from 'react';
import { storiesOf } from '@storybook/react';
import withClippy from '../.storybook/src/clippy-addon/clippy-addon';

import Modal from '../components/Modal';
import Button from '../components/Button';
import List from '../components/List';

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
    const { showModal } = this.state;
    return (
      <React.Fragment>
        <Button onClick={this.handleOpenModal}>Trigger Modal</Button>
        {showModal && (
          <Modal
            icon="computer"
            title="Browse"
            closeModal={this.handleCloseModal}
            buttons={[
              { value: 'Ok', onClick: this.handleButtonClick },
              { value: 'Cancel', onClick: this.handleButtonClick },
            ]}
            menu={[
              {
                name: 'File',
                list: (
                  <List>
                    <List.Item onClick={this.handleCloseModal}>Exit</List.Item>
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
        )}
      </React.Fragment>
    );
  }
}

const code = `<Modal
  icon="computer"
  title="Browse"
  closeModal={() => {}}
  buttons={[
    { value: 'Ok', onClick: () => {}) },
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

storiesOf('Modal', module)
  .addDecorator(withClippy)
  .addParameters({ code })
  .add('default', () => <ModalStory />);

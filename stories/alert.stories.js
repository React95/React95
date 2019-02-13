import React from 'react';
import { storiesOf } from '@storybook/react';
import withClippy from '../.storybook/src/clippy-addon/clippy-addon';

import Alert from '../components/Alert';
import Button from '../components/Button';
import List from '../components/List';

class AlertStory extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showAlert: true,
    };
  }

  handleOpenAlert = () => this.setState({ showAlert: true });

  handleCloseAlert = () => this.setState({ showAlert: false });

  handleButtonClick = e => alert(e.target.value);

  render() {
    const { showAlert } = this.state;
    return (
      <React.Fragment>
        <Button onClick={this.handleOpenAlert}>Trigger Alert</Button>
        {showAlert && (
          <Alert
            title="Windows Networking"
            type="error"
            message="The Windows password you typed is incorrect."
            closeAlert={this.handleCloseAlert}
          />
        )}
      </React.Fragment>
    );
  }
}

const code = `<Alert
  icon="computer"
  title="Browse"
  closeAlert={() => {}}
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
</Alert>
`;

storiesOf('Alert', module)
  .addDecorator(withClippy)
  .addParameters({ code })
  .add('default', () => <AlertStory />);

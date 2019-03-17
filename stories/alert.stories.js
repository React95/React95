import React from 'react';
import { storiesOf } from '@storybook/react';
import withClippy from '../.storybook/src/clippy-addon/clippy-addon';

import Alert from '../components/Alert';
import Button from '../components/Button';
import Dropdown from '../components/Dropdown';

class AlertStory extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showAlert: false,
      type: 'error',
    };
  }

  handleOpenAlert = () => this.setState({ showAlert: true });

  handleCloseAlert = () => this.setState({ showAlert: false });

  handleButtonClick = e => alert(e.target.value);

  onImageChange = e => this.setState({ type: e.target.value });

  render() {
    const { showAlert } = this.state;
    return (
      <React.Fragment>
        <div style={{ marginBottom: 10 }}>
          Alert Type:{' '}
          <Dropdown
            options={['error', 'info', 'warning']}
            onChange={this.onImageChange}
          />
        </div>
        <Button onClick={this.handleOpenAlert}>Trigger Alert</Button>
        {showAlert && (
          <Alert
            title="Windows Networking"
            type={this.state.type}
            message="The Windows password you typed is incorrect."
            closeAlert={this.handleCloseAlert}
          />
        )}
      </React.Fragment>
    );
  }
}

const code = `<Alert
  title="Windows Networking"
  type="error"
  message="The Windows password you typed is incorrect."
  closeAlert={this.handleCloseAlert}
/>`;

storiesOf('Alert', module)
  .addDecorator(withClippy)
  .addParameters({ code })
  .add('default', () => <AlertStory />);

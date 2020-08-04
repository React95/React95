import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import withClippy from '../.storybook/src/clippy-addon/clippy-addon';

import Alert from '../components/Alert';
import Button from '../components/Button';
import Dropdown from '../components/Dropdown';

const AlertStory = () => {
  const [showAlert, toggleShowAler] = useState(false);
  const [type, setType] = useState('error');

  const handleOpenAlert = () => toggleShowAler(true);
  const handleCloseAlert = () => toggleShowAler(false);
  const onImageChange = e => setType(e.target.value);

  return (
    <>
      <div style={{ marginBottom: 10 }}>
        Alert Type:
        <Dropdown
          options={['error', 'info', 'question', 'warning']}
          onChange={onImageChange}
        />
      </div>
      <Button onClick={handleOpenAlert}>Trigger Alert</Button>
      {showAlert && (
        <Alert
          title="Windows Networking"
          type={type}
          message="The Windows password you typed is incorrect."
          closeAlert={handleCloseAlert}
        />
      )}
    </>
  );
};

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

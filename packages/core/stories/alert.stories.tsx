import type { Meta } from '@storybook/react';
import * as React from 'react';

import Alert, { AlertType } from '../components/Alert/Alert';
import Button from '../components/Button';
import Checkbox from '../components/Checkbox';
import Dropdown from '../components/Dropdown';

export default {
  title: 'Alert',
  component: Alert,
  tags: ['autodocs'],
} as Meta<typeof Alert>;

export const Simple = {
  render: () => {
    const [showAlert, toggleShowAlert] = React.useState(false);
    const [withSound, toggleWithSound] = React.useState(false);
    const [type, setType] = React.useState<AlertType>('error');

    const handleOpenAlert = () => toggleShowAlert(true);
    const handleCloseAlert = () => toggleShowAlert(false);
    const onImageChange = (e: React.ChangeEvent<HTMLSelectElement>) =>
      setType(e.target.value as AlertType);

    return (
      <>
        <div style={{ marginBottom: 10 }}>
          Alert Type:
          <Dropdown
            options={['error', 'info', 'question', 'warning']}
            onChange={onImageChange}
          />
          <Checkbox
            checked={withSound}
            onChange={() => toggleWithSound(!withSound)}
          >
            sound
          </Checkbox>
        </div>
        <Button onClick={handleOpenAlert}>Trigger Alert</Button>
        {showAlert && (
          <Alert
            title="Windows Networking"
            type={type}
            message="The Windows password you typed is incorrect."
            closeAlert={handleCloseAlert}
            hasSound={withSound}
            buttons={[{ value: 'OK', onClick: handleCloseAlert }]}
          />
        )}
      </>
    );
  },

  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/2cbigNitjcruBDZT12ixIq/React95-Design-Kit?node-id=0%3A1',
    },
  },
};

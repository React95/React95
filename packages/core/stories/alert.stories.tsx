import * as React from 'react';
import { Meta } from '@storybook/react/types-6-0';

import Alert, { DialogImages } from '../components/Alert/Alert';
import Button from '../components/Button';
import Dropdown from '../components/Dropdown';

export default {
  title: 'Alert',
  component: Alert,
} as Meta;

export const Simple = () => {
  const [showAlert, toggleShowAlert] = React.useState(false);
  const [type, setType] = React.useState<keyof typeof DialogImages>('error');

  const handleOpenAlert = () => toggleShowAlert(true);
  const handleCloseAlert = () => toggleShowAlert(false);
  const onImageChange = (e: React.ChangeEvent<HTMLSelectElement>) =>
    setType(e.target.value as keyof typeof DialogImages);

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

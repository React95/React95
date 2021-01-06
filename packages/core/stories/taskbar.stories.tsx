import * as React from 'react';
import { Meta } from '@storybook/react/types-6-0';

import TaskBar from '../components/TaskBar';
import { Modal } from '../components/Modal';
import List from '../components/List';

export default {
  title: 'TaskBar',
  component: TaskBar,
} as Meta;

export const Simple = () => {
  const [first, toggleFirst] = React.useState(false);
  const [second, toggleSecond] = React.useState(false);

  const closeFirst = () => toggleFirst(false);
  const closeSecond = () => toggleSecond(false);

  return (
    <>
      {first && (
        <Modal
          icon="windows_explorer_32x32_4bit"
          title="Windows Explorer"
          closeModal={closeFirst}
          width="300"
          height="200"
        />
      )}

      {second && (
        <Modal
          defaultPosition={{ x: 50, y: 50 }}
          width="300"
          height="200"
          icon="reader_closed_32x32_4bit"
          title="Local Disk (C:)"
          closeModal={closeSecond}
        />
      )}

      <TaskBar
        list={
          <List>
            <List.Item
              icon="reader_closed_32x32_4bit"
              onClick={() => toggleSecond(true)}
            >
              Local Disk (C:)
            </List.Item>
            <List.Item
              icon="windows_explorer_32x32_4bit"
              onClick={() => {
                toggleFirst(true);
              }}
            >
              Windows Explorer
            </List.Item>
          </List>
        }
      />
    </>
  );
};

Simple.parameters = {
  design: {
    type: 'figma',
    url:
      'https://www.figma.com/file/2cbigNitjcruBDZT12ixIq/React95-Design-Kit?node-id=3%3A17',
  },
};

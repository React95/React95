/* eslint-disable react/jsx-wrap-multilines */
import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import withClippy from '../.storybook/src/clippy-addon/clippy-addon';

import TaskBar from '../components/TaskBar';
import { Modal } from '../components/Modal';
import List from '../components/List';

const TaskBarStory = () => {
  const [first, toggleFirst] = useState(false);
  const [second, toggleSecond] = useState(false);

  const closeFirst = () => toggleFirst(false);
  const closeSecond = () => toggleSecond(false);

  return (
    <>
      {first && (
        <Modal
          icon="windows_explorer"
          title="Windows Explorer"
          closeModal={closeFirst}
          width={300}
          height={200}
        />
      )}

      {second && (
        <Modal
          defaultPosition={{ x: 50, y: 50 }}
          width={300}
          height={200}
          icon="reader_closed"
          title="Local Disk (C:)"
          closeModal={closeSecond}
        />
      )}

      <TaskBar
        list={
          <List>
            <List.Item icon="reader_closed" onClick={() => toggleSecond(true)}>
              Local Disk (C:)
            </List.Item>
            <List.Item
              icon="windows_explorer"
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

const code = '<TaskBar />';

storiesOf('TaskBar', module)
  .addDecorator(withClippy)
  .addParameters({ code })
  .add('default', () => <TaskBarStory />);

import * as React from 'react';
import { Meta } from '@storybook/react/types-6-0';

import TaskBar from '../components/TaskBar';
import { Modal, ModalProvider } from '../components/Modal';
import List from '../components/List';
import { Tree } from '../components';
import { TreeProps } from '../components/Tree/Tree';
import { icons } from '../components/Tree/Node';

const treeNodes: TreeProps = {
  data: [
    {
      id: 0,
      label: 'Applications',
      children: [
        {
          id: 1,
          label: 'virus.exe',
          iconName: icons.FILE_EXECUTABLE,
        },
      ],
    },
    {
      id: 2,
      label: 'Music',
      children: [
        {
          id: 3,
          label: 'Indie',
          children: [
            {
              id: 4,
              label: 'Weezer',
              iconName: icons.FILE_MEDIA,
              onClick: () => alert('nice!'),
            },
            {
              id: 5,
              label: 'Supergrass',
              iconName: icons.FILE_MEDIA,
            },
          ],
        },
      ],
    }
  ],
};

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
      <ModalProvider>
        {first && (
          <Modal
            icon="windows_explorer"
            title="Windows Explorer"
            closeModal={closeFirst}
            width="300"
            height="200"
          >
            <Tree {...treeNodes}></Tree>
          </Modal>
        )}

        {second && (
          <Modal
            defaultPosition={{ x: 50, y: 50 }}
            width="300"
            height="200"
            icon="reader_closed"
            title="Local Disk (C:)"
            closeModal={closeSecond}
          />
        )}
      </ModalProvider>

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

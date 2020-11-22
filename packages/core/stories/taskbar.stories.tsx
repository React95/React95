import * as React from 'react';
import { Meta } from '@storybook/react/types-6-0';

import TaskBar from '../components/TaskBar';
import { Modal, ModalProvider } from '../components/Modal';
import List from '../components/List';
import { Tree } from '../components';
import { TreeProps } from '../components/Tree/Tree';
import { icons } from '../components/Tree/Node';
import Panel from '../components/Panel/Panel';

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
    },
    {
      id: 3,
      label: 'Other',
      children: [
        {
          id: 0,
          label: 'Fira Code.ttf',
          iconName: icons.FILE_FONT,
        },
        {
          id: 1,
          label: 'Journal.txt',
          iconName: icons.FILE_TEXT,
        },
      ],
    },
    {
      id: 4,
      label: 'config.cfg',
      iconName: icons.FILE_SETTINGS,
    },
    {
      id: 5,
      label: 'random_file',
      iconName: icons.FILE_UNKNOWN,
    },
  ],
};

export default {
  title: 'Task bar',
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
            <Panel shadow="none" padding="0">
              <Tree {...treeNodes}></Tree>
            </Panel>
          </Modal>
        )}

        {second && (
          <Modal
            defaultPosition={{ x: 50, y: 50 }}
            width="300"
            height="200"
            icon="notepad"
            title="Notepad"
            closeModal={closeSecond}
          >
            <Panel asCanvas={true}>
              On the other hand, we denounce with righteous indignation and
              dislike men who are so beguiled and demoralized by the charms of
              pleasure of the moment, so blinded by desire, that they cannot
              foresee the pain and trouble that are bound to ensue; and equal
              blame belongs to those who fail in their duty through weakness of
              will, which is the same as saying through shrinking from toil and
              pain. These cases are perfectly simple and easy to distinguish. In
              a free hour, when our power of choice is untrammelled and when
              nothing prevents our being able to do what we like best, every
              pleasure is to be welcomed and every pain avoided. But in certain
              circumstances and owing to the claims of duty or the obligations
              of business it will frequently occur that pleasures have to be
              repudiated and annoyances accepted. The wise man therefore always
              holds in these matters to this principle of selection: he rejects
              pleasures to secure other greater pleasures, or else he endures
              pains to avoid worse pains.
            </Panel>
          </Modal>
        )}
      </ModalProvider>

      <TaskBar
        list={
          <List>
            <List.Item icon="notepad" onClick={() => toggleSecond(true)}>
              Notepad
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

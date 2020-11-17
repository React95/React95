import * as React from 'react';
import { Meta } from '@storybook/react/types-6-0';

import { Modal, ModalProvider } from '../components/Modal';
import Button from '../components/Button';
import List from '../components/List';
import Panel from '../components/Panel';

export default {
  title: 'Modal',
  component: Modal,
} as Meta;

export const Simple = () => {
  const [showModal, toggleShowModal] = React.useState(true);

  const handleOpenModal = () => toggleShowModal(true);
  const handleCloseModal = () => toggleShowModal(false);
  const handleButtonClick = (e: React.MouseEvent<HTMLLIElement>) =>
    alert(e.currentTarget.value);

  return (
    <ModalProvider>
      <Button onClick={handleOpenModal}>Trigger Modal</Button>
      {showModal && (
        <Modal
          width={300}
          height={200}
          icon="computer"
          title="Browse"
          defaultPosition={{
            x: 0,
            y: 20,
          }}
          closeModal={handleCloseModal}
          buttons={[
            { value: 'Ok', onClick: handleButtonClick },
            { value: 'Cancel', onClick: handleButtonClick },
          ]}
          menu={[
            {
              name: 'File',
              list: (
                <List>
                  <List.Item small={true} icon="folder_file" onClick={() => {}}>
                    Save
                  </List.Item>
                  <List.Item onClick={handleCloseModal}>Exit</List.Item>
                </List>
              ),
            },
            {
              name: 'Edit',
              list: (
                <List>
                  <List.Item small={true} icon="copy">
                    Copy
                  </List.Item>
                </List>
              ),
            },
          ]}
        >
          <Panel>
            On the other hand, we denounce with righteous indignation and
            dislike men who are so beguiled and demoralized by the charms of
            pleasure of the moment, so blinded by desire, that they cannot
            foresee the pain and trouble that are bound to ensue; and equal
            blame belongs to those who fail in their duty through weakness of
            will, which is the same as saying through shrinking from toil and
            pain. These cases are perfectly simple and easy to distinguish. In a
            free hour, when our power of choice is untrammelled and when nothing
            prevents our being able to do what we like best, every pleasure is
            to be welcomed and every pain avoided. But in certain circumstances
            and owing to the claims of duty or the obligations of business it
            will frequently occur that pleasures have to be repudiated and
            annoyances accepted. The wise man therefore always holds in these
            matters to this principle of selection: he rejects pleasures to
            secure other greater pleasures, or else he endures pains to avoid
            worse
          </Panel>
        </Modal>
      )}
    </ModalProvider>
  );
};

export const WithCanvasPanel = () => {
  const [showModal, toggleShowModal] = React.useState(true);

  const handleOpenModal = () => toggleShowModal(true);
  const handleCloseModal = () => toggleShowModal(false);
  const handleButtonClick = (e: React.MouseEvent<HTMLLIElement>) =>
    alert(e.currentTarget.value);

  return (
    <ModalProvider>
      <Button onClick={handleOpenModal}>Trigger Modal</Button>
      {showModal && (
        <Modal
          width={300}
          height={200}
          icon="computer"
          title="Browse"
          defaultPosition={{
            x: 0,
            y: 20,
          }}
          closeModal={handleCloseModal}
          buttons={[
            { value: 'Ok', onClick: handleButtonClick },
            { value: 'Cancel', onClick: handleButtonClick },
          ]}
          menu={[
            {
              name: 'File',
              list: (
                <List>
                  <List.Item small={true} icon="folder_file" onClick={() => {}}>
                    Save
                  </List.Item>
                  <List.Item onClick={handleCloseModal}>Exit</List.Item>
                </List>
              ),
            },
            {
              name: 'Edit',
              list: (
                <List>
                  <List.Item small={true} icon="copy">
                    Copy
                  </List.Item>
                </List>
              ),
            },
          ]}
        >
          <Panel asCanvas={true}>
            On the other hand, we denounce with righteous indignation and
            dislike men who are so beguiled and demoralized by the charms of
            pleasure of the moment, so blinded by desire, that they cannot
            foresee the pain and trouble that are bound to ensue; and equal
            blame belongs to those who fail in their duty through weakness of
            will, which is the same as saying through shrinking from toil and
            pain. These cases are perfectly simple and easy to distinguish. In a
            free hour, when our power of choice is untrammelled and when nothing
            prevents our being able to do what we like best, every pleasure is
            to be welcomed and every pain avoided. But in certain circumstances
            and owing to the claims of duty or the obligations of business it
            will frequently occur that pleasures have to be repudiated and
            annoyances accepted. The wise man therefore always holds in these
            matters to this principle of selection: he rejects pleasures to
            secure other greater pleasures, or else he endures pains to avoid
            worse
          </Panel>
        </Modal>
      )}
    </ModalProvider>
  );
};

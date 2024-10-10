import { Bat } from '@react95/icons';
import React from 'react';
import { describe, expect, it, vi } from 'vitest';
import { List } from '../List/List';
import { fireEvent, waitRender } from '../shared/test/utils';
import { Modal } from './Modal';

import { ModalEvents, modals } from '../shared/events';
import { TitleBar } from '../TitleBar/TitleBar';

describe('<Modal />', () => {
  describe('Snapshots', () => {
    it('should match snapshot', async () => {
      const { container } = await waitRender(
        <Modal
          icon={<Bat />}
          title="file.bat"
          buttons={[
            { value: 'Ok', onClick: () => {} },
            { value: 'Cancel', onClick: () => {} },
          ]}
          menu={[
            {
              name: 'File',
              list: (
                <List>
                  <List.Item>Exit</List.Item>
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
          <Modal.Content>Hello</Modal.Content>
        </Modal>,
      );
      expect(container).toMatchSnapshot();
    });

    it('should match snapshot with buttonsAligment prop equals center', async () => {
      const { container } = await waitRender(
        <Modal
          icon={<Bat />}
          title="file.bat"
          buttons={[
            { value: 'Ok', onClick: () => {} },
            { value: 'Cancel', onClick: () => {} },
          ]}
          buttonsAlignment="center"
        >
          <Modal.Content>Hello</Modal.Content>
        </Modal>,
      );
      expect(container).toMatchSnapshot();
    });

    it('should match snapshot with buttonsAligment prop equals flex-start', async () => {
      const { container } = await waitRender(
        <Modal
          icon={<Bat />}
          title="file.bat"
          buttons={[
            { value: 'Ok', onClick: () => {} },
            { value: 'Cancel', onClick: () => {} },
          ]}
          buttonsAlignment="flex-start"
        >
          <Modal.Content>Hello</Modal.Content>
        </Modal>,
      );
      expect(container).toMatchSnapshot();
    });

    it('should match snapshot with titleBarOptions', async () => {
      const { container } = await waitRender(
        <Modal
          icon={<Bat />}
          title="file.bat"
          titleBarOptions={[
            <TitleBar.Help key="help" />,
            <TitleBar.Maximize key="maximize" />,
            <TitleBar.Minimize key="minimize" />,
            <TitleBar.Restore key="restore" />,
            <TitleBar.Close key="close" />,
          ]}
        >
          <Modal.Content>Hello</Modal.Content>
        </Modal>,
      );
      expect(container).toMatchSnapshot();
    });
  });

  describe('Action buttons', () => {
    it('should display button text correctly', async () => {
      const buttonText = 'button text';
      const { getByText } = await waitRender(
        <Modal
          icon={<Bat />}
          title="file.bat"
          buttons={[{ value: buttonText, onClick: () => {} }]}
        >
          <Modal.Content>Hello</Modal.Content>
        </Modal>,
      );

      expect(getByText(buttonText).textContent).toBe(buttonText);
    });

    it('should display more than one button', async () => {
      const { getAllByText } = await waitRender(
        <Modal
          icon={<Bat />}
          title="file.bat"
          buttons={[
            { value: 'button 1', onClick: () => {} },
            { value: 'button 2', onClick: () => {} },
            { value: 'button 3', onClick: () => {} },
          ]}
        >
          <Modal.Content>Hello</Modal.Content>
        </Modal>,
      );

      expect(getAllByText(/^button/).length).toBe(3);
    });

    it('should call onClick function when Modal action button is clicked', async () => {
      const onClickMock = vi.fn();
      const { getByText } = await waitRender(
        <Modal
          title="file.bat"
          buttons={[{ value: 'Ok', onClick: onClickMock }]}
        >
          <Modal.Content>Hello</Modal.Content>
        </Modal>,
      );

      fireEvent.click(getByText('Ok'));

      expect(onClickMock).toHaveBeenCalled();
    });
  });

  describe('Menus', () => {
    it('should display menu name correctly', async () => {
      const { getByText } = await waitRender(
        <Modal
          title="file.bat"
          menu={[
            {
              name: 'Menu Text',
              list: (
                <List>
                  <List.Item>Exit</List.Item>
                </List>
              ),
            },
          ]}
        >
          <Modal.Content>Hello</Modal.Content>
        </Modal>,
      );
      expect(getByText('Menu Text')).toBeInTheDocument();
    });

    it('should display menu list correctly', async () => {
      const { getByText } = await waitRender(
        <Modal
          title="file.bat"
          menu={[
            {
              name: 'Edit',
              list: (
                <List>
                  <List.Item>Exit</List.Item>
                </List>
              ),
            },
          ]}
        >
          <Modal.Content>Hello</Modal.Content>
        </Modal>,
      );

      fireEvent.mouseDown(getByText('Edit'));

      expect(getByText('Edit').querySelector('li')?.textContent).toBe('Exit');
    });
  });

  describe('Events', () => {
    it('should hide the modal when click on minimize', async () => {
      const { getByTestId } = await waitRender(
        <Modal
          icon={<Bat />}
          title="file.bat"
          titleBarOptions={[
            <Modal.Minimize key="minimize" data-testid="minimize" />,
            <TitleBar.Close key="close" />,
          ]}
        >
          <Modal.Content>Hello</Modal.Content>
        </Modal>,
      );
      fireEvent.click(getByTestId('minimize'));

      const modalWrapper = document.querySelector(
        '.Modal_modalWrapper__1txblt60',
      );
      console.log(modalWrapper?.className);
      expect(modalWrapper?.className).toContain('minimized_true');
    });

    it('should emit events ', async () => {
      modals.on = vi.fn();
      modals.emit = vi.fn();

      await waitRender(<Modal>Hello</Modal>);

      expect(modals.emit).toHaveBeenCalledTimes(2);
      expect(modals.emit).toHaveBeenNthCalledWith(
        1,
        ModalEvents.AddModal,
        expect.objectContaining({
          id: expect.anything(),
        }),
      );

      expect(modals.emit).toHaveBeenNthCalledWith(
        2,
        ModalEvents.ModalVisibilityChanged,
        expect.objectContaining({
          id: expect.anything(),
        }),
      );

      expect(modals.on).toHaveBeenCalledTimes(3);
      expect(modals.on).toHaveBeenCalledWith(
        ModalEvents.ModalVisibilityChanged,
        expect.any(Function),
      );
    });
  });
});

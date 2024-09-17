import { Bat } from '@react95/icons';
import React from 'react';
import { describe, expect, it, vi } from 'vitest';
import { List } from '../List/List';
import { fireEvent, waitRender } from '../shared/test/utils';
import { Modal } from './Modal';

import { ModalEvents, modals } from '../shared/events';

describe('<Modal />', () => {
  describe('Snapshots', () => {
    it('should match snapshot', async () => {
      const { container } = await waitRender(
        <Modal
          icon={<Bat />}
          title="file.bat"
          onClose={() => {}}
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
          Hello
        </Modal>,
      );
      expect(container).toMatchSnapshot();
    });

    it('should match snapshot with buttonsAligment prop equals center', async () => {
      const { container } = await waitRender(
        <Modal
          icon={<Bat />}
          title="file.bat"
          onClose={() => {}}
          buttons={[
            { value: 'Ok', onClick: () => {} },
            { value: 'Cancel', onClick: () => {} },
          ]}
          buttonsAlignment="center"
        >
          Hello
        </Modal>,
      );
      expect(container).toMatchSnapshot();
    });

    it('should match snapshot with buttonsAligment prop equals flex-start', async () => {
      const { container } = await waitRender(
        <Modal
          icon={<Bat />}
          title="file.bat"
          onClose={() => {}}
          buttons={[
            { value: 'Ok', onClick: () => {} },
            { value: 'Cancel', onClick: () => {} },
          ]}
          buttonsAlignment="flex-start"
        >
          Hello
        </Modal>,
      );
      expect(container).toMatchSnapshot();
    });

    it('should match snapshot with width and height props', async () => {
      const { container } = await waitRender(
        <Modal
          icon={<Bat />}
          title="file.bat"
          width="300"
          height="200"
          onClose={() => {}}
        >
          Hello
        </Modal>,
      );
      expect(container).toMatchSnapshot();
    });
  });

  describe('onClose prop', () => {
    it('should call onClose when Modal close button is clicked', async () => {
      const onCloseMock = vi.fn();
      const { getByRole } = await waitRender(
        <Modal icon={<Bat />} title="file.bat" onClose={onCloseMock}>
          Hello
        </Modal>,
      );

      fireEvent.click(getByRole('button'));

      expect(onCloseMock).toHaveBeenCalled();
    });
  });

  describe('Modal action buttons', () => {
    it('should display button text correctly', async () => {
      const buttonText = 'button text';
      const { getByText } = await waitRender(
        <Modal
          icon={<Bat />}
          title="file.bat"
          buttons={[{ value: buttonText, onClick: () => {} }]}
          onClose={() => {}}
        >
          Hello
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
          onClose={() => {}}
        >
          Hello
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
          onClose={() => {}}
        >
          Hello
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
          onClose={() => {}}
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
          Hello
        </Modal>,
      );
      expect(getByText('Menu Text')).toBeInTheDocument();
    });

    it('should display menu list correctly', async () => {
      const { getByText } = await waitRender(
        <Modal
          title="file.bat"
          onClose={() => {}}
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
          Hello
        </Modal>,
      );

      fireEvent.mouseDown(getByText('Edit'));

      expect(getByText('Edit').querySelector('li')?.textContent).toBe('Exit');
    });
  });

  describe('Events', () => {
    it('should emit events ', async () => {
      modals.on = vi.fn();
      modals.emit = vi.fn();

      await waitRender(
        <Modal icon={<Bat />} title="file.bat" onClose={() => {}}>
          Hello
        </Modal>,
      );

      expect(modals.emit).toHaveBeenCalledTimes(2);
      expect(modals.emit).toHaveBeenNthCalledWith(
        1,
        ModalEvents.AddModal,
        expect.objectContaining({
          id: expect.anything(),
          icon: expect.anything(),
          title: 'file.bat',
          hasButton: true,
        }),
      );

      expect(modals.emit).toHaveBeenNthCalledWith(
        2,
        ModalEvents.ModalVisibilityChanged,
        expect.objectContaining({
          id: expect.anything(),
        }),
      );

      expect(modals.on).toHaveBeenCalledTimes(1);
      expect(modals.on).toHaveBeenCalledWith(
        ModalEvents.ModalVisibilityChanged,
        expect.any(Function),
      );
    });
  });
});

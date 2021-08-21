import React from 'react';
import { Bat } from '@react95/icons';
import { waitRender, fireEvent } from '../shared/test/utils';
import Modal from './Modal';
import ModalContext from './ModalContext';
import List from '../List';

describe('<Modal />', () => {
  describe('Snapshots', () => {
    it('should match snapshot', async () => {
      const { container } = await waitRender(
        <Modal
          icon={<Bat />}
          title="file.bat"
          closeModal={() => {}}
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
          closeModal={() => {}}
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
          closeModal={() => {}}
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
          closeModal={() => {}}
        >
          Hello
        </Modal>,
      );
      expect(container).toMatchSnapshot();
    });

    it('should match snapshot with different activeWindow', async () => {
      const { container } = await waitRender(
        <ModalContext.Provider
          value={{
            windows: {},
            addWindows: () => {},
            removeWindow: () => {},
            setActiveWindow: () => {},
            updateWindow: () => {},
            activeWindow: '',
          }}
        >
          <Modal
            icon={<Bat />}
            title="file.bat"
            width="300"
            height="200"
            closeModal={() => {}}
          >
            Hello
          </Modal>
        </ModalContext.Provider>,
      );
      expect(container).toMatchSnapshot();
    });
  });

  describe('closeModal prop', () => {
    it('should call closeModal when Modal close button is clicked', async () => {
      const closeModalMock = jest.fn();
      const { getByText } = await waitRender(
        <Modal icon={<Bat />} title="file.bat" closeModal={closeModalMock}>
          Hello
        </Modal>,
      );

      fireEvent.click(getByText('X'));

      expect(closeModalMock).toHaveBeenCalled();
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
          closeModal={() => {}}
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
          closeModal={() => {}}
        >
          Hello
        </Modal>,
      );

      expect(getAllByText(/^button/).length).toBe(3);
    });

    it('should call onClick function when Modal action button is clicked', async () => {
      const onClickMock = jest.fn();
      const { getByText } = await waitRender(
        <Modal
          title="file.bat"
          buttons={[{ value: 'Ok', onClick: onClickMock }]}
          closeModal={() => {}}
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
          closeModal={() => {}}
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
          closeModal={() => {}}
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
});

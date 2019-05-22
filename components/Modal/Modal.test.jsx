import React from 'react';
import { render, fireEvent } from 'react-testing-library';
import Modal from './Modal';
import List from '../List';

describe('<Modal />', () => {
  describe('Snapshots', () => {
    it('should match snapshot', () => {
      const { container } = render(
        <Modal
          icon="bat"
          title="file.bat"
          buttons={[{ value: 'Ok' }, { value: 'Cancel' }]}
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

    it('should match snapshot with buttonsAligment prop equals center', () => {
      const { container } = render(
        <Modal
          icon="bat"
          title="file.bat"
          buttons={[{ value: 'Ok' }, { value: 'Cancel' }]}
          buttonsAlignment="center"
        >
          Hello
        </Modal>,
      );
      expect(container).toMatchSnapshot();
    });

    it('should match snapshot with buttonsAligment prop equals flex-start', () => {
      const { container } = render(
        <Modal
          icon="bat"
          title="file.bat"
          buttons={[{ value: 'Ok' }, { value: 'Cancel' }]}
          buttonsAlignment="flex-start"
        >
          Hello
        </Modal>,
      );
      expect(container).toMatchSnapshot();
    });
  });

  describe('closeModal prop', () => {
    it('should call closeModal when Modal close button is clicked', async () => {
      const closeModalMock = jest.fn();
      const { getByText } = render(
        <Modal icon="bat" title="file.bat" closeModal={closeModalMock}>
          Hello
        </Modal>,
      );

      fireEvent.click(getByText('x'));

      expect(closeModalMock).toHaveBeenCalled();
    });
  });

  describe('Modal action buttons', () => {
    it('should display button text correctly', () => {
      const buttonText = 'button text';
      const { container } = render(
        <Modal icon="bat" title="file.bat" buttons={[{ value: buttonText }]}>
          Hello
        </Modal>,
      );

      expect(
        container.querySelector(`button[value='${buttonText}']`).textContent,
      ).toBe(buttonText);
    });

    it('should display more than one button', () => {
      const { getAllByText } = render(
        <Modal
          icon="bat"
          title="file.bat"
          buttons={[
            { value: 'button' },
            { value: 'button' },
            { value: 'button' },
          ]}
        >
          Hello
        </Modal>,
      );

      expect(getAllByText('button').length).toBe(3);
    });

    it('should call onClick function when Modal action button is clicked', () => {
      const onClickMock = jest.fn();
      const { getByText } = render(
        <Modal buttons={[{ value: 'Ok', onClick: onClickMock }]}>Hello</Modal>,
      );

      fireEvent.click(getByText('Ok'));

      expect(onClickMock).toHaveBeenCalled();
    });
  });

  describe('Menus', () => {
    it('should display menu name correctly', () => {
      const { container } = render(
        <Modal
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

      expect(container.querySelector('li').textContent).toBe('Menu Text');
    });

    it('should display menu list correctly', () => {
      const { container, getByText } = render(
        <Modal
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

      expect(getByText('Edit').querySelector('li').textContent).toBe('Exit');
    });
  });
});

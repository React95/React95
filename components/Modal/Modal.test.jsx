import React from 'react';
import Modal from './Modal';
import List from '../List';
import renderer from 'react-test-renderer';
import { mount } from 'enzyme';

describe('<Modal />', () => {
  describe('Snapshots', () => {
    it('should match snapshot', () => {
      expect(
        renderer
          .create(
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
            </Modal>
          )
          .toJSON()
      ).toMatchSnapshot();
    });

    it('should match snapshot with buttonsAligment prop equals center', () => {
      expect(
        renderer
          .create(
            <Modal
              icon="bat"
              title="file.bat"
              buttons={[{ value: 'Ok' }, { value: 'Cancel' }]}
              buttonsAlignment="center"
            >
              Hello
            </Modal>
          )
          .toJSON()
      ).toMatchSnapshot();
    });

    it('should match snapshot with buttonsAligment prop equals flex-start', () => {
      expect(
        renderer
          .create(
            <Modal
              icon="bat"
              title="file.bat"
              buttons={[{ value: 'Ok' }, { value: 'Cancel' }]}
              buttonsAlignment="flex-start"
            >
              Hello
            </Modal>
          )
          .toJSON()
      ).toMatchSnapshot();
    });
  });

  describe('closeModal prop', () => {
    it('should call closeModal when Modal close button is clicked', () => {
      const closeModalMock = jest.fn();
      const MountedModal = mount(
        <Modal icon="bat" title="file.bat" closeModal={closeModalMock}>
          Hello
        </Modal>
      );

      MountedModal.find('Option')
        .at(1)
        .simulate('click');

      expect(closeModalMock).toHaveBeenCalled();
    });
  });

  describe('Modal action buttons', () => {
    it('should display button value correctly', () => {
      const buttonValue = 'button text';
      const MountedModal = mount(
        <Modal icon="bat" title="file.bat" buttons={[{ value: buttonValue }]}>
          Hello
        </Modal>
      );

      expect(MountedModal.find('Btn').text()).toBe(buttonValue);
    });

    it('should display more than one button', () => {
      const MountedModal = mount(
        <Modal
          icon="bat"
          title="file.bat"
          buttons={[{ value: 'OK' }, { value: 'Apply' }, { value: 'Cancel' }]}
        >
          Hello
        </Modal>
      );

      expect(MountedModal.find('Btn').length).toBe(3);
    });

    it('should call onClick function when Modal action button is clicked', () => {
      const onClickMock = jest.fn();
      const MountedModal = mount(
        <Modal buttons={[{ value: 'Ok', onClick: onClickMock }]}>Hello</Modal>
      );

      MountedModal.find('Btn').simulate('click');

      expect(onClickMock).toHaveBeenCalled();
    });
  });

  describe('Menus', () => {
    it('should display menu name correctly', () => {
      const menuText = 'Text';
      const MountedModal = mount(
        <Modal
          menu={[
            {
              name: menuText,
              list: (
                <List>
                  <List.Item>Exit</List.Item>
                </List>
              ),
            },
          ]}
        >
          Hello
        </Modal>
      );

      expect(MountedModal.find('MenuItem').text()).toBe(menuText);
    });

    it('should display menu list correctly', () => {
      const menuListText = 'Exit';
      const MountedModal = mount(
        <Modal
          menu={[
            {
              name: 'Edit',
              list: (
                <List>
                  <List.Item>{menuListText}</List.Item>
                </List>
              ),
            },
          ]}
        >
          Hello
        </Modal>
      );

      MountedModal.find('MenuItem').simulate('mousedown');

      expect(MountedModal.find(List).exists()).toBe(true);
      expect(MountedModal.find(List.Item).text()).toBe(menuListText);
    });
  });
});

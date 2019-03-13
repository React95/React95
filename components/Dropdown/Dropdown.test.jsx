import React from 'react';
import Dropdown from './Dropdown';
import renderer from 'react-test-renderer';
import { mount } from 'enzyme';

describe('<Dropdown />', () => {
  const options = ['', 'C:\\Windows', 'C:\\Windows/System32'];

  describe('Snapshots', () => {
    it('should match snapshot with options prop', () => {
      expect(
        renderer.create(<Dropdown options={options} />).toJSON()
      ).toMatchSnapshot();
    });
  });

  describe('options prop', () => {
    it('should display correct number of options', () => {
      const MountedDropown = mount(<Dropdown options={options} />);
      const dropDownOptions = MountedDropown.find('option');

      expect(dropDownOptions.length).toBe(3);
    });

    it('should display correct option text', () => {
      const MountedDropown = mount(<Dropdown options={options} />);
      const dropDownOptions = MountedDropown.find('option');

      expect(dropDownOptions.at(0).text()).toBe(options[0]);
      expect(dropDownOptions.at(1).text()).toBe(options[1]);
      expect(dropDownOptions.at(2).text()).toBe(options[2]);
    });
  });
});

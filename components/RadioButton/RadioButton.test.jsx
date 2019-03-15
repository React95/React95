import React from 'react';
import RadioButton from './RadioButton';
import renderer from 'react-test-renderer';
import { mount } from 'enzyme';

describe('<RadioButton />', () => {
  describe('Snapshots', () => {
    it('should match snapshot without props', () => {
      expect(renderer.create(<RadioButton />).toJSON()).toMatchSnapshot();
    });

    it('should match snapshot with disabled prop', () => {
      expect(
        renderer.create(<RadioButton disabled />).toJSON()
      ).toMatchSnapshot();
    });
  });

  describe('onChange prop', () => {
    it('should call onChange when RadioButton is changed', () => {
      const onChangeMock = jest.fn();
      const MountedRadio = mount(
        <RadioButton onChange={onChangeMock}>Radio</RadioButton>
      );

      MountedRadio.find('input').simulate('change');

      expect(onChangeMock).toHaveBeenCalled();
    });
  });
});

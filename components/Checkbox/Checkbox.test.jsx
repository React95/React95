import React from 'react';
import Checkbox from './Checkbox';
import renderer from 'react-test-renderer';
import { shallow, mount } from 'enzyme';

describe('<Checkbox />', () => {
  describe('Snapshots', () => {
    it('should match snapshot without props', () => {
      expect(renderer.create(<Checkbox />).toJSON()).toMatchSnapshot();
    });

    it('should match snapshot with checked prop', () => {
      expect(renderer.create(<Checkbox checked />).toJSON()).toMatchSnapshot();
    });

    it('should match snapshot with disabled prop', () => {
      expect(renderer.create(<Checkbox disabled />).toJSON()).toMatchSnapshot();
    });

    it('should match snapshot with checked and disabled props', () => {
      expect(
        renderer.create(<Checkbox checked disabled />).toJSON()
      ).toMatchSnapshot();
    });
  });

  describe('Checkbox label', () => {
    it('should display label prop as Checkbox label', () => {
      const label = 'label text';
      const ShallowCheckbox = shallow(<Checkbox label={label} />);

      expect(ShallowCheckbox.text()).toBe(label);
    });

    it('should display children as Checkbox label', () => {
      const label = 'label text';
      const ShallowCheckbox = shallow(<Checkbox>{label}</Checkbox>);

      expect(ShallowCheckbox.text()).toBe(label);
    });
  });

  describe('onChange prop', () => {
    it('should call onChange function when Checkbox is changed', () => {
      const onChangeMock = jest.fn();
      const ShallowCheckbox = shallow(
        <Checkbox onChange={onChangeMock} label="text" />
      );

      ShallowCheckbox.find('Field').simulate('change');

      expect(onChangeMock).toHaveBeenCalled();
    });
  });
});

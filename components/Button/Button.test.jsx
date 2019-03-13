import React from 'react';
import Button from './Button';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';

describe('<Button />', () => {
  describe('Snapshots', () => {
    it('should match snapshot', () => {
      expect(renderer.create(<Button />).toJSON()).toMatchSnapshot();
    });
  });

  describe('value prop', () => {
    it('should display value as Button children', () => {
      const ShallowButton = shallow(<Button value="Cancel" />);

      expect(ShallowButton.text()).toBe('Cancel');
    });
  });

  describe('onClick prop', () => {
    it('should call onClick function when Button is clicked', () => {
      const onClickMock = jest.fn();
      const ShallowButton = shallow(<Button onClick={onClickMock} />);

      ShallowButton.simulate('click');

      expect(onClickMock).toHaveBeenCalled();
    });
  });
});

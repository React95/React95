import React from 'react';
import { render, fireEvent } from 'react-testing-library';
import Button from './Button';

describe('<Button />', () => {
  describe('Snapshots', () => {
    it('should match snapshot', () => {
      const { container } = render(<Button />);
      expect(container).toMatchSnapshot();
    });
  });

  describe('value prop', () => {
    it('should display value as Button children', () => {
      const { container } = render(<Button value="Cancel" />);

      expect(container.querySelector('button').textContent).toBe('Cancel');
    });
  });

  describe('onClick prop', () => {
    it('should call onClick function when Button is clicked', () => {
      const onClickMock = jest.fn();
      const { getByText } = render(<Button onClick={onClickMock} value="ok" />);

      fireEvent.click(getByText('ok'));

      expect(onClickMock).toHaveBeenCalled();
    });
  });
});

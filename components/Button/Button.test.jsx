import React from 'react';
import Button from './Button';
import { render, fireEvent } from 'react-testing-library';

describe('<Button />', () => {
  describe('Snapshots', () => {
    it('should match snapshot', () => {
      const { container } = render(<Button />);
      expect(container).toMatchSnapshot();
    });
  });

  describe('value prop', () => {
    it('should display value as Button children', () => {
      const { getByText } = render(<Button value="Cancel" />);

      expect(getByText('Cancel')).toBeInTheDocument();
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

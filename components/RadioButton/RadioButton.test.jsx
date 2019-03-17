import React from 'react';
import RadioButton from './RadioButton';
import { render, fireEvent, cleanup } from 'react-testing-library';

afterEach(cleanup);

describe('<RadioButton />', () => {
  describe('Snapshots', () => {
    it('should match snapshot without props', () => {
      const { container } = render(<RadioButton />);
      expect(container).toMatchSnapshot();
    });

    it('should match snapshot with disabled prop', () => {
      const { container } = render(<RadioButton disabled />);
      expect(container).toMatchSnapshot();
    });
  });

  describe('onChange prop', () => {
    it('should call onChange callback when RadioButton is changed', () => {
      const onChangeMock = jest.fn();
      const { getByTestId } = render(
        <RadioButton onChange={onChangeMock} data-testid="radio">
          Radio
        </RadioButton>
      );

      fireEvent.click(getByTestId('radio'));

      expect(onChangeMock).toHaveBeenCalled();
    });
  });
});

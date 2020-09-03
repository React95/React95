import React from 'react';
import { render, fireEvent } from '../shared/test/utils';
import RadioButton from './RadioButton';

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

    it('should match snapshot with checked prop', () => {
      const { container } = render(<RadioButton checked onChange={() => {}} />);
      expect(container).toMatchSnapshot();
    });

    it('should match snapshot with checked and disabled prop', () => {
      const { container } = render(<RadioButton checked disabled />);
      expect(container).toMatchSnapshot();
    });
  });

  describe('onChange prop', () => {
    it('should call onChange callback when RadioButton is changed', () => {
      const onChangeMock = jest.fn();
      const { getByTestId } = render(
        <RadioButton onChange={onChangeMock} data-testid="radio">
          Radio
        </RadioButton>,
      );

      fireEvent.click(getByTestId('radio'));

      expect(onChangeMock).toHaveBeenCalled();
    });
  });
});

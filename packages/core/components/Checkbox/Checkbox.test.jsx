import React from 'react';
import { render, fireEvent } from '../shared/test/utils';
import Checkbox from './Checkbox';

describe('<Checkbox />', () => {
  describe('Snapshots', () => {
    it('should match snapshot without props', () => {
      const { container } = render(<Checkbox />);
      expect(container).toMatchSnapshot();
    });

    it('should match snapshot with disabled prop', () => {
      const { container } = render(<Checkbox disabled />);
      expect(container).toMatchSnapshot();
    });
  });

  describe('Checkbox label', () => {
    const label = 'label text';

    it('should display label prop as Checkbox label', () => {
      const { container } = render(<Checkbox label={label} />);

      expect(container.querySelector('label').textContent).toBe(label);
    });

    it('should display children as Checkbox label', () => {
      const { container } = render(<Checkbox>{label}</Checkbox>);

      expect(container.querySelector('label').textContent).toBe(label);
    });
  });

  describe('onChange prop', () => {
    it('should call onChange function when Checkbox is changed', () => {
      const onChangeMock = jest.fn();
      const { getByTestId } = render(
        <Checkbox
          onChange={onChangeMock}
          label="text"
          data-testid="checkbox"
        />,
      );

      fireEvent.click(getByTestId('checkbox'));

      expect(onChangeMock).toHaveBeenCalled();
    });
  });
});

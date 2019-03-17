import React from 'react';
import Checkbox from './Checkbox';
import { render, fireEvent, cleanup } from 'react-testing-library';
import renderer from 'react-test-renderer';
import { shallow, mount } from 'enzyme';

afterEach(cleanup);

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
      const { getByText } = render(<Checkbox label={label} />);

      expect(getByText(label)).toBeInTheDocument();
    });

    it('should display children as Checkbox label', () => {
      const { getByText } = render(<Checkbox>{label}</Checkbox>);

      expect(getByText(label)).toBeInTheDocument();
    });
  });

  describe('onChange prop', () => {
    it('should call onChange function when Checkbox is changed', () => {
      const onChangeMock = jest.fn();
      const { getByTestId } = render(
        <Checkbox onChange={onChangeMock} label="text" data-testid="checkbox" />
      );

      fireEvent.click(getByTestId('checkbox'));

      expect(onChangeMock).toHaveBeenCalled();
    });
  });
});

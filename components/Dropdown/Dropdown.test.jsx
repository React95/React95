import React from 'react';
import Dropdown from './Dropdown';
import { render } from 'react-testing-library';

describe('<Dropdown />', () => {
  const options = ['', 'C:\\Windows', 'C:\\Windows/System32'];

  describe('Snapshots', () => {
    it('should match snapshot with options prop', () => {
      const { container } = render(<Dropdown options={options} />);
      expect(container).toMatchSnapshot();
    });
  });

  describe('options prop', () => {
    it('should display correct number of options', () => {
      const { container } = render(<Dropdown options={options} />);
      const dropDownOptions = container.querySelectorAll('option');

      expect(dropDownOptions.length).toBe(3);
    });

    it('should display correct option text', () => {
      const { getByText } = render(<Dropdown options={options} />);

      expect(getByText(options[0])).toBeInTheDocument();
      expect(getByText(options[1])).toBeInTheDocument();
      expect(getByText(options[2])).toBeInTheDocument();
    });
  });
});

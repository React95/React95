import React from 'react';
import { render } from '../shared/test/utils';
import Dropdown from './Dropdown';

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
      const { container } = render(<Dropdown options={options} />);
      const renderedOptions = container.querySelectorAll('option');

      expect(renderedOptions[0].textContent).toBe(options[0]);
      expect(renderedOptions[1].textContent).toBe(options[1]);
      expect(renderedOptions[2].textContent).toBe(options[2]);
    });
  });
});

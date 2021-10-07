import React from 'react';
import { render } from '../shared/test/utils';
import DropdownCustom from './DropdownCustom';

describe('<DropdownCustom />', () => {
  const options = ['', 'C:\\Windows', 'C:\\Windows/System32'];

  describe('Snapshots', () => {
    it('should match snapshot with options prop', () => {
      const { container } = render(<DropdownCustom options={options} />);
      expect(container).toMatchSnapshot();
    });
  });

  describe('options prop', () => {
    it('should display all options', () => {
      const { findByText } = render(<DropdownCustom options={options} />);

      expect(findByText(options[0])).toBeTruthy();
      expect(findByText(options[1])).toBeTruthy();
      expect(findByText(options[2])).toBeTruthy();
    });
  });
});

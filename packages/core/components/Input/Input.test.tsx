import React from 'react';
import { describe, expect, it } from 'vitest';
import { render } from '../shared/test/utils';
import Input from './Input';

describe('<Input />', () => {
  describe('Snapshots', () => {
    it('should match snapshot', () => {
      const { container } = render(<Input />);
      expect(container).toMatchSnapshot();
    });
  });
});

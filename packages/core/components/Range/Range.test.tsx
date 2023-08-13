import React from 'react';
import { describe, expect, it } from 'vitest';
import { render } from '../shared/test/utils';
import Range from './Range';

describe('<Range />', () => {
  describe('Snapshot', () => {
    it('should match snapshot', () => {
      const { container } = render(<Range />);
      expect(container).toMatchSnapshot();
    });
  });
});

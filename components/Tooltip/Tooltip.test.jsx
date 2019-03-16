import React from 'react';
import 'react-testing-library/cleanup-after-each';
import { render, fireEvent, act } from 'react-testing-library';
import Tooltip from './Tooltip';

describe('<Tooltip />', () => {
  describe('Snapshot', () => {
    it('should match snapshot', () => {
      const { container } = render(
        <Tooltip delay={0} text="Tooltip text">
          <span>hover</span>
        </Tooltip>
      );

      expect(container).toMatchSnapshot();
    });
  });

  describe('Tooltip visibility', () => {
    it('should show Tooltip when hovered', () => {
      const tooltipText = 'Tooltip text';
      jest.useFakeTimers();

      const { container, getByText } = render(
        <Tooltip delay={0} text={tooltipText}>
          <span>hover</span>
        </Tooltip>
      );

      expect(getByText(tooltipText)).toHaveStyleRule('display', 'none');

      act(() => {
        fireEvent.mouseEnter(container.firstChild);
        jest.runAllTimers();
      });

      expect(getByText(tooltipText)).toHaveStyleRule('display', 'block');
    });
  });
});

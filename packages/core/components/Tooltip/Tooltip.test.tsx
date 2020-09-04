import React from 'react';
import { render, fireEvent, act } from '../shared/test/utils';
import Tooltip from './Tooltip';

describe('<Tooltip />', () => {
  describe('Snapshot', () => {
    it('should match snapshot', () => {
      jest.useFakeTimers();

      const { container } = render(
        <Tooltip delay={0} text="Tooltip text">
          <span>hover</span>
        </Tooltip>,
      );

      // without "Tip"
      expect(container).toMatchSnapshot();

      act(() => {
        fireEvent.mouseEnter(container.firstChild as HTMLSpanElement);
        jest.runAllTimers();
      });

      // with "Tip"
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
        </Tooltip>,
      );

      expect(() => getByText(tooltipText)).toThrowError();

      act(() => {
        fireEvent.mouseEnter(container.firstChild as HTMLSpanElement);
        jest.runAllTimers();
      });

      expect(getByText(tooltipText)).not.toBeNull();
    });
  });
});

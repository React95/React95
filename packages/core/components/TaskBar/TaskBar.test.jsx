import React from 'react';
import { render, fireEvent, act } from '../shared/test/utils';

import { Modal } from '../Modal';
import List from '../List';

import Clock from './Clock';
import WindowButton from './WindowButton';
import TaskBar from './TaskBar';

describe('<TaskBar />', () => {
  beforeAll(() => jest.useFakeTimers());
  afterAll(() => jest.useRealTimers());

  describe('Snapshots', () => {
    describe('<Clock />', () => {
      it('should match snapshot', () => {
        const { container } = render(<Clock />);
        expect(container).toMatchSnapshot();
      });
    });

    describe('<WindowButton />', () => {
      it('should match snapshot', () => {
        const { container } = render(<WindowButton />);
        expect(container).toMatchSnapshot();
      });

      it('should match snapshot with small prop', () => {
        const { container } = render(<WindowButton small />);
        expect(container).toMatchSnapshot();
      });

      it('should match snapshot with active prop', () => {
        const { container } = render(
          <>
            <WindowButton small />
            <WindowButton small active />
          </>,
        );
        expect(container).toMatchSnapshot();
      });

      it('should match snapshot with icon prop', () => {
        const { container } = render(<WindowButton icon="bat" />);
        expect(container).toMatchSnapshot();
      });
    });

    it('should match snapshot', () => {
      act(() => jest.advanceTimersByTime(1000));

      const { container } = render(<TaskBar />);

      expect(container).toMatchSnapshot();
    });
  });
});

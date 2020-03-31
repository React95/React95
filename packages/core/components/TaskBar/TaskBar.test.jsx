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

    it('should match snapshot with one Modal', () => {
      act(() => jest.advanceTimersByTime(1000));

      const { container } = render(
        <>
          <Modal icon="bat" title="file.bat" />
          <TaskBar />
        </>,
      );

      expect(container).toMatchSnapshot();
    });

    it('should match snapshot with two Modals', () => {
      act(() => jest.advanceTimersByTime(1000));

      const { container } = render(
        <>
          <Modal icon="windows_explorer" title="Windows Explorer" />
          <Modal icon="bat" title="file.bat" />
          <TaskBar />
        </>,
      );

      expect(container).toMatchSnapshot();
    });

    it('should match snapshot with list prop', () => {
      act(() => jest.advanceTimersByTime(1000));

      const { container, getByText } = render(
        <TaskBar
          list={
            <List>
              <List.Item icon="reader_closed">Local Disk (C:)</List.Item>
              <List.Item icon="windows_explorer">Windows Explorer</List.Item>
            </List>
          }
        />,
      );

      // closed
      expect(container.querySelectorAll('li').length).toBe(0);
      expect(container).toMatchSnapshot();

      fireEvent.click(getByText('Start'));

      // openned
      expect(container.querySelectorAll('li').length).toBe(2);
      expect(container).toMatchSnapshot();

      fireEvent.click(container.querySelectorAll('li')[0]);

      // click on list should close it
      expect(container.querySelectorAll('li').length).toBe(0);
    });
  });
});

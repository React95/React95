import React from 'react';
import { Bat, ReaderClosed, WindowsExplorer } from '@react95/icons';

import { render, waitRender, fireEvent, act } from '../shared/test/utils';

import { Modal } from '../Modal';
import List from '../List';
import Tooltip from '../Tooltip';

import Clock from './Clock';
import WindowButton from './WindowButton';
import TaskBar from './TaskBar';

const WINDOWS95_LAUNCH_DATE = '24 August 1995';

const tooltipDefaultText = Tooltip.defaultProps?.text;

describe('<TaskBar />', () => {
  beforeAll(() => {
    jest.useFakeTimers().setSystemTime(new Date('August 24, 1995 10:00:00'));

    (Tooltip?.defaultProps || {}).text = WINDOWS95_LAUNCH_DATE;
  });

  afterAll(() => {
    jest.useRealTimers();

    (Tooltip?.defaultProps || {}).text = tooltipDefaultText;
  });

  describe('Snapshots', () => {
    describe('<Clock />', () => {
      it('should match snapshot', () => {
        const { container } = render(<Clock />);

        act(() => {
          jest.advanceTimersByTime(2000);
        });

        expect(container).toMatchSnapshot();
      });
    });

    describe('<WindowButton />', () => {
      it('should match snapshot', async () => {
        const { container } = await waitRender(<WindowButton />);

        expect(container).toMatchSnapshot();
      });

      it('should match snapshot with small prop', async () => {
        const { container } = await waitRender(<WindowButton small />);

        expect(container).toMatchSnapshot();
      });

      it('should match snapshot with active prop', async () => {
        const { container } = await waitRender(
          <>
            <WindowButton small />
            <WindowButton small active />
          </>,
        );

        expect(container).toMatchSnapshot();
      });

      it('should match snapshot with icon prop', async () => {
        const { container } = await waitRender(<WindowButton icon={<Bat />} />);

        expect(container).toMatchSnapshot();
      });
    });

    it('should match snapshot', async () => {
      const { container } = await waitRender(<TaskBar />);

      act(() => {
        jest.advanceTimersByTime(1000);
      });

      expect(container).toMatchSnapshot();
    });

    it('should match snapshot with one Modal', async () => {
      const { container } = await waitRender(
        <>
          <Modal icon={<Bat />} title="file.bat" closeModal={() => {}} />
          <TaskBar />
        </>,
      );

      act(() => {
        jest.advanceTimersByTime(1000);
      });

      expect(container).toMatchSnapshot();
    });

    it('should match snapshot with two Modals', async () => {
      const { container } = await waitRender(
        <>
          <Modal
            icon={<WindowsExplorer />}
            title="Windows Explorer"
            closeModal={() => {}}
          />
          <Modal icon={<Bat />} title="file.bat" closeModal={() => {}} />
          <TaskBar />
        </>,
      );

      act(() => {
        jest.advanceTimersByTime(1000);
      });

      expect(container).toMatchSnapshot();
    });

    it('should match snapshot with list prop', async () => {
      const { container, getByText } = await waitRender(
        <TaskBar
          list={
            <List>
              <List.Item icon={<ReaderClosed />}>Local Disk (C:)</List.Item>
              <List.Item icon={<WindowsExplorer />}>Windows Explorer</List.Item>
            </List>
          }
        />,
      );

      act(() => {
        jest.advanceTimersByTime(1000);
      });

      // closed
      expect(container.querySelectorAll('li').length).toBe(0);
      expect(container).toMatchSnapshot();

      await act(async () => {
        fireEvent.click(getByText('Start'));
      });

      // openned
      expect(container.querySelectorAll('li').length).toBe(2);
      expect(container).toMatchSnapshot();

      await act(async () => {
        fireEvent.click(container.querySelectorAll('li')[0]);
      });

      // click on list should close it
      expect(container.querySelectorAll('li').length).toBe(0);
    });
  });
});

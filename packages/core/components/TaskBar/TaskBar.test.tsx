import { Bat, ReaderClosed, WindowsExplorer } from '@react95/icons';
import React from 'react';
import { describe, expect, it, vi } from 'vitest';

import { act, fireEvent, render, waitRender } from '../shared/test/utils';

import { List } from '../List/List';
import { Modal } from '../Modal/Modal';
import { Tooltip } from '../Tooltip/Tooltip';

import { Clock } from './Clock';
import { TaskBar } from './TaskBar';
import { WindowButton } from './WindowButton';

const WINDOWS95_LAUNCH_DATE = '24 August 1995';

const tooltipDefaultText = Tooltip.defaultProps?.text;

describe('<TaskBar />', () => {
  beforeAll(() => {
    vi.useFakeTimers().setSystemTime(new Date('August 24, 1995 10:00:00'));

    (Tooltip?.defaultProps || {}).text = WINDOWS95_LAUNCH_DATE;
  });

  afterAll(() => {
    vi.useRealTimers();

    (Tooltip?.defaultProps || {}).text = tooltipDefaultText;
  });

  describe('Snapshots', () => {
    describe('<Clock />', () => {
      it('should match snapshot', () => {
        const { container } = render(<Clock />);

        act(() => {
          vi.advanceTimersByTime(2000);
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
        vi.advanceTimersByTime(1000);
      });

      expect(container).toMatchSnapshot();
    });

    it('should match snapshot with one Modal', async () => {
      const { container } = await waitRender(
        <>
          <Modal icon={<Bat />} title="file.bat" onClose={() => {}} />
          <TaskBar />
        </>,
      );

      act(() => {
        vi.advanceTimersByTime(1000);
      });

      expect(container).toMatchSnapshot();
    });

    it('should match snapshot with two Modals', async () => {
      const { container } = await waitRender(
        <>
          <Modal
            icon={<WindowsExplorer />}
            title="Windows Explorer"
            onClose={() => {}}
          />
          <Modal icon={<Bat />} title="file.bat" onClose={() => {}} />
          <TaskBar />
        </>,
      );

      act(() => {
        vi.advanceTimersByTime(1000);
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
        vi.advanceTimersByTime(1000);
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

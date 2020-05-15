import React from 'react';

import { render, waitRender, fireEvent, act } from '../shared/test/utils';

import { Modal } from '../Modal';
import List from '../List';
import Tooltip from '../Tooltip';

import Clock from './Clock';
import WindowButton from './WindowButton';
import TaskBar from './TaskBar';

const WINDOWS95_LAUNCH_DATE = '24 August 1995';

const tooltipDefaultText = Tooltip.defaultProps.text;

describe('<TaskBar />', () => {
  beforeAll(() => {
    jest.useFakeTimers();

    Tooltip.defaultProps.text = WINDOWS95_LAUNCH_DATE;
  });

  afterAll(() => {
    jest.useRealTimers();

    Tooltip.defaultProps.text = tooltipDefaultText;
  });

  describe('Snapshots', () => {
    describe('<Clock />', () => {
      it('should match snapshot', () => {
        act(() => jest.advanceTimersByTime(2000));

        const { container } = render(<Clock />);
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
        const { container } = await waitRender(<WindowButton icon="bat" />);

        expect(container).toMatchSnapshot();
      });
    });

    it('should match snapshot', async () => {
      act(() => jest.advanceTimersByTime(1000));

      const { container } = await waitRender(<TaskBar />);

      expect(container).toMatchSnapshot();
    });

    it('should match snapshot with one Modal', async () => {
      act(() => jest.advanceTimersByTime(1000));

      const { container } = await waitRender(
        <>
          <Modal icon="bat" title="file.bat" />
          <TaskBar />
        </>,
      );

      expect(container).toMatchSnapshot();
    });

    it('should match snapshot with two Modals', async () => {
      act(() => jest.advanceTimersByTime(1000));

      const { container } = await waitRender(
        <>
          <Modal icon="windows_explorer" title="Windows Explorer" />
          <Modal icon="bat" title="file.bat" />
          <TaskBar />
        </>,
      );

      expect(container).toMatchSnapshot();
    });

    it('should match snapshot with list prop', async () => {
      act(() => jest.advanceTimersByTime(1000));

      const { container, getByText } = await waitRender(
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

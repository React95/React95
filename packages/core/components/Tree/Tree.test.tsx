import React from 'react';
import { waitRender, fireEvent, act } from '../shared/test/utils';
import Tree from './Tree';

const { icons } = Tree;

describe('<Tree />', () => {
  describe('Snapshot', () => {
    it('should match snapshot', async () => {
      const { container } = await waitRender(
        <Tree data={[{ id: 0, label: 'foo' }]} />,
      );

      expect(container).toMatchSnapshot();
    });
  });

  describe('Rendering', () => {
    const onClickMock = jest.fn();

    const data = [
      {
        id: 0,
        label: 'foo',
        children: [
          {
            id: 0,
            label: 'bar',
            onClick: onClickMock,
          },
          {
            id: 1,
            label: 'baz',
            iconName: icons.FILE_MEDIA,
          },
        ],
      },
    ];

    it('should render multiple levels of files if given', async () => {
      const { queryByText } = await waitRender(<Tree data={data} />);

      const parentNode = queryByText('foo')!;
      expect(parentNode).not.toBeNull();

      // Opening the folder
      await act(async () => {
        fireEvent.doubleClick(parentNode);
      });

      expect(queryByText('bar')).not.toBeNull();
      expect(queryByText('baz')).not.toBeNull();
    });

    it("should render the default icon if the `iconName` prop isn't defined", async () => {
      const { container, queryByText } = await waitRender(<Tree data={data} />);

      await act(async () => {
        fireEvent.doubleClick(queryByText('foo')!);
      });

      const itemsWithDefaultIcon = container.querySelectorAll(
        '.bat_32x32_4bit',
      );

      expect(itemsWithDefaultIcon.length).toBe(1);
    });

    it('should trigger `onClick`', async () => {
      const { queryByText } = await waitRender(<Tree data={data} />);

      await act(async () => {
        fireEvent.doubleClick(queryByText('foo')!);
      });
      await act(async () => {
        fireEvent.click(queryByText('bar')!);
      });

      expect(onClickMock).toHaveBeenCalled();
    });
  });
});

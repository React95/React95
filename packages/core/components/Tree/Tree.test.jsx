import React from 'react';
import { render, fireEvent } from '../shared/test/utils';
import Tree from './Tree';

const { icons } = Tree;

describe('<Tree />', () => {
  describe('Snapshot', () => {
    it('should match snapshot', () => {
      const { container } = render(<Tree data={[{ id: 0, label: 'foo' }]} />);
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

    const TreeComponent = () => render(<Tree data={data} />);

    it('should render multiple levels of files if given', () => {
      const { queryByText } = TreeComponent();

      const parentNode = queryByText('foo');
      expect(parentNode).toBeInTheDocument();

      // Opening the folder
      fireEvent.doubleClick(parentNode);

      expect(queryByText('bar')).toBeInTheDocument();
      expect(queryByText('baz')).toBeInTheDocument();
    });

    it("should render the default icon if the `iconName` prop isn't defined", () => {
      const { container, queryByText } = TreeComponent();

      fireEvent.doubleClick(queryByText('foo'));

      const itemsWithDefaultIcon = container.querySelectorAll('[name=bat]');

      expect(itemsWithDefaultIcon.length).toBe(1);
    });

    it('should trigger `onClick`', () => {
      const { queryByText } = TreeComponent();

      fireEvent.doubleClick(queryByText('foo'));
      fireEvent.click(queryByText('bar'));

      expect(onClickMock).toHaveBeenCalled();
    });
  });
});

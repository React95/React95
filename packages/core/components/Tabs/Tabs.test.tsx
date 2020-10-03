import React from 'react';
import { render, fireEvent } from '../shared/test/utils';
import Tab from './Tab';
import Tabs from './Tabs';

describe('<Tabs />', () => {
  function onClick() {}
  describe('Snapshot', () => {
    it('should match snapshot', () => {
      const { container } = render(
        <Tabs>
          <Tab title="example" activeTab="example" onClick={onClick}>
            <p>Example text</p>
          </Tab>
        </Tabs>,
      );
      expect(container).toMatchSnapshot();
    });
  });

  describe('Active Tab', () => {
    const TabComponent = () =>
      render(
        <Tabs>
          <Tab title="first" activeTab="first" onClick={onClick}>
            <p>first text</p>
          </Tab>
          <Tab title="second" activeTab="first" onClick={onClick}>
            <p>second text</p>
          </Tab>
        </Tabs>,
      );

    it('should have first Tab active', () => {
      const { queryByText } = TabComponent();
      expect(queryByText('first text')).toBeTruthy();
    });

    it('should active second Tab when Tab is clicked', () => {
      const { queryByText } = TabComponent();
      expect(queryByText('first text')).toBeTruthy();

      fireEvent.click(queryByText('second') as HTMLParagraphElement);

      expect(queryByText('first text')).not.toBeTruthy();
      expect(queryByText('second text')).toBeTruthy();
    });
  });
});

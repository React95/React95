import React from 'react';
import renderer from 'react-test-renderer';
import { mount } from 'enzyme';
import Tab from './Tabs';
import Tabs from './Tabs';

describe('<Tabs />', () => {
  describe('Snapshot', () => {
    it('should match snapshot', () => {
      expect(
        renderer
          .create(
            <Tabs>
              <Tab title="example">
                <p>Example text</p>
              </Tab>
            </Tabs>
          )
          .toJSON()
      ).toMatchSnapshot();
    });
  });

  describe('Active Tab', () => {
    const firstText = 'First text';
    const secondText = 'Second text';
    const MountedTab = mount(
      <Tabs>
        <Tab title="first">
          <p>{firstText}</p>
        </Tab>
        <Tab title="Second">
          <p>{secondText}</p>
        </Tab>
      </Tabs>
    );

    it('should have first Tab active', () => {
      expect(MountedTab.find('NavContainer').text()).toBe(firstText);
    });

    it('should active second Tab when Tab is clicked', () => {
      expect(MountedTab.find('NavContainer').text()).toBe(firstText);

      MountedTab.find('Tab')
        .at(1)
        .simulate('click');

      expect(MountedTab.find('NavContainer').text()).toBe(secondText);
    });
  });
});

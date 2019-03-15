import React from 'react';
import List from './List';
import renderer from 'react-test-renderer';

describe('<List />', () => {
  describe('Snapshots', () => {
    it('should match snapshot', () => {
      expect(
        renderer
          .create(
            <List>
              <List.Item icon="folder_exe2">
                <List>
                  <List.Item icon="microsoft_exchange">
                    Microsoft Exchange
                  </List.Item>
                  <List.Divider />
                  <List.Item icon="windows_explorer">
                    Windows Explorer
                  </List.Item>
                </List>
                Programs
              </List.Item>
            </List>
          )
          .toJSON()
      ).toMatchSnapshot();
    });
  });
});

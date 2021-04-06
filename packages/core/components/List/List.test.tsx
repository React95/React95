import React from 'react';
import { waitRender } from '../shared/test/utils';
import List from './List';

describe('<List />', () => {
  describe('Snapshots', () => {
    it('should match snapshot', async () => {
      const { container } = await waitRender(
        <List>
          <List.Item icon="folder_exe2_32x32_4bit">
            <List>
              <List.Item icon="microsoft_exchange_32x32_4bit">
                Microsoft Exchange
              </List.Item>
              <List.Divider />
              <List.Item icon="windows_explorer_32x32_4bit">
                Windows Explorer
              </List.Item>
            </List>
            Programs
          </List.Item>
        </List>,
      );
      expect(container).toMatchSnapshot();
    });
  });
});

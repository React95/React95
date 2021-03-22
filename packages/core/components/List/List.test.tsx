import React from 'react';
import {
  IconFolderExe2,
  IconMicrosoftExchange,
  IconWindowsExplorer,
} from '@react95/icons';
import { waitRender } from '../shared/test/utils';
import List from './List';

describe('<List />', () => {
  describe('Snapshots', () => {
    it('should match snapshot', async () => {
      const { container } = await waitRender(
        <List>
          <List.Item icon={<IconFolderExe2 />}>
            <List>
              <List.Item icon={<IconMicrosoftExchange />}>
                Microsoft Exchange
              </List.Item>
              <List.Divider />
              <List.Item icon={<IconWindowsExplorer />}>
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

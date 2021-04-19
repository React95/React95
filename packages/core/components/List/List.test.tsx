import React from 'react';
import {
  FolderExe2,
  MicrosoftExchange,
  WindowsExplorer,
} from '@react95/icons';
import { waitRender } from '../shared/test/utils';
import List from './List';

describe('<List />', () => {
  describe('Snapshots', () => {
    it('should match snapshot', async () => {
      const { container } = await waitRender(
        <List>
          <List.Item icon={<FolderExe2 />}>
            <List>
              <List.Item icon={<MicrosoftExchange />}>
                Microsoft Exchange
              </List.Item>
              <List.Divider />
              <List.Item icon={<WindowsExplorer />}>
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

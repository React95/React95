import React from 'react';
import { Bat } from '@react95/icons';

import { waitRender } from '../shared/test/utils';

import TitleBar from './TitleBar';

describe('<TitleBar />', () => {
  describe('Snapshot', () => {
    it('should match snapshot', async () => {
      const { container } = await waitRender(
        <>
          <TitleBar title="test.exe" icon={<Bat />} isActive />
          <TitleBar title="test.exe" icon={<Bat />} isActive={false} />
          <TitleBar isActive />
          <TitleBar isActive={false} />
        </>,
      );

      expect(container).toMatchSnapshot();
    });

    it('should match snapshot with all Options', async () => {
      const { container } = await waitRender(
        <TitleBar title="test.exe" icon={<Bat />} isActive>
          <TitleBar.OptionsBox>
            <TitleBar.OptionItem>
              <TitleBar.Option>?</TitleBar.Option>
            </TitleBar.OptionItem>
            <TitleBar.OptionItem>
              <TitleBar.Option>x</TitleBar.Option>
            </TitleBar.OptionItem>
          </TitleBar.OptionsBox>
        </TitleBar>,
      );

      expect(container).toMatchSnapshot();
    });
  });
});

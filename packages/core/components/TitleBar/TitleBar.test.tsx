import { Bat } from '@react95/icons';
import React from 'react';
import { describe, expect, it } from 'vitest';

import { waitRender } from '../shared/test/utils';

import { TitleBar } from './TitleBar';

describe('<TitleBar />', () => {
  describe('Snapshot', () => {
    it('should match snapshot', async () => {
      const { container } = await waitRender(
        <>
          <TitleBar title="test.exe" icon={<Bat />} active />
          <TitleBar title="test.exe" icon={<Bat />} active={false} />
          <TitleBar active />
          <TitleBar active={false} />
        </>,
      );

      expect(container).toMatchSnapshot();
    });

    it('should match snapshot with custom option', async () => {
      const { container } = await waitRender(
        <TitleBar title="test.exe" icon={<Bat />} active>
          <TitleBar.OptionsBox>
            <TitleBar.Option>?</TitleBar.Option>
            <TitleBar.Option>x</TitleBar.Option>
          </TitleBar.OptionsBox>
        </TitleBar>,
      );

      expect(container).toMatchSnapshot();
    });

    it('should match snapshot with default options', async () => {
      const { container } = await waitRender(
        <TitleBar title="test.exe" icon={<Bat />} active>
          <TitleBar.OptionsBox>
            <TitleBar.Help />
            <TitleBar.Maximize />
            <TitleBar.Minimize />
            <TitleBar.Restore />
            <TitleBar.Close />
          </TitleBar.OptionsBox>
        </TitleBar>,
      );

      expect(container).toMatchSnapshot();
    });
  });
});

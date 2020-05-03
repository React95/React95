import React from 'react';
import styled from 'styled-components';
import { storiesOf } from '@storybook/react';
import { Column, Table } from 'react-virtualized';
import 'react-virtualized/styles.css';

import icons from '@react95/icons';

import { Icon, Frame } from '../components';

const TableWrapper = styled.div`
  .ReactVirtualized__Table__row {
    border-bottom: 1px solid black;
  }

  .ReactVirtualized__Table__rowColumn {
    margin-right: 0;
  }

  .ReactVirtualized__Table__headerRow {
    border-bottom: 1px solid;
  }

  .ReactVirtualized__Table__headerColumn,
  .ReactVirtualized__Table__rowColumn {
    margin-left: 0;
    margin-right: 0;
    border-right: 1px solid;
    text-align: center;
  }
`;

const list = Object.keys(icons).map((icon) => ({
  name: icon,
}));

storiesOf('Icon', module).add('default', () => (
  <Frame p={4} width={875}>
    <p>
      As an{' '}
      <a href="https://en.wikipedia.org/wiki/ICO_(file_format)" target="_blank">
        ico file format
      </a>{' '}
      is, we have some sizes available for some icons. Here are some dimensions.
      There is some icons available in 256x256, like LIGHTS_99, that is not in
      this pretty visualization.
    </p>
    <p>We have, actually, {Object.keys(icons).length} icons:</p>
    <Frame bg="white" boxShadow="in" mt={4}>
      <TableWrapper>
        <Table
          width={868}
          height={700}
          headerHeight={20}
          headerStyle={{ padding: 4 }}
          rowHeight={130}
          rowCount={list.length}
          rowGetter={({ index }) => list[index]}
          rowStyle={{ alignItems: 'stretch' }}
        >
          <Column
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
            label="Name"
            dataKey="name"
            width={100}
          />
          <Column
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
            width={128}
            label={16}
            dataKey="name"
            cellRenderer={({ cellData }) => (
              <Icon
                size={16}
                width={16}
                height={16}
                name={cellData}
                style={{ display: 'inline-block' }}
              />
            )}
          />

          <Column
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
            width={128}
            label={24}
            dataKey="name"
            cellRenderer={({ cellData }) => (
              <Icon
                size={24}
                width={24}
                height={24}
                name={cellData}
                style={{ display: 'inline-block' }}
              />
            )}
          />
          <Column
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
            width={128}
            label={32}
            dataKey="name"
            cellRenderer={({ cellData }) => (
              <Icon
                size={32}
                width={32}
                height={32}
                name={cellData}
                style={{ display: 'inline-block' }}
              />
            )}
          />
          <Column
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
            width={128}
            label={48}
            dataKey="name"
            cellRenderer={({ cellData }) => (
              <Icon
                size={48}
                width={48}
                height={48}
                name={cellData}
                style={{ display: 'inline-block' }}
              />
            )}
          />
          <Column
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
            width={128}
            label={64}
            dataKey="name"
            cellRenderer={({ cellData }) => (
              <Icon
                size={64}
                width={64}
                height={64}
                name={cellData}
                style={{ display: 'inline-block' }}
              />
            )}
          />
          <Column
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
            width={128}
            label={128}
            dataKey="name"
            cellRenderer={({ cellData }) => (
              <Icon
                size={128}
                width={128}
                height={128}
                name={cellData}
                style={{ display: 'inline-block' }}
              />
            )}
          />
        </Table>
      </TableWrapper>
    </Frame>
  </Frame>
));

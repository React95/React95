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
`;

const list = Object.keys(icons).map((icon) => ({
  name: icon,
}));

storiesOf('Icon', module).add('default', () => (
  <Frame p={4} width={387}>
    As an{' '}
    <a href="https://en.wikipedia.org/wiki/ICO_(file_format)" target="_blank">
      ico file format
    </a>{' '}
    is, we have some sizes available for some icons. Here are only 16x16 and
    32x32 dimensions (due performance issues) for our{' '}
    {Object.keys(icons).length} icons:
    <Frame bg="white" boxShadow="in" mt={4}>
      <TableWrapper>
        <Table
          width={380}
          height={700}
          headerHeight={20}
          rowHeight={130}
          rowCount={list.length}
          rowGetter={({ index }) => list[index]}
        >
          <Column label="Name" dataKey="name" width={100} />
          <Column
            width={32}
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
            width={32}
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
            width={64}
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

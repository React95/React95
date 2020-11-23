import * as React from 'react';
import { Meta } from '@storybook/react/types-6-0';
import styled from 'styled-components';
import icons from '@react95/icons';
import { Column, Table } from 'react-virtualized';
import 'react-virtualized/styles.css';

import { Icon, Frame, Tabs, Tab } from '../components';

import iconsSizes from './icons.stories.data';
import { IconProps } from '../components/Icon/Icon';

const list = Object.keys(icons).map(icon => ({
  name: icon,
}));

const availableSizesByName = iconsSizes.reduce((keyedData, iconData) => {
  const newData = {
    ...keyedData,
    ...iconData,
  };
  return newData;
}, {});

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

const AllIconsName = styled.span`
  display: inline-block;
  width: 130px;
  text-align: right;
  margin-right: 4px;
`;

export default {
  title: 'Icon',
  component: Icon,
} as Meta;

export const All = () => (
  <Tabs style={{ width: 892 }} defaultActiveTab="Icons table">
    <Tab title="Icons table">
      <p>
        As an{' '}
        <a
          href="https://en.wikipedia.org/wiki/ICO_(file_format)"
          target="_blank"
          rel="noopener noreferrer"
        >
          ico file format
        </a>{' '}
        is, we have some sizes available for some icons. Here are some
        dimensions. There is some icons available in 256x256, like lights_99,
        that is not in this pretty visualization.
      </p>
      <p>We have, currently, {Object.keys(icons).length} icons:</p>
      <Frame bg="white" boxShadow="in" mt={4}>
        <TableWrapper>
          <Table
            width={868}
            height={600}
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
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
              }}
              label="Name"
              dataKey="name"
              width={100}
              cellRenderer={({ cellData }) => {
                const cellIcon: Array<Partial<IconProps>> =
                  availableSizesByName[cellData];

                return (
                  <>
                    <span>{cellData}</span>
                    <p style={{ display: 'flex', flexDirection: 'column' }}>
                      <span>
                        sizes: ({cellIcon.map(s => s.size).join(', ')})
                      </span>
                      <span>bpp: ({cellIcon.map(s => s.bpp).join(', ')})</span>
                      <span>
                        variant: ({cellIcon.map(s => s.variant).join(', ')})
                      </span>
                    </p>
                  </>
                );
              }}
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
                  fallback={false}
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
                  fallback={false}
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
                  fallback={false}
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
                  fallback={false}
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
                  fallback={false}
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
                  fallback={false}
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
    </Tab>
    <Tab title="All Icons (laggy)">
      <Frame overflow="auto" boxShadow="none" height="calc(100vh - 80px)">
        {iconsSizes.map(iconDef => {
          const [[name, sizes]] = Object.entries(iconDef);

          return (
            <div key={name} style={{ marginTop: 4 }}>
              <AllIconsName>{name}:</AllIconsName>
              {sizes!.map(({ size, bpp, variant }) => (
                <Icon
                  key={`${name}-${size}-${bpp}-${variant}`}
                  bpp={bpp}
                  name={name as IconProps['name']}
                  size={size}
                  variant={variant}
                  style={{ display: 'inline-block', marginRight: 4 }}
                  title={`${name} icon in ${size}x${size}px with ${bpp} bits per pixel and variant ${variant}`}
                />
              ))}
            </div>
          );
        })}
      </Frame>
    </Tab>
  </Tabs>
);

All.parameters = {
  design: {
    type: 'figma',
    url:
      'https://www.figma.com/file/2cbigNitjcruBDZT12ixIq/React95-Design-Kit?node-id=4%3A35',
  },
};

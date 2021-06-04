import styled from '@xstyled/styled-components';
import { th } from '@xstyled/system';

import ListItem from './ListItem';
import Divider from './ListDivider';

type ListProps = {
  width?: number;
};

const StyledList = styled.ul<ListProps>`
  background-color: material;
  padding: 5 20 6;
  border: none;

  margin: 0;
  padding: 2;
  list-style: none;

  box-shadow: inset 1px 1px 0px 1px ${th('colors.borderLightest')},
    inset 0 0 0 1px ${th('colors.borderDark')},
    1px 1px 0 1px ${th('colors.borderDarkest')};

  ${({ width }) => `
    width: ${width}px;
  `};
`;

export type IListProps = typeof StyledList & {
  Item: typeof ListItem;
  Divider: typeof Divider;
};

const List: IListProps = Object.assign(StyledList, {
  Item: ListItem,
  Divider: Divider,
});

List.displayName = 'List';

List.defaultProps = {
  width: 200,
};

export default List;

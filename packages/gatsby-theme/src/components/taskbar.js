import React from 'react';
import { Link } from 'gatsby';
import { TaskBar as R95TaskBar, List } from '@react95/core';
import * as R95Icons from '@react95/icons';

import { isEmpty } from '../utils';

const NavList = ({ nav }) => (
  <List>
    {Object.values(nav).map(({ slug, icon = {}, title, ...restNavs }) => {
      const IconRenderer = R95Icons[icon?.name] || R95Icons.BatExec;
      const variant = icon?.variant || undefined;

      if (!isEmpty(restNavs)) {
        return (
          <List.Item key={slug} icon={<IconRenderer variant={variant} />}>
            {title}
            <NavList nav={restNavs} />
          </List.Item>
        );
      }

      return (
        <List.Item
          as={Link}
          to={`/${slug}`}
          key={slug}
          icon={<IconRenderer variant={variant} />}
        >
          {title}
        </List.Item>
      );
    })}
  </List>
);

const TaskBar = ({ nav }) => <R95TaskBar list={<NavList nav={nav} />} />;

export default TaskBar;

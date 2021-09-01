import React from 'react';
import { navigate } from 'gatsby';
import { TaskBar as R95TaskBar, List } from '@react95/core';

import { isEmpty } from '../utils';
import IconRenderer from './icon-renderer';

const NavList = ({ nav }) => (
  <List>
    {Object.values(nav).map(({ slug, icon = {}, title, ...restNavs }) => {
      if (!isEmpty(restNavs)) {
        return (
          <List.Item key={slug} icon={<IconRenderer {...icon} />}>
            {title}
            <NavList nav={restNavs} />
          </List.Item>
        );
      }

      return (
        <List.Item
          key={slug}
          onClick={() => navigate(`/${slug}`)}
          icon={<IconRenderer {...icon} />}
          role="button"
        >
          {title}
        </List.Item>
      );
    })}
  </List>
);

const TaskBar = ({ nav }) => <R95TaskBar list={<NavList nav={nav} />} />;

export default TaskBar;

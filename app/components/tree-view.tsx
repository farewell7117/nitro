import * as React from 'react';

import List from '@material-ui/core/List';
import ListSubheader from '@material-ui/core/ListSubheader';

import { Post, Groups } from '../models/post';
import { Map } from '../models/common';

import { TreeViewItem } from './tree-view-item';

import { timeToLocalDateFormat } from '../utils/date';

interface TreeViewProps {
  groups: Groups;
}

const getKey = (group: Post[]) => group[0].id;

const formatKey = (keys: number[]) => keys
  .map(timeToLocalDateFormat)
  .join(' : ');

const TreeViewHeader: React.FC<{text: string}> = ({ text }) => (
  <ListSubheader>{text}</ListSubheader>
);

export const TreeView: React.FC<TreeViewProps> = ({ groups }) => {
  const [expandable, expand] = React.useState<Map<boolean>>({});

  const handleClick = (id: number) => expand({
    ...expandable,
    [id]: !expandable[id],
  });

  return (
    <>
      {groups.groups.map((group: Post[], i) => (
        <List
          subheader={<TreeViewHeader text={formatKey(groups.keys[i])} />}
          key={getKey(group)}
        >
          {group.map((post: Post) => (
            <TreeViewItem
              post={post}
              expand={expandable[post.id] === true}
              key={post.id}
              onClick={handleClick}
            />
          ))}
        </List>
      ))}
    </>
  );
};

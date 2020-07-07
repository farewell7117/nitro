import * as React from 'react';

import List from '@material-ui/core/List';
import ListSubheader from '@material-ui/core/ListSubheader';

import { Post, TreeView as ITreeView } from '../models/post';
import { Map } from '../models/common';

import { TreeViewItem } from './tree-view-item';

interface TreeViewProps {
  groups: ITreeView;
  onChange: (postId: number, key: 'location' | 'author', val: string) => any;
}

const TreeViewHeader: React.FC<{text: string}> = ({ text }) => (
  <ListSubheader>{text}</ListSubheader>
);

export const TreeView: React.FC<TreeViewProps> = ({ groups, onChange: handleChange }) => {
  const [expandable, expand] = React.useState<Map<boolean>>({});

  const handleClick = (id: number) => expand({
    ...expandable,
    [id]: !expandable[id],
  });

  return (
    <>
      {groups.items.map((group: Post[], i) => (
        <List
          subheader={<TreeViewHeader text={groups.keys[i]} />}
          key={groups.keys[i]}
        >
          {group.map((post: Post) => (
            <TreeViewItem
              post={post}
              expand={expandable[post.id] === true}
              key={post.id}
              onClick={handleClick}
              onChange={handleChange}
            />
          ))}
        </List>
      ))}
    </>
  );
};

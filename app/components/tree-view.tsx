import * as React from 'react';

import List from '@material-ui/core/List';
import ListSubheader from '@material-ui/core/ListSubheader';

import { SortType, Post, TreeView as ITreeView } from '../models/post';
import { Map } from '../models/common';

import { TreeViewItem } from './tree-view-item';

import { group } from '../utils/group';

interface TreeViewProps {
  posts: Post[];
  sortType: SortType;
  onChange: (postId: number, key: 'location' | 'author', val: string) => any;
}

const TreeViewHeader: React.FC<{text: string}> = ({ text }) => (
  <ListSubheader>{text}</ListSubheader>
);

export const TreeView: React.FC<TreeViewProps> = ({ posts, sortType, onChange }) => {
  const [expandable, expand] = React.useState<Map<boolean>>({});
  const [groups, setGroups] = React.useState<ITreeView>(group(posts, sortType));
  const [currentType, setSortType] = React.useState<SortType>(sortType);

  const handleClick = (id: number) => expand({
    ...expandable,
    [id]: !expandable[id],
  });

  const handleChange = (postId: number, key: 'location' | 'author', val: string) => {
    const items = groups.items.map(
      (g) => g.map((p) => {
        if (p.id === postId) {
          return {
            ...p,
            [key]: val,
          };
        }

        return p;
      }),
    );

    setGroups({
      ...groups,
      items,
    });

    onChange(postId, key, val);
  };

  if (currentType !== sortType) {
    setGroups(group(posts, sortType));
    setSortType(sortType);
  }

  return (
    <>
      {groups.items.map((g: Post[], i) => (
        <List
          subheader={<TreeViewHeader text={groups.keys[i]} />}
          key={groups.keys[i]}
        >
          {g.map((post: Post) => (
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

import * as React from 'react';

import { Post } from '../models/post';

import { TreeViewItem } from './tree-view-item';

interface TreeViewProps {
  posts: Post[];
}

export const TreeView: React.FC<TreeViewProps> = ({ posts }) => (
  <ul>
    {posts.map((post) => <li key={post.id}><TreeViewItem post={post} /></li>)}
  </ul>
);

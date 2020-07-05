import * as React from 'react';

import { Post } from '../models/post';

interface TreeViewItemProps {
    post: Post;
}

export const TreeViewItem: React.FC<TreeViewItemProps> = ({ post }) => (
  <>{`${post.week[0]} - ${post.week[1]}`}</>
);

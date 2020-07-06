import { Post, Groups } from '../models/post';

import { calculateWeek } from './date';

export type Method = 'week' | 'author' | 'location';

const groupByWeek = (posts: Post[]): Groups => posts.reduce((res, post) => {
  const group = res.groups.find((_, i) => {
    const [start, end] = res.keys[i];

    return post.time >= start && post.time <= end;
  });

  if (group === undefined) {
    res.groups.push([post]);
    res.keys.push(calculateWeek(post.time));
  } else {
    group.push(post);
  }

  return res;
}, {
  groups: [],
  keys: [],
});

export const groupBy = (posts: Post[], method: Method) => {
  switch (method) {
    case 'week':
      return groupByWeek(posts);
    case 'author':
      throw new Error('Not implemented!');
    case 'location':
      throw new Error('Not implemented!');
    default:
      throw new Error('Not implemented!');
  }
};

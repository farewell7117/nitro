import { SortType, Post, TreeView } from '../models/post';

import { calculateWeek, timeToLocalDateFormat } from './date';

const groupByWeek = (posts: Post[]): TreeView => posts.reduce((res: TreeView, post: Post) => {
  const group = res.items.find(([p]) => {
    const [start, end] = calculateWeek(p.time);

    return post.time >= start && post.time <= end;
  });

  if (group === undefined) {
    const [start] = calculateWeek(post.time);

    res.items.push([post]);
    res.keys.push(timeToLocalDateFormat(start));
  } else {
    group.push(post);
  }

  return res;
}, { items: [], keys: [] });

const groupByAuthor = (posts: Post[]): TreeView => posts.reduce((res: TreeView, post: Post) => {
  const group = res.items.find(([p]) => p.author === post.author);

  if (group === undefined) {
    res.items.push([post]);
    res.keys.push(post.author);
  } else {
    group.push(post);
  }

  return res;
}, { items: [], keys: [] });

const groupByLocation = (posts: Post[]): TreeView => posts.reduce((res: TreeView, post: Post) => {
  const group = res.items.find(([p]) => p.location.toLowerCase() === post.location.toLowerCase());

  if (group === undefined) {
    res.items.push([post]);
    res.keys.push(post.location);
  } else {
    group.push(post);
  }

  return res;
}, { items: [], keys: [] });

export const group = (posts: Post[], method: SortType) => {
  switch (method) {
    case 'week':
      return groupByWeek(posts);
    case 'location':
      return groupByLocation(posts);
    case 'author':
      return groupByAuthor(posts);
    default:
      throw new Error('Not implemented!');
  }
};

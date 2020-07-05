import { Post } from '../models/post';

export const calculateWeek = (post: Post): [number, number] => {
  const d = new Date(Number(post.time) * 1000);
  const [year, month, date, day] = [d.getFullYear(), d.getMonth(), d.getDate(), d.getDay()];

  const startDate = new Date(year, month, date - day + 1);
  const endDate = new Date(year, month, date - day + 7, 23, 59, 59, 999);

  return [startDate.getTime(), endDate.getTime()];
};

export const preprocess = (posts: any[]): Post[] => posts.map((post) => ({
  ...post,
  week: calculateWeek(post),
}));

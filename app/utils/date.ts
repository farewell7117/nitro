import { Post } from '../models/post';

export const preprocess = (posts: any[]): Post[] => posts.map((post) => ({
  ...post,
  time: Number(post.time) * 1000,
}));

export const calculateWeek = (time: number): [number, number] => {
  const d = new Date(time);
  const [year, month, date, day] = [d.getFullYear(), d.getMonth(), d.getDate(), d.getDay()];

  const startDate = new Date(year, month, date - day + 1); // Monday
  const endDate = new Date(year, month, date - day + 7, 23, 59, 59, 999); // Sunday

  return [startDate.getTime(), endDate.getTime()];
};

export const timeToLocalDateFormat = (time: number) => (new Date(time)).toLocaleDateString();

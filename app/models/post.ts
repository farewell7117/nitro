export type SortType = 'week' | 'author' | 'location';

export interface Post {
  id: number;
  time: number;
  location: string;
  author: string;
  text: string;
}

export interface TreeView {
  items: Post[][];
  keys: string[];
}

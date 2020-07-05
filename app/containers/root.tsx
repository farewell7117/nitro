import * as React from 'react';

import { Post } from '../models/post';

import { TreeView } from '../components/tree-view';

import { useEffectAsync } from '../utils/hooks';
import { preprocess } from '../utils/date';

export const Root: React.FC = () => {
  const [isLoading, setLoadingFlag] = React.useState(false);
  const [posts, setPosts] = React.useState<Post[]>([]);

  useEffectAsync(async () => {
    try {
      setLoadingFlag(true);

      const response = await fetch('http://localhost:3000/posts');

      setPosts(response.ok ? preprocess(await response.json()) : null);
    } catch {
      setPosts(null);
    } finally {
      setLoadingFlag(false);
    }
  }, []);

  if (isLoading) {
    return (
      <>Loading.</>
    );
  }

  if (posts === null) {
    return (
      <>No data available.</>
    );
  }

  return (
    <>
      <TreeView posts={posts} />
    </>
  );
};

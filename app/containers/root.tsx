import * as React from 'react';

import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';

import { SortType, Post } from '../models/post';

import { Select } from '../components/select';
import { TreeView } from '../components/tree-view';

import { useEffectAsync } from '../utils/hooks';
import { preprocess } from '../utils/date';
import { group } from '../utils/group';

export const Root: React.FC = () => {
  const [isLoading, setLoadingFlag] = React.useState(false);
  const [posts, setPosts] = React.useState<Post[]>([]);
  const [sortType, setSortType] = React.useState<SortType>('week');

  const handlePostChange = (postId: number, key: 'location' | 'author', val: string) => setPosts(
    posts.map((p) => {
      if (p.id === postId) {
        return {
          ...p,
          [key]: val,
        };
      }
      return {
        ...p,
      };
    }),
  );

  const handleSortTypeChange = (val: SortType) => setSortType(val);

  useEffectAsync(async () => {
    try {
      setLoadingFlag(true);

      const response = await fetch('http://localhost:3000/posts');
      const result = response.ok ? preprocess(await response.json()) : null;

      setPosts(result);
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
      <>No data available. Make sure you have run your server.</>
    );
  }

  return (
    <>
      <CssBaseline />
      <Grid container spacing={2}>
        <Grid item xs>
          <TreeView groups={group(posts, sortType)} onChange={handlePostChange} />
        </Grid>
        <Grid item xs>
          <Select
            types={['week', 'location', 'author']}
            active={sortType}
            onChange={handleSortTypeChange}
          />
        </Grid>
      </Grid>
    </>
  );
};

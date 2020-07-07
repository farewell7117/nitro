import * as React from 'react';

import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';

import { Post } from '../models/post';
import { SortType } from '../models/common';

import { Select } from '../components/select';
import { TreeView } from '../components/tree-view';

import { useEffectAsync } from '../utils/hooks';
import { preprocess } from '../utils/date';
import { groupBy } from '../utils/group';

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
      <CssBaseline />
      <Grid container spacing={2}>
        <Grid item xs>
          <TreeView groups={groupBy(posts, sortType)} onChange={handlePostChange} />
        </Grid>
        <Grid item xs>
          <Select
            types={['week', 'author', 'location']}
            active={sortType}
            onChange={handleSortTypeChange}
          />
        </Grid>
      </Grid>
    </>
  );
};

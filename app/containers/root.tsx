import * as React from 'react';

import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';

import { SortType, TreeView as ITreeView } from '../models/post';

import { Select } from '../components/select';
import { TreeView } from '../components/tree-view';

import { useEffectAsync } from '../utils/hooks';
import { preprocess } from '../utils/date';
import { group, regroup } from '../utils/group';

export const Root: React.FC = () => {
  const [isLoading, setLoadingFlag] = React.useState(false);
  const [groups, setGroups] = React.useState<ITreeView>({ items: [], keys: [] });
  const [sortType, setSortType] = React.useState<SortType>('week');

  const handlePostChange = (postId: number, key: 'location' | 'author', val: string) => {
    const items = groups.items.map(
      (g) => g.map((p) => {
        if (p.id === postId) {
          return {
            ...p,
            [key]: val,
          };
        }

        return p;
      }),
    );

    setGroups({
      ...groups,
      items,
    });
  };

  const handleSortTypeChange = (val: SortType) => {
    setGroups(regroup(groups, val));
    setSortType(val);
  };

  useEffectAsync(async () => {
    try {
      setLoadingFlag(true);

      const response = await fetch('http://localhost:3000/posts');

      if (response.ok) {
        const result = preprocess(await response.json());

        setGroups(group(result, sortType));
      } else {
        setGroups(null);
      }
    } catch {
      setGroups(null);
    } finally {
      setLoadingFlag(false);
    }
  }, []);

  if (isLoading) {
    return (
      <>Loading.</>
    );
  }

  if (groups === null) {
    return (
      <>No data available. Make sure you have run your server.</>
    );
  }

  return (
    <>
      <CssBaseline />
      <Grid container spacing={2}>
        <Grid item xs>
          <TreeView groups={groups} onChange={handlePostChange} />
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

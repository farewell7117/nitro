import * as React from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';

import Paper from '@material-ui/core/Paper';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';

import { Post } from '../models/post';

import { TreeViewItemDetails } from './tree-view-item-details';

interface TreeViewItemProps {
    post: Post;
    expand: boolean;
    onClick: (id: number) => any;
    onChange: (postId: number, key: 'location' | 'author', val: string) => any;
}

const useStyles = makeStyles(() => createStyles({
  listItem: {
    cursor: 'pointer',
  },
  paper: {
    '& + &': {
      marginTop: 5,
    },
  },
  nested: {
    paddingLeft: 72,
  },
}));

export const TreeViewItem: React.FC<TreeViewItemProps> = ({
  post, expand, onClick, onChange,
}) => {
  const classes = useStyles();

  const handleClick = () => onClick(post.id);
  const handleChange = (key: 'location' | 'author', val: string) => onChange(post.id, key, val);

  return (
    <>
      <Paper className={classes.paper}>
        <ListItem className={classes.listItem} onClick={handleClick}>
          <ListItemIcon>
            {expand ? <ExpandLess /> : <ExpandMore />}
          </ListItemIcon>
          <ListItemText>{post.text}</ListItemText>
        </ListItem>
        <Collapse in={expand} timeout="auto" unmountOnExit>
          <List>
            <ListItem className={classes.nested}>
              <TreeViewItemDetails post={post} onChange={handleChange} />
            </ListItem>
          </List>
        </Collapse>
      </Paper>
    </>
  );
};

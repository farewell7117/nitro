import * as React from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';

import Paper from '@material-ui/core/Paper';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MessageIcon from '@material-ui/icons/Message';

import { Post } from '../models/post';

interface TreeViewItemProps {
    post: Post;
    expand: boolean;
    onClick: (id: number) => any;
}

const useStyles = makeStyles(() => createStyles({
  paper: {
    cursor: 'pointer',
    '& + &': {
      marginTop: 5,
    },
  },
}));

export const TreeViewItem: React.FC<TreeViewItemProps> = ({ post, expand, onClick }) => {
  const classes = useStyles();
  const handleClick = () => onClick(post.id);

  return (
    <>
      <Paper
        className={classes.paper}
        onClick={handleClick}
      >
        <ListItem>
          <ListItemIcon>
            <MessageIcon />
          </ListItemIcon>
          <ListItemText>{post.text}</ListItemText>
        </ListItem>
        {expand && <div>1</div>}
      </Paper>
    </>
  );
};

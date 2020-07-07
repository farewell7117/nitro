import * as React from 'react';

import { makeStyles, createStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';

import { Post } from '../models/post';

import { timeToLocalDateFormat } from '../utils/date';

interface TreeViewItemDetailsProps {
    post: Post;
}

const useStyles = makeStyles(() => createStyles({
  formControl: {
    '& + &': {
      marginLeft: 5,
    },
  },
}));

export const TreeViewItemDetails: React.FC<TreeViewItemDetailsProps> = ({ post }) => {
  const classes = useStyles();

  return (
    <>
      <FormControl className={classes.formControl}>
        <InputLabel htmlFor={`time-input-${post.id}`}>Time</InputLabel>
        <Input id={`time-input-${post.id}`} value={timeToLocalDateFormat(post.time)} disabled />
      </FormControl>
      <FormControl className={classes.formControl}>
        <InputLabel htmlFor={`location-input-${post.id}`}>Location</InputLabel>
        <Input id={`location-input-${post.id}`} value={post.location} />
      </FormControl>
      <FormControl className={classes.formControl}>
        <InputLabel htmlFor={`author-input-${post.id}`}>Author</InputLabel>
        <Input id={`author-input-${post.id}`} value={post.author} />
      </FormControl>
    </>
  );
};

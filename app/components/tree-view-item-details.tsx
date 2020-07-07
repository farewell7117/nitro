import * as React from 'react';

import { makeStyles, createStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';

import { Post } from '../models/post';

import { timeToLocalDateFormat } from '../utils/date';

interface TreeViewItemDetailsProps {
    post: Post;
    onChange: (key: 'location' | 'author', val: string) => any;
}

const useStyles = makeStyles(() => createStyles({
  formControl: {
    '& + &': {
      marginLeft: 5,
    },
  },
}));

export const TreeViewItemDetails: React.FC<TreeViewItemDetailsProps> = ({
  post: outerPost, onChange,
}) => {
  const classes = useStyles();

  const [post, setPost] = React.useState<Post>(outerPost);

  const handleLocationChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => setPost({
    ...post,
    location: event.target.value,
  });

  const handleAuthorChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => setPost({
    ...post,
    author: event.target.value,
  });

  const handleLocationBlur = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => onChange('location', event.target.value);
  const handleAuthorBlur = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => onChange('author', event.target.value);

  return (
    <>
      <FormControl className={classes.formControl}>
        <InputLabel htmlFor={`time-input-${post.id}`}>Time</InputLabel>
        <Input id={`time-input-${post.id}`} value={timeToLocalDateFormat(post.time)} disabled />
      </FormControl>
      <FormControl className={classes.formControl}>
        <InputLabel htmlFor={`location-input-${post.id}`}>Location</InputLabel>
        <Input
          id={`location-input-${post.id}`}
          value={post.location}
          onChange={handleLocationChange}
          onBlur={handleLocationBlur}
        />
      </FormControl>
      <FormControl className={classes.formControl}>
        <InputLabel htmlFor={`author-input-${post.id}`}>Author</InputLabel>
        <Input
          id={`author-input-${post.id}`}
          value={post.author}
          onChange={handleAuthorChange}
          onBlur={handleAuthorBlur}
        />
      </FormControl>
    </>
  );
};

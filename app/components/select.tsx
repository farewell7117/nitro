import * as React from 'react';

import Typography from '@material-ui/core/Typography';
// eslint-disable-next-line import/no-named-default
import { default as MaterialSelect } from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

import { SortType } from '../models/post';

interface SelectProps {
    types: SortType[];
    active: SortType;
    onChange: (val: SortType) => any;
}

export const Select: React.FC<SelectProps> = ({ types, active, onChange }) => {
  const handleChange = (
    event: React.ChangeEvent<{value: SortType}>,
  ) => onChange(event.target.value);

  return (
    <>
      <Typography display="inline">Sort by: </Typography>
      <MaterialSelect
        autoWidth
        value={active}
        onChange={handleChange}
      >
        {types.map((type) => (
          <MenuItem value={type} key={type}>{type}</MenuItem>
        ))}
      </MaterialSelect>
    </>
  );
};

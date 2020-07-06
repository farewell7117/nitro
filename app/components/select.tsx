import * as React from 'react';

// eslint-disable-next-line import/no-named-default
import { default as MaterialSelect } from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

import { Method } from '../utils/group';

interface SelectProps {
    methods: string[];
    active: Method;
}

export const Select: React.FC<SelectProps> = ({ methods, active }) => (
  <MaterialSelect autoWidth value={active}>
    {methods.map((method) => (
      <MenuItem value={method} key={method}>{`By ${method}`}</MenuItem>
    ))}
  </MaterialSelect>
);

import React from 'react';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import { styled } from '@mui/material/styles';

const StyledDropdownSelect = styled(Select)({
  borderRadius: 50,
  backgroundColor: 'purple',
  padding: '5px 10px',
  color: 'white',

  '& .MuiSelect-select': {
    color: 'white',
    padding: '5px 10px'
  },

  '& .MuiSvgIcon-root': {
    color: 'red',
  },

  '&:hover .MuiOutlinedInput-notchedOutline': {
    borderColor: 'blue',
  },
  '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
    borderColor: 'red',
  },
});

const DropdownMenuItem = styled(MenuItem)({
  backgroundColor: 'navy',
  color: 'yellow',
  '&:hover': {
    backgroundColor: 'red',
    color: 'black',
  },
  '&.Mui-selected': {
    backgroundColor: 'green',
    color: 'white',
    '&:hover': {
      backgroundColor: 'darkgreen',
      color: 'white',
    },
  },
  '&.Mui-focusVisible': {
    backgroundColor: 'orange',
    color: 'black',
  },
});

const MenuProps = {
  PaperProps: {
    style: {
      backgroundColor: 'navy',
      margin: 0,
    },
  },
  MenuListProps: {
    sx: {
      paddingTop: 0,
      paddingBottom: 0,
    },
  },
};

const Dropdown = ({ placeholder = 'Select an option', options = [] }) => (
  <StyledDropdownSelect
    displayEmpty
    renderValue={(selected) => (selected ? (selected as string) : placeholder)}
    MenuProps={MenuProps}
  >
    {options.map((option, index) => (
      <DropdownMenuItem key={index} value={option}>
        {option}
      </DropdownMenuItem>
    ))}
  </StyledDropdownSelect>
);

export default Dropdown;

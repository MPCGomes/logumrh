import React from 'react';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import { styled } from '@mui/material/styles';

const StyledDropdownSelect = styled(Select)({
  borderRadius: 50,
  outline: '1px solid #3a264040',
  backgroundColor: 'transparent',
  padding: '1px 20px',
  color: '#3a264070',
  
  '& .MuiOutlinedInput-notchedOutline': {
    border: 'none',
  },
  '&:hover .MuiOutlinedInput-notchedOutline': {
    border: 'none',
  },
  '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
    border: '2px solid #3a2640',
    outline: 'none',
  },
});


const DropdownMenuItem = styled(MenuItem)({
  backgroundColor: '#fff',
  color: '#3a2640',
  '&:hover': {
    backgroundColor: '#efedef',
    color: 'black',
  },
  '&.Mui-selected': {
    backgroundColor: '#E6E4E6',
    color: '#3a2640',
    '&:hover': {
      backgroundColor: '#E6E4E6',
      color: '#3a2640',
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

import React from 'react';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import { styled } from '@mui/material/styles';

interface DropdownProps {
  placeholder?: string;
  options: string[];
}

const StyledDropdownSelect = styled(Select)({
  borderRadius: 50,
  backgroundColor: '#fff',
  padding: '0px 12px',
  height: '44px',
  outline: 'none',
  border: '1px solid #3a264040',
  '& .MuiOutlinedInput-notchedOutline': {
    border: 'none',
  },
  '&:hover': {
    outline: '1px solid #3a264040',
  },
  '&.Mui-focused': {
    outline: '1px solid #3a264040',
  },
  '& .MuiSelect-select': {
    color: 'var(--text-color)',
  }
});

const DropdownMenuItem = styled(MenuItem)({
  backgroundColor: 'var(--background-color)',
  color: '#3a264040',
  outline: 'none',
  '&:hover': {
    backgroundColor: '#e6e4e6',
    color: 'var(--text-color)',
  },
  '&.Mui-selected': {
    backgroundColor: '#efedef',
    color: 'var(--text-color)',
    '&:hover': {
      backgroundColor: '#efedef',
    },
  },
  '&:focus': {
    backgroundColor: '#efedef',
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

const Dropdown: React.FC<DropdownProps> = ({ placeholder, options }) => (
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

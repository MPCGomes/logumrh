import React from 'react';
import InputBase from '@mui/material/InputBase';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import { styled } from '@mui/material/styles';

const StyledInputBase = styled(InputBase)({
  borderRadius: 50,
  backgroundColor: 'red',
  padding: '5px 15px',
  color: 'red',
  '& .MuiInputBase-input': {
    color: 'red',
    '&::placeholder': {
      color: 'red',
    },
  },
  '&:hover': {
    borderColor: '#3A2640',
  },
  '&.Mui-focused': {
    borderColor: '#3A2640',
  },
});

const StyledSelect = styled(Select)({
  borderRadius: 50,
  backgroundColor: 'rgba(58, 38, 64, 0.5)',
  padding: '5px 15px',
  color: '#FFFFFF',
  '& .MuiSelect-select': {
    color: '#FFFFFF',
    '&:focus': {
      backgroundColor: 'rgba(58, 38, 64, 0.5)',
    },
  },
  '&:hover .MuiOutlinedInput-notchedOutline': {
    borderColor: '#3A2640',
  },
  '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
    borderColor: '#3A2640',
  },
});

interface DropdownProps {
  placeholder: string;
  options: string[];
}

const Dropdown: React.FC<DropdownProps> = ({ placeholder = 'Select an option', options = [] }) => (
  <StyledSelect
    displayEmpty
    input={<StyledInputBase />}
    renderValue={(selected) => (selected ? (selected as string) : placeholder)}
  >
    {options.map((option, index) => (
      <MenuItem key={index} value={option}>
        {option}
      </MenuItem>
    ))}
  </StyledSelect>
);

export default Dropdown;

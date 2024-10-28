import React from 'react';
import InputBase from '@mui/material/InputBase';
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';
import { styled } from '@mui/material/styles';

const StyledInputBase = styled(InputBase)({
  width: '100%',
  borderRadius: 50,
  backgroundColor: 'rgba(58, 38, 64, 0.5)',
  padding: '5px 15px',
  color: '#FFFFFF',
  '& .MuiInputBase-input': {
    color: '#FFFFFF',
    '&::placeholder': {
      color: '#B0B0B0',
    },
  },
  '&:hover': {
    borderColor: '#3A2640',
  },
  '&.Mui-focused': {
    borderColor: '#3A2640',
  },
});

const SearchBar = ({ placeholder = 'Search...' }) => (
  <StyledInputBase
    startAdornment={
      <InputAdornment position="start">
        <SearchIcon style={{ color: '#B0B0B0' }} />
      </InputAdornment>
    }
    placeholder={placeholder}
  />
);

export default SearchBar;

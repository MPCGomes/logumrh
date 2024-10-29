import React from 'react';
import InputBase from '@mui/material/InputBase';
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';
import { styled } from '@mui/material/styles';

const StyledSearchInput = styled(InputBase)({
  width: '80%',
  borderRadius: 50,
  backgroundColor: '#3a264015',
  padding: '12px 20px',
  color: 'white',
  '& .MuiInputBase-input': {
    color: '#3a2640',
    '&::placeholder': {
      color: '#3a2640',
    },
  },
  '& .MuiSvgIcon-root': {
    color: '#3a2640',
  },
  '&:hover': {
    borderColor: 'blue',
  },
  '&.Mui-focused': {
    borderColor: 'green',
  },
});

interface SearchBarProps {
  placeholder?: string;
}

const SearchBar: React.FC<SearchBarProps> = ({ placeholder = 'Search...' }) => (
  <StyledSearchInput
    endAdornment={
      <InputAdornment position="end">
        <SearchIcon />
      </InputAdornment>
    }
    placeholder={placeholder}
  />
);

export default SearchBar;

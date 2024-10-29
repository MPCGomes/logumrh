import React from 'react';
import InputBase from '@mui/material/InputBase';
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';
import { styled } from '@mui/material/styles';

const StyledSearchInput = styled(InputBase)({
  width: '80%',
  borderRadius: 50,
  backgroundColor: 'purple',
  padding: '5px 15px',
  color: 'white',
  '& .MuiInputBase-input': {
    color: 'white',
    '&::placeholder': {
      color: 'gray',
    },
  },
  '& .MuiSvgIcon-root': {
    color: 'red',
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

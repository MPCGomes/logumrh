import React from 'react';
import InputBase from '@mui/material/InputBase';
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';
import { styled } from '@mui/material/styles';

const StyledSearchInput = styled(InputBase)({
  width: '100%',
  borderRadius: 50,
  border: '1px solid #3a264040',
  backgroundColor: '#fff',
  padding: '0px 12px',
  height: '44px',
  '& .MuiInputBase-input': {
    color: 'var(--text-color)',
    '&::placeholder': {
      color: 'var(--text-color)',
    },
  },
  '& .MuiSvgIcon-root': {
    color: '#3a264040',
  },
  '&.Mui-focused': {
    outline: '1px solid #3a264040',
  },
  '@media (min-width: 1024px)': {
    width: '80%'
  }
});

interface SearchBarProps {
  placeholder?: string;
}

const SearchBar: React.FC<SearchBarProps> = ({ placeholder }) => (
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

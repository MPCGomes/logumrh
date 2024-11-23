import React from 'react';
import InputBase from '@mui/material/InputBase';
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';
import { styled } from '@mui/material/styles';
import styles from './SearchBar.module.scss';

const StyledSearchInput = styled(InputBase)({
  width: '100%',
  borderRadius: 50,
  outline: '1px solid #3a264040',
  backgroundColor: '#fff',
  padding: '0px 24px',
  height: '44px',
  '& .MuiInputBase-input': {
    color: 'var(--text-color)',
    '&::placeholder': {
      color: 'var(--text-color)',
    },
  },
  '& .MuiSvgIcon-root': {
    color: '#3a2640',
  },
  '&.Mui-focused': {
    outline: '1px solid #3a2640',
    borderColor: 'var(--primary-color)',
  },
  '@media (min-width: 1024px)': {
    width: '80%'
  }
});

interface SearchBarProps {
  placeholder?: string;
}

const SearchBar: React.FC<SearchBarProps> = ({ placeholder = 'Search...' }) => (
  <StyledSearchInput
    endAdornment={
      <InputAdornment position="end">
        <SearchIcon className={styles.icon} />
      </InputAdornment>
    }
    placeholder={placeholder}
  />
);

export default SearchBar;

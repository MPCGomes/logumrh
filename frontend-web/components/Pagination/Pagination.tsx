import React from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';

const StyledPagination = styled(Pagination)(({}) => ({
  color: 'white', 

  '.MuiPaginationItem-root': {
    '&:hover': {
      color: '#3a2640',
      backgroundColor: '#ededef'
    },
  },
  
  '.Mui-selected': {
    color: '#3a2640', 
    fontWeight: 'bold',
    backgroundColor: '#E6E4E6'
  },
}));

interface CustomPaginationProps {
  totalPages: number;
  currentPage: number;
  onPageChange: (page: number) => void;
}

const CustomPagination: React.FC<CustomPaginationProps> = ({ totalPages, currentPage, onPageChange }) => {
  const handlePageChange = (event: React.ChangeEvent<unknown>, page: number) => {
    onPageChange(page);
  };

  return (
    <Stack spacing={2} direction="row" justifyContent="center" mt={4}>
      <StyledPagination
        size="large"
        count={totalPages}
        page={currentPage}
        onChange={handlePageChange}
        showFirstButton
        showLastButton
      />
    </Stack>
  );
};

export default CustomPagination;

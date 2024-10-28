import React from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';

const StyledPagination = styled(Pagination)(({ theme }) => ({
  color: 'red', 

  '.MuiPaginationItem-root': {
    '&:hover': {
      color: 'green',
      backgroundColor: 'pink'
    },
  },
  
  '.Mui-selected': {
    color: 'blue', 
    fontWeight: 'bold',
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

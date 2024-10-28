'use client'

import React from 'react';
import { styled } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import styles from './TextInput.module.scss';

interface InputProps {
  label: string;
}

const CustomTextField = styled(TextField)({
  width: '100%',
  '& .MuiFilledInput-root': {
    borderRadius: '10px',
    backgroundColor: '#3a264015',
    borderBottom: 'none',
    '&:before, &:after': {
      borderBottom: 'none',
    },
    '&:hover:before': {
      borderBottom: 'none',
    },
    '&:hover': {
      backgroundColor: '#3a264020',
      borderBottom: 'none',
    },
  },
  '& .MuiInputLabel-root': {
    color: '#3a2640',
  },
});

const TextInput: React.FC<InputProps> = ({ label }) => {
  return (
    <div className={styles.input}>
      <CustomTextField
        label={label}
        variant="filled"
      />
    </div>
  );
};

export default TextInput
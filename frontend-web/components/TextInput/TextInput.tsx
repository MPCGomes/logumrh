'use client'

import React from 'react';
import { styled } from '@mui/material/styles';
import TextField from '@mui/material/TextField';

interface InputProps {
  label: string;
}

const CustomTextField = styled(TextField)({
  width: '100%',
  '& .MuiOutlinedInput-root': { 
    borderRadius: '10px',
    '& fieldset': {
      borderColor: '#3a264040',
    },
    '&:hover fieldset': {
      borderColor: '#3a2640',
    },
    '&.Mui-focused fieldset': {
      borderColor: '#3a2640',
    },
  },
  '& .MuiInputLabel-root': {
    color: '#3a2640',
    '&.Mui-focused': {
      color: '#3a2640',
    },
    '&.MuiInputLabel-shrink': {
      color: '#3a2640',
    },
  },
});

const TextInput: React.FC<InputProps> = ({ label }) => {
  return (
    <div>
      <CustomTextField
        label={label}
        variant="outlined"
      />
    </div>
  );
};

export default TextInput;
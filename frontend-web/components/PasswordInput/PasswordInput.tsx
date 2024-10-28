'use client'

import { FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput } from '@mui/material';
import { styled } from '@mui/material/styles';
import React from 'react';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

interface PasswordInputProps {
  label: string;
}

const CustomFormControl = styled(FormControl)({
  width: '100%',
});

const CustomInputLabel = styled(InputLabel)({
  color: '#3a2640',
  '&.Mui-focused': {
    color: '#3a2640',
  },
  '&.MuiFormLabel-filled, &.MuiInputLabel-shrink': {
    transform: 'translate(14px, -10px) scale(0.8)', 
  },
});

const CustomOutlinedInput = styled(OutlinedInput)({
  '&.MuiOutlinedInput-root': {
    borderRadius: '10px',
    '& fieldset': {
      borderColor: '#3a2640',
    },
    '&:hover fieldset': {
      borderColor: '#3a2640',
    },
    '&.Mui-focused fieldset': {
      borderColor: '#3a2640',
    },
  },
});

const PasswordInput: React.FC<PasswordInputProps> = ({ label }) => {
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((prev) => !prev);

  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  return (
    <CustomFormControl variant="outlined">
      <CustomInputLabel htmlFor="outlined-adornment-password">{label}</CustomInputLabel>
      <CustomOutlinedInput
        id="outlined-adornment-password"
        type={showPassword ? 'text' : 'password'}
        endAdornment={
          <InputAdornment position="end">
            <IconButton
              aria-label={showPassword ? 'Hide password' : 'Show password'}
              onClick={handleClickShowPassword}
              onMouseDown={handleMouseDownPassword}
              edge="end"
            >
              {showPassword ? <VisibilityOff /> : <Visibility />}
            </IconButton>
          </InputAdornment>
        }
        label={label}
      />
    </CustomFormControl>
  );
}

export default PasswordInput;
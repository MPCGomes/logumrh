import { FormControl, FormLabel, RadioGroup, FormControlLabel, Radio } from '@mui/material';
import React from 'react';

interface Option {
  value: string;
  label: string;
}

interface RadioInputProps {
  options: Option[];
  label: string;
}

const RadioInput: React.FC<RadioInputProps> = ({ options = [], label = '' }) => {
  return (
    <FormControl>
      <FormLabel id="demo-radio-buttons-group-label">{label}</FormLabel>
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue={options[0]?.value || ''}
        name="radio-buttons-group"
      >
        {options.map((option) => (
          <FormControlLabel
            key={option.value}
            value={option.value}
            control={<Radio />}
            label={option.label}
          />
        ))}
      </RadioGroup>
    </FormControl>
  );
};

export default RadioInput;
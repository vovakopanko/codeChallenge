import {useState} from 'react';

export const useInput = (initialValue: string) => {
  const [value, setValue] = useState(initialValue);

  const handleChange = (text: string) => {
    setValue(text);
  };

  return {
    value,
    onChange: handleChange,
  };
};

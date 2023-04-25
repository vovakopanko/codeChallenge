import {useState} from 'react';

export const usePhoto = (path: string) => {
  const [value, setValue] = useState(path);

  const handleChange = (photoPath: string) => {
    setValue(photoPath);
  };

  return {
    value,
    onChange: handleChange,
  };
};

import { useState } from 'react';

export const useInput = (defaultValue = '') => {
  const [input, setInput] = useState(defaultValue);
  const handleChange = ({ target: { value } }) => setInput(value);
  const resetInput = () => setInput('');
  return [input, handleChange, resetInput];
};

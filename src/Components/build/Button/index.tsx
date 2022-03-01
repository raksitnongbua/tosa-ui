import React from 'react';
import { Props } from './index.types';

const Button: React.FC<Props> = ({ label, color = 'primary', onClick }) => {
  console.log(color);
  return <button onClick={onClick}>{label}</button>;
};

export default Button;

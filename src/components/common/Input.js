
import React from 'react';

const Input = ({ type = "text", className, placeholder, name, value, onChange }) => (
  <input
    type={type}
    className={className}
    placeholder={placeholder}
    name={name}
    value={value}
    onChange={onChange}
  />
);

export default Input;
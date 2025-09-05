// src/components/header/StatBox.js

import React from 'react';

const StatBox = ({ label, name, value, onChange, className }) => (
  <div className={`stat-box ${className}`}>
    <label>{label}</label>
    <input type="text" name={name} value={value} onChange={onChange} />
  </div>
);

export default StatBox;
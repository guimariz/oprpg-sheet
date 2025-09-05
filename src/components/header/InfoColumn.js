// src/components/header/InfoColumn.js

import React from 'react';

// Supondo que o InfoField esteja no mesmo diretório ou em uma pasta 'common'
const InfoField = ({ label, name, value, onChange }) => (
  <div className="info-field">
    <label>{label}:</label>
    <input type="text" name={name} value={value} onChange={onChange} />
  </div>
);

const InfoColumn = ({ fields, character, handleChange }) => (
  <div className="info-column">
    {fields.map(field => (
      <InfoField
        key={field}
        label={field.toUpperCase()}
        name={field}
        value={character[field]}
        onChange={handleChange}
      />
    ))}
  </div>
);

export default InfoColumn;
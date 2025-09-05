// src/components/FacultyRow.js
import React from 'react';
import Input from '../common/Input'; // Reutilizando o Input genérico

const FacultyRow = ({ name, attr }) => (
  <div className="faculdade-row">
    <span className="faculdade-name">{name}</span>
    <Input type="text" className="tiny-input" />
    <span className="faculdade-attr">{attr}</span>
    <Input type="text" className="tiny-input" />
  </div>
);

export default FacultyRow;
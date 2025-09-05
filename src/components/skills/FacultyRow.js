// src/components/skills/FacultyRow.js
import React from 'react';

const FacultyRow = ({ name, attr }) => (
  <div className="faculdade-row">
    <span className="faculdade-name">{name}</span>
    <input type="text" className="tiny-input" />
    <span className="faculdade-attr">{attr}</span>
    <input type="text" className="tiny-input" />
  </div>
);

export default FacultyRow;
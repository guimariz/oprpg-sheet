// src/components/AbilityColumn.js
import React from 'react';
import AbilityRow from './AbilityRow';

const AbilityColumn = ({ rowCount = 14 }) => {
  const rows = Array.from({ length: rowCount });

  return (
    <div className="habilidades-column">
      {rows.map((_, i) => (
        <AbilityRow key={i} />
      ))}
    </div>
  );
};

export default AbilityColumn;
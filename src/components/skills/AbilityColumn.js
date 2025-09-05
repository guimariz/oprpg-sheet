// src/components/skills/AbilityColumn.js
import React from 'react';
import AbilityRow from './AbilityRow';

const AbilityColumn = ({ rowCount }) => {
  // Cria um array com o tamanho de 'rowCount' para o map
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
import React from 'react';
import ObjectInputRow from './ObjectInputRow';

const ObjectColumn = ({ rowCount = 11 }) => {
  // Gera um array com o tamanho de 'rowCount' para o map
  const rows = Array.from({ length: rowCount });

  return (
    <div className="objects-column">
      {rows.map((_, i) => (
        <ObjectInputRow key={i} />
      ))}
    </div>
  );
};

export default ObjectColumn;
// src/components/AbilityRow.js
import React from 'react';
import Input from '../common/Input'; // Reutilizando o Input genérico

const AbilityRow = () => (
  <div className="habilidade-row">
    <Input type="text" placeholder="Habilidade" />
    <Input type="text" placeholder="custo" />
    <Input type="text" placeholder="descrição" />
  </div>
);

export default AbilityRow;
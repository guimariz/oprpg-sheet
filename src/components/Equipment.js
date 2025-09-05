// src/components/Equipment.js

import React from 'react';
import Section from './common/Section';
import EquipmentColumn from './equipment/EquipmentColumn';

const Equipment = () => {
  // Dados dos equipamentos
  const equipamentos = ["ACESSÓRIO A", "ACESSÓRIO B", "ACESSÓRIO C", "TRAJE", "PROTETIVOS"];
  const maos = ["MÃO DIREITA", "MÃO ESQUERDA"];

  return (
    <Section title="EQUIPAMENTO" className="section-grid-equipment">
      <div className="equipment-grid">
        <EquipmentColumn items={equipamentos} />
        <EquipmentColumn items={maos} />
      </div>
    </Section>
  );
};

export default Equipment;
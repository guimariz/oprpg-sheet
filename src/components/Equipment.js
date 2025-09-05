// src/components/Equipment.js
import React from 'react';

const EquipSlot = ({ label }) => (
  <div className="equip-slot">
    <label>{label}:</label>
    <input type="text" placeholder="nome" />
    <input type="text" placeholder="bônus" />
    <textarea placeholder="descrição"></textarea>
  </div>
);

const Equipment = () => {
  return (
    <div className="section-box">
      <h2 className="section-title">EQUIPAMENTO</h2>
      <div className="equipment-grid">
        <EquipSlot label="MÃO DIREITA" />
        <EquipSlot label="MÃO ESQUERDA" />
        <EquipSlot label="TRAJE" />
        <EquipSlot label="PROTETIVOS" />
        <EquipSlot label="ACESSÓRIO A" />
        <EquipSlot label="ACESSÓRIO B" />
      </div>
    </div>
  );
};

export default Equipment;
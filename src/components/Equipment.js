// src/components/Equipment.js
import React from 'react';

const EquipSlot = ({ label }) => (
  <div className="equip-slot-vertical">
    <label>{label}</label>
    <div className="equip-inputs">
        <input type="text" placeholder="nome" />
        <input type="text" placeholder="bônus" />
        <textarea placeholder="descrição"></textarea>
    </div>
  </div>
);

const Equipment = () => {
  const accessories = ["ACESSÓRIO A:", "ACESSÓRIO B:", "ACESSÓRIO C:", "TRAJE", "PROTETIVOS"];
  const hands = ["MÃO DIREITA", "MÃO ESQUERDA"];

  return (
    <div className="section-box">
      <h2 className="section-title">EQUIPAMENTO</h2>
      <div className="equipment-main-grid">
        {/* Primeira div para acessórios e traje */}
        <div className="equipment-column">
          {accessories.map(label => <EquipSlot key={label} label={label} />)}
        </div>
        {/* Segunda div para as mãos */}
        <div className="equipment-column">
          {hands.map(label => <EquipSlot key={label} label={label} />)}
        </div>
      </div>
    </div>
  );
};

export default Equipment;
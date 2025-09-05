// src/components/Equipment.js

import React from 'react';

const Equipment = () => {
  const equipamentos = ["ACESSÓRIO A", "ACESSÓRIO B", "ACESSÓRIO C", "TRAJE", "PROTETIVOS"];
  const maos = ["MÃO DIREITA", "MÃO ESQUERDA"];

  return (
    <div className="section-grid-equipment section-box">
      <h2 className="section-title">EQUIPAMENTO</h2>
      <div className="equipment-grid">
        <div className="equipment-column">
          {equipamentos.map(eq => (
            <div key={eq} className="equip-item">
              <label>{eq}:</label>
              <input type="text" placeholder="nome" />
              <input type="text" placeholder="bônus" />
              <textarea placeholder="descrição"></textarea>
            </div>
          ))}
        </div>
        <div className="equipment-column">
          {maos.map(mao => (
            <div key={mao} className="equip-item">
              <label>{mao}:</label>
              <input type="text" placeholder="nome" />
              <input type="text" placeholder="bônus" />
              <textarea placeholder="descrição"></textarea>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Equipment;
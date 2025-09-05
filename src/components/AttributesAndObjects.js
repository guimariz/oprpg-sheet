// src/components/AttributesAndObjects.js

import React from 'react';

// A função e os dados foram movidos para onde são usados
const generateRows = (count) => Array.from({ length: count });

const AttributesAndObjects = ({ character, handleChange }) => {
  const atributos = ["FOR", "RIT", "RES", "PRO", "RAC", "FER"];

  return (
    <div className="section-grid-attributes-objects">
      {/* Atributos */}
      <div className="attributes-section section-box">
        <h2 className="section-title">ATRIBUTOS</h2>
        {atributos.map(attr => (
          <div key={attr} className="attribute-row">
            <span className="attribute-name">{attr}</span>
            <input type="text" className="small-input" placeholder="valor" />
            <input type="text" className="small-input" placeholder="m/n" />
            <input type="text" className="small-input" placeholder="m/a" />
            <input type="text" className="small-input" placeholder="m/t" />
          </div>
        ))}
        <div className="vitality-grid">
          <div className="vit-dis-row">
            <span>VIT</span>
            <input type="text" placeholder="real" />
            <input type="text" placeholder="max" />
            <input type="text" placeholder="mod" />
          </div>
          <div className="vit-dis-row">
            <span>DIS</span>
            <input type="text" placeholder="real" />
            <input type="text" placeholder="max" />
            <input type="text" placeholder="mod" />
          </div>
        </div>
        <div className="estado-row">
          <label>Estado:</label>
          <input type="text" name="estado" value={character.estado} onChange={handleChange} />
        </div>
      </div>
      {/* Objetos */}
      <div className="objects-section section-box">
        <h2 className="section-title">OBJETOS</h2>
        <div className="objects-grid">
          <div className="objects-column">
            {generateRows(11).map((_, i) => (
              <div key={i} className="object-row">
                <input className="item-input" type="text" placeholder="item" />
                <input className="quant-input" type="text" placeholder="quant" />
                <input className="desc-input" type="text" placeholder="descrição" />
              </div>
            ))}
          </div>
          <div className="objects-column">
            {generateRows(11).map((_, i) => (
              <div key={i} className="object-row">
                <input className="item-input" type="text" placeholder="item" />
                <input className="quant-input" type="text" placeholder="quant" />
                <input className="desc-input" type="text" placeholder="descrição" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AttributesAndObjects;
// src/components/Attributes.js
import React from 'react';

const Attributes = ({ character, handleChange }) => {
  const topStats = ["FOR", "RIT", "RES", "PRO", "RAC", "FER"];

  return (
    <div className="section-box attributes-container">
      <h2 className="section-title">ATRIBUTOS</h2>
      
      {/* 6 status com 4 colunas */}
      <div className="attributes-grid">
        {topStats.map(stat => (
          <React.Fragment key={stat}>
            <div className="attribute-name">{stat}</div>
            <div className="attribute-inputs-4-cols">
              <input type="text" placeholder="valor" />
              <input type="text" placeholder="m/n" />
              <input type="text" placeholder="m/a" />
              <input type="text" placeholder="m/t" />
            </div>
          </React.Fragment>
        ))}
      </div>

      {/* VIT e DIS com 3 colunas */}
      <div className="secondary-stats-grid">
        <div className="stat-row">
            <div className="attribute-name">VIT</div>
            <div className="attribute-inputs-3-cols">
                <input type="text" placeholder="real" />
                <input type="text" placeholder="max" />
                <input type="text" placeholder="mod" />
            </div>
        </div>
        <div className="stat-row">
            <div className="attribute-name">DIS</div>
            <div className="attribute-inputs-3-cols">
                <input type="text" placeholder="real" />
                <input type="text" placeholder="max" />
                <input type="text" placeholder="mod" />
            </div>
        </div>
      </div>
      
      {/* Estado */}
      <div className="status-field">
        <label>ESTADO:</label>
        <input type="text" name="estado" value={character.estado} onChange={handleChange} />
      </div>
    </div>
  );
};

export default Attributes;
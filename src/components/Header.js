// src/components/Header.js

import React from 'react';

const InfoField = ({ label, name, value, onChange }) => (
  <div className="info-field">
    <label>{label}:</label>
    <input type="text" name={name} value={value} onChange={onChange} />
  </div>
);

const Header = ({ character, handleChange }) => {
  const column1Fields = ["nome", "especie", "idade", "oficio", "reputacao"];
  const column2Fields = ["aparencia", "tipo", "bando", "berries", "jogador"];

  return (
    <header className="header-container">
      {/* 1a div (esquerda, 20%) */}
      <div className="header-left-pane">
        <div className="wanted-image-placeholder"></div>
        <div className="wanted-text-bar">
          <h1 className="wanted-text">WANTED</h1>
        </div>
      </div>

      {/* 2a div (direita, 80%) */}
      <div className="header-right-pane">
        {/* 1a div (acima) */}
        <div className="top-stats-bar">
          <div className="stat-box recompensa-box">
            <label>RECOMPENSA</label>
            <input type="text" name="recompensa" value={character.recompensa} onChange={handleChange} />
          </div>
          <div className="title-box">
            <h2>One Piece RPG</h2>
          </div>
          <div className="stat-box nivel-box">
            <label>NÍVEL</label>
            <input type="text" name="nivel" value={character.nivel} onChange={handleChange} />
          </div>
          <div className="stat-box xp-box">
            <label>XP</label>
            <input type="text" name="xp" value={character.xp} onChange={handleChange} />
          </div>
        </div>
        
        {/* 2a div (abaixo) */}
        <div className="character-info-grid">
          <div className="info-column">
            {column1Fields.map(field => (
              <InfoField key={field} label={field.toUpperCase()} name={field} value={character[field]} onChange={handleChange} />
            ))}
          </div>
          <div className="info-column">
            {column2Fields.map(field => (
              <InfoField key={field} label={field.toUpperCase()} name={field} value={character[field]} onChange={handleChange} />
            ))}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
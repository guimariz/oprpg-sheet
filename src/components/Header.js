// src/components/Header.js

import React from 'react';

// Componente para criar os campos de informação e evitar repetição
const InfoField = ({ label, name, value, onChange }) => (
  <div className="info-field">
    <label>{label}:</label>
    <input type="text" name={name} value={value} onChange={onChange} />
  </div>
);

const Header = ({ character, handleChange }) => {
  // Listas de campos para cada coluna
  const column1Fields = ["nome", "especie", "idade", "oficio", "reputacao"];
  const column2Fields = ["aparencia", "tipo", "bando", "berries", "jogador"];

  return (
    // 1. A div maior para ser "header.js"
    <header className="header-grid-container">
      
      {/* 2. Div para imagem (com wanted) */}
      <div className="header-image-pane">
        <div className="wanted-image-box">
          {/* Espaço para a imagem do personagem */}
        </div>
        <div className="wanted-text-bar">
          <h1 className="wanted-text">WANTED</h1>
        </div>
      </div>

      {/* 2. Div para as informações */}
      <div className="header-info-pane">

        {/* 3. Div com "Recompensa", "One Piece RPG", "Nível" e "XP" */}
        <div className="top-stats-grid">
          <div className="stat-box recompensa-box">
            <label>RECOMPENSA:</label>
            <input type="text" name="recompensa" value={character.recompensa} onChange={handleChange} />
          </div>
          <div className="stat-box title-box">
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

        {/* 3. Div com os CharacterInfo */}
        <div className="character-info-grid">
          {/* Coluna 1 */}
          <div className="info-column">
            {column1Fields.map(field => (
              <InfoField
                key={field}
                label={field.toUpperCase()}
                name={field}
                value={character[field]}
                onChange={handleChange}
              />
            ))}
          </div>
          {/* Coluna 2 */}
          <div className="info-column">
            {column2Fields.map(field => (
              <InfoField
                key={field}
                label={field.toUpperCase()}
                name={field}
                value={character[field]}
                onChange={handleChange}
              />
            ))}
          </div>
        </div>

      </div>
    </header>
  );
};

export default Header;
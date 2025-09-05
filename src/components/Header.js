// src/components/Header.js

import React from 'react';
import WantedPoster from './header/WantedPoster';
import StatBox from './header/StatBox';
import InfoColumn from './header/InfoColumn';

const Header = ({ character, handleChange }) => {
  const column1Fields = ["nome", "especie", "idade", "oficio", "reputacao"];
  const column2Fields = ["aparencia", "tipo", "bando", "berries", "jogador"];

  return (
    <header className="header-container">
      <WantedPoster />

      <div className="header-right-pane">
        {/* Barra Superior */}
        <div className="top-stats-bar">
          <StatBox
            label="RECOMPENSA"
            name="recompensa"
            value={character.recompensa}
            onChange={handleChange}
            className="recompensa-box"
          />
          <div className="title-box">
            <h2>One Piece RPG</h2>
          </div>
          <StatBox
            label="NÍVEL"
            name="nivel"
            value={character.nivel}
            onChange={handleChange}
            className="nivel-box"
          />
          <StatBox
            label="XP"
            name="xp"
            value={character.xp}
            onChange={handleChange}
            className="xp-box"
          />
        </div>
        
        {/* Grid de Informações */}
        <div className="character-info-grid">
          <InfoColumn fields={column1Fields} character={character} handleChange={handleChange} />
          <InfoColumn fields={column2Fields} character={character} handleChange={handleChange} />
        </div>
      </div>
    </header>
  );
};

export default Header;
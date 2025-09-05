// src/components/CharacterInfo.js
import React from 'react';

const CharacterInfo = ({ character, handleChange }) => {
  return (
    <div className="section-box">
      <div className="info-grid">
        <div className="info-item">
          <label>NOME:</label>
          <input type="text" name="nome" value={character.nome} onChange={handleChange} />
        </div>
        <div className="info-item">
          <label>ESPÉCIE:</label>
          <input type="text" name="especie" value={character.especie} onChange={handleChange} />
        </div>
        <div className="info-item">
          <label>IDADE:</label>
          <input type="text" name="idade" value={character.idade} onChange={handleChange} />
        </div>
        <div className="info-item">
          <label>OFÍCIO:</label>
          <input type="text" name="oficio" value={character.oficio} onChange={handleChange} />
        </div>
        <div className="info-item">
          <label>REPUTAÇÃO:</label>
          <input type="text" name="reputacao" value={character.reputacao} onChange={handleChange} />
        </div>
    </div>
      <div className="info-grid">
        <div className="info-item aparencia-box">
          <label>APARÊNCIA:</label>
          <textarea name="aparencia" value={character.aparencia} onChange={handleChange}></textarea>
        </div>
         <div className="info-item">
          <label>TIPO:</label>
          <input type="text" name="tipo" value={character.tipo} onChange={handleChange} />
        </div>
        <div className="info-item">
          <label>BANDO:</label>
          <input type="text" name="bando" value={character.bando} onChange={handleChange} />
        </div>
        <div className="info-item">
          <label>BERRIES:</label>
          <input type="text" name="berries" value={character.berries} onChange={handleChange} />
        </div>
      </div>
    </div>
  );
};

export default CharacterInfo;
// src/App.js

import React, { useState } from 'react';
import './App.css';

// REMOVA A IMPORTAÇÃO DO CHARACTERINFO DAQUI
// import CharacterInfo from './components/CharacterInfo'; 
import Header from './components/Header';
import Attributes from './components/Attributes';
import Skills from './components/Skills';
import Equipment from './components/Equipment';
import Abilities from './components/Abilities';
import Inventory from './components/Inventory';

function App() {
  const [character, setCharacter] = useState({
    nome: 'Roronoa Zoro',
    especie: 'Humano',
    idade: '21',
    oficio: 'Espadachim',
    reputacao: 'Caçador de Piratas',
    aparencia: 'Cabelo verde, 3 espadas, cicatriz no olho.',
    tipo: 'Combatente',
    bando: 'Piratas do Chapéu de Palha',
    berries: '1.111.000.000',
    jogador: 'Player',
    nivel: '31',
    xp: '500/1200',
    recompensa: 'B$ 1.111.000.000',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCharacter(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  return (
    <div className="sheet-container">
      {/* Passe todo o objeto 'character' e a função 'handleChange' para o Header */}
      <Header
        character={character}
        handleChange={handleChange}
      />
      <main className="sheet-body">
        <div className="left-column">
          <Attributes />
          <Skills />
        </div>
        <div className="right-column">
          {/* O CHARACTERINFO NÃO É MAIS RENDERIZADO AQUI */}
          <Equipment />
          <Abilities />
          <Inventory />
          <div className="section-box learning-box">
             <h2 className="section-title">APRENDIZADO</h2>
             <textarea />
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
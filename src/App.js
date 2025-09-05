// src/App.js

import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Body from './components/Body';

function App() {
  // O estado agora é mais completo para abranger todos os campos
  const [character, setCharacter] = useState({
    // Header Info
    nome: 'Grei Deivi',
    especie: 'Tritão',
    idade: '31',
    oficio: 'Imediato',
    reputacao: 'Indomável',
    aparencia: 'Um tritão alto, amarelo, careca, com uma grande barba branca e sem um dedinho.',
    tipo: 'Combatente',
    bando: 'Fantasmas do Oeste',
    berries: '',
    jogador: 'Marizada',
    nivel: '',
    xp: '0/1000',
    recompensa: 'B$ 30.000.000.000',

    // Body Info
    atributos: {
      for: { valor: 10, mn: 0, ma: 0, mt: 0 },
      rit: { valor: 10, mn: 0, ma: 0, mt: 0 },
      res: { valor: 10, mn: 0, ma: 0, mt: 0 },
      pro: { valor: 10, mn: 0, ma: 0, mt: 0 },
      rac: { valor: 10, mn: 0, ma: 0, mt: 0 },
      fer: { valor: 10, mn: 0, ma: 0, mt: 0 },
    },
    vitalidade: { real: 100, max: 100, mod: 0 },
    disposicao: { real: 50, max: 50, mod: 0 },
    estado: 'Saudável',
    // ... outros estados para objetos, equipamentos, etc.
  });

  // Função genérica para lidar com a maioria das mudanças
  const handleChange = (e) => {
    const { name, value } = e.target;
    setCharacter(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  // Funções mais específicas podem ser criadas aqui se necessário para listas complexas

  return (
    <div className="sheet-container">
      <Header character={character} handleChange={handleChange} />
      <Body character={character} handleChange={handleChange} />
    </div>
  );
}

export default App;
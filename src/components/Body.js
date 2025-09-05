// src/components/Body.js

import React from 'react';
import AttributesAndObjects from './AttributesAndObjects';
import Equipment from './Equipment';
import SkillsAndAbilities from './SkillsAndAbilities.js';

const Body = ({ character, handleChange }) => {
  return (
    <main className="body-container">
      {/* 1a DIV MAIOR agora é um componente separado */}
      <AttributesAndObjects character={character} handleChange={handleChange} />

      {/* 2a DIV MAIOR agora é um componente separado */}
      <Equipment />

      {/* 3a DIV MAIOR agora é um componente separado */}
      <SkillsAndAbilities />
    </main>
  );
};

export default Body;
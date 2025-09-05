// src/components/Body.js

import React from 'react';
import AttributesAndObjects from './attributesandobjects/AttributesAndObjects.js';
import Equipment from './Equipment';
import SkillsAndAbilities from './skillsandabilites/SkillsAndAbilities.js';

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
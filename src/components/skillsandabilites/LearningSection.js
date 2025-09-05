// src/components/LearningSection.js
import React from 'react';
import Input from '../common/Input';
import AbilityColumn from './AbilityColumn';

const LearningSection = () => (
  <div className="aprendizado-section section-box">
    <div className="aprendizado-header">
      <h2 className="section-title">APRENDIZADO / HABILIDADES</h2>
      <div className="pontos-box">
        <label>PONTOS:</label>
        <Input type="text" className="small-input" />
      </div>
    </div>
    <div className="habilidades-grid">
      <AbilityColumn rowCount={14} />
      <AbilityColumn rowCount={14} />
    </div>
  </div>
);

export default LearningSection;
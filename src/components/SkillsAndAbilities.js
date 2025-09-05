// src/components/SkillsAndAbilities.js
import React from 'react';
import FacultiesSection from './skills/FacultiesSection';
import LearningSection from './skills/LearningSection';

const SkillsAndAbilities = () => (
  <div className="section-grid-skills-abilities">
    <FacultiesSection />
    <LearningSection />
  </div>
);

export default SkillsAndAbilities;
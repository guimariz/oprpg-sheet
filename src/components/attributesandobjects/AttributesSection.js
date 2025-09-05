// src/components/AttributesSection.js
import React from 'react';
import Section from '../common/Section';
import Input from '../common/Input';
import AttributeInputRow from './AttributeInputRow';
import VitalityInputRow from '../skillsandabilites/VitalityInputRow';

const AttributesSection = ({ character, handleChange }) => {
  const atributos = ["FOR", "RIT", "RES", "PRO", "RAC", "FER"];

  return (
    <Section title="ATRIBUTOS" className="attributes-section">
      {atributos.map(attr => (
        <AttributeInputRow key={attr} attr={attr} />
      ))}
      <div className="vitality-grid">
        <VitalityInputRow label="VIT" />
        <VitalityInputRow label="DIS" />
      </div>
      <div className="estado-row">
        <label>Estado:</label>
        <Input
          name="estado"
          value={character.estado}
          onChange={handleChange}
        />
      </div>
    </Section>
  );
};

export default AttributesSection;
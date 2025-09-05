import React from 'react';
import AttributesSection from './attributes/AttributesSection';
import ObjectsSection from './objects/ObjectsSection';

const AttributesAndObjects = ({ character, handleChange }) => {
  return (
    <div className="section-grid-attributes-objects">
      <AttributesSection character={character} handleChange={handleChange} />
      <ObjectsSection />
    </div>
  );
};

export default AttributesAndObjects;
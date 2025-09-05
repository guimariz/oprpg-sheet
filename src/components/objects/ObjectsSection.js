import React from 'react';
import Section from '../common/Section';
import ObjectColumn from './ObjectColumn';

const ObjectsSection = () => (
  <Section title="OBJETOS" className="objects-section">
    <div className="objects-grid">
      <ObjectColumn rowCount={11} />
      <ObjectColumn rowCount={11} />
    </div>
  </Section>
);

export default ObjectsSection;
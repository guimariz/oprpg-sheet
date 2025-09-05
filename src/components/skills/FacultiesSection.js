// src/components/skills/FacultiesSection.js
import React from 'react';
import FacultyRow from './FacultyRow';

const FacultiesSection = () => {
  const faculdades = [
    { name: "ATLETISMO", attr: "FOR" }, { name: "ALQUIMIA", attr: "RAC" },
    { name: "BRIGA", attr: "FOR" }, { name: "BUSCA", attr: "PRO" },
    // ...resto da lista
  ];

  return (
    <div className="faculdades-section section-box">
      <h2 className="section-title">FACULDADES</h2>
      <div className="faculdades-list">
        {faculdades.map(fac => (
          <FacultyRow key={fac.name} name={fac.name} attr={fac.attr} />
        ))}
      </div>
    </div>
  );
};

export default FacultiesSection;
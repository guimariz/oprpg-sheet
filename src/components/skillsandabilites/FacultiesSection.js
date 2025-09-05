// src/components/FacultiesSection.js
import React from 'react';
import Section from '../common/Section'; // Reutilizando o Section genérico
import FacultyRow from './FacultyRow';

const FacultiesSection = () => {
  // Os dados podem ficar aqui ou vir por props
  const faculdades = [
    { name: "ATLETISMO", attr: "FOR" }, { name: "ALQUIMIA", attr: "RAC" },
    { name: "BRIGA", attr: "FOR" }, { name: "BUSCA", attr: "PRO" },
    { name: "CONDUÇÃO", attr: "PRO" }, { name: "DESENCRIPTAÇÃO", attr: "RAC" },
    { name: "DIPLOMACIA", attr: "FER" }, { name: "EMPATIA ANIMAL", attr: "FER" },
    { name: "EQUILÍBRIO", attr: "RES" }, { name: "FOCO", attr: "PRO" },
    { name: "FURTIVIDADE", attr: "RIT" }, { name: "INTIMIDAÇÃO", attr: "FOR" },
    { name: "MECANIZAÇÃO", attr: "RIT" }, { name: "OCULTISMO", attr: "RAC" },
    { name: "PRESTIDIGITAÇÃO", attr: "RIT" }, { name: "REPAROS", attr: "RES" },
    { name: "SOBREVIVÊNCIA", attr: "RES" }, { name: "SORTE", attr: "FER" },
  ];

  return (
    <Section title="FACULDADES" className="faculdades-section">
      <div className="faculdades-list">
        {faculdades.map(fac => (
          <FacultyRow key={fac.name} name={fac.name} attr={fac.attr} />
        ))}
      </div>
    </Section>
  );
};

export default FacultiesSection;
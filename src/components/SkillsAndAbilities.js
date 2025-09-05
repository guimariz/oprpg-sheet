// src/components/SkillsAndAbilities.js

import React from 'react';

const generateRows = (count) => Array.from({ length: count });

const SkillsAndAbilities = () => {
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
    <div className="section-grid-skills-abilities">
      <div className="faculdades-section section-box">
        <h2 className="section-title">FACULDADES</h2>
        <div className="faculdades-list">
          {faculdades.map(fac => (
            <div key={fac.name} className="faculdade-row">
              <span className="faculdade-name">{fac.name}</span>
              <input type="text" className="tiny-input" />
              <span className="faculdade-attr">{fac.attr}</span>
              <input type="text" className="tiny-input" />
            </div>
          ))}
        </div>
      </div>
      <div className="aprendizado-section section-box">
        <div className="aprendizado-header">
          <h2 className="section-title">APRENDIZADO / HABILIDADES</h2>
          <div className="pontos-box">
            <label>PONTOS:</label>
            <input type="text" className="small-input" />
          </div>
        </div>
        <div className="habilidades-grid">
          <div className="habilidades-column">
            {generateRows(14).map((_, i) => (
              <div key={i} className="habilidade-row">
                <input type="text" placeholder="Habilidade" />
                <input type="text" placeholder="custo" />
                <input type="text" placeholder="descrição" />
              </div>
            ))}
          </div>
          <div className="habilidades-column">
            {generateRows(14).map((_, i) => (
              <div key={i} className="habilidade-row">
                <input type="text" placeholder="Habilidade" />
                <input type="text" placeholder="custo" />
                <input type="text" placeholder="descrição" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillsAndAbilities;
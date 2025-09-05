// src/components/Body.js

import React from 'react';

// Gera N linhas para as tabelas de Objetos e Habilidades
const generateRows = (count) => Array.from({ length: count });

const Body = ({ character, handleChange }) => {
  const atributos = ["FOR", "RIT", "RES", "PRO", "RAC", "FER"];
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
  const equipamentos = ["ACESSÓRIO A", "ACESSÓRIO B", "ACESSÓRIO C", "TRAJE", "PROTETIVOS"];
  const maos = ["MÃO DIREITA", "MÃO ESQUERDA"];

  return (
    <main className="body-container">
      {/* 1a DIV MAIOR: Atributos e Objetos */}
      <div className="section-grid-attributes-objects">
        {/* Atributos */}
        <div className="attributes-section section-box">
          <h2 className="section-title">ATRIBUTOS</h2>
          {atributos.map(attr => (
            <div key={attr} className="attribute-row">
              <span className="attribute-name">{attr}</span>
              <input type="text" className="small-input" placeholder="valor" />
              <input type="text" className="small-input" placeholder="m/n" />
              <input type="text" className="small-input" placeholder="m/a" />
              <input type="text" className="small-input" placeholder="m/t" />
            </div>
          ))}
          <div className="vitality-grid">
            <div className="vit-dis-row">
                <span>VIT</span>
                <input type="text" placeholder="real" />
                <input type="text" placeholder="max" />
                <input type="text" placeholder="mod" />
            </div>
            <div className="vit-dis-row">
                <span>DIS</span>
                <input type="text" placeholder="real" />
                <input type="text" placeholder="max" />
                <input type="text" placeholder="mod" />
            </div>
          </div>
          <div className="estado-row">
              <label>Estado:</label>
              <input type="text" name="estado" value={character.estado} onChange={handleChange} />
          </div>
        </div>
        {/* Objetos */}
        <div className="objects-section section-box">
          <h2 className="section-title">OBJETOS</h2>
          <div className="objects-grid">
            <div className="objects-column">
              {generateRows(11).map((_, i) => (
                <div key={i} className="object-row">
                  <input className="item-input" type="text" placeholder="item" />
                  <input className="quant-input" type="text" placeholder="quant" />
                  <input className="desc-input" type="text" placeholder="descrição" />
                </div>
              ))}
            </div>
            <div className="objects-column">
              {generateRows(11).map((_, i) => (
                <div key={i} className="object-row">
                  <input className="item-input" type="text" placeholder="item" />
                  <input className="quant-input" type="text" placeholder="quant" />
                  <input className="desc-input" type="text" placeholder="descrição" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* 2a DIV MAIOR: Equipamento */}
      <div className="section-grid-equipment section-box">
          <h2 className="section-title">EQUIPAMENTO</h2>
          <div className="equipment-grid">
              <div className="equipment-column">
                  {equipamentos.map(eq => (
                      <div key={eq} className="equip-item">
                          <label>{eq}:</label>
                          <input type="text" placeholder="nome"/>
                          <input type="text" placeholder="bônus"/>
                          <textarea placeholder="descrição"></textarea>
                      </div>
                  ))}
              </div>
              <div className="equipment-column">
                  {maos.map(mao => (
                       <div key={mao} className="equip-item">
                          <label>{mao}:</label>
                          <input type="text" placeholder="nome"/>
                          <input type="text" placeholder="bônus"/>
                          <textarea placeholder="descrição"></textarea>
                      </div>
                  ))}
              </div>
          </div>
      </div>

      {/* 3a DIV MAIOR: Faculdades e Aprendizado */}
      <div className="section-grid-skills-abilities">
        <div className="faculdades-section section-box">
          <h2 className="section-title">FACULDADES</h2>
          <div className="faculdades-list">
              {faculdades.map(fac =>(
                  <div key={fac.name} className="faculdade-row">
                      <span className="faculdade-name">{fac.name}</span>
                      <input type="text" className="tiny-input"/>
                      <span className="faculdade-attr">{fac.attr}</span>
                      <input type="text" className="tiny-input"/>
                  </div>
              ))}
          </div>
        </div>
        <div className="aprendizado-section section-box">
          <div className="aprendizado-header">
            <h2 className="section-title">APRENDIZADO / HABILIDADES</h2>
            <div className="pontos-box">
                <label>PONTOS:</label>
                <input type="text" className="small-input"/>
            </div>
          </div>
          <div className="habilidades-grid">
            <div className="habilidades-column">
                {generateRows(14).map((_, i) =>(
                    <div key={i} className="habilidade-row">
                        <input type="text" placeholder="Habilidade"/>
                        <input type="text" placeholder="custo"/>
                        <input type="text" placeholder="descrição"/>
                    </div>
                ))}
            </div>
             <div className="habilidades-column">
                {generateRows(14).map((_, i) =>(
                    <div key={i} className="habilidade-row">
                        <input type="text" placeholder="Habilidade"/>
                        <input type="text" placeholder="custo"/>
                        <input type="text" placeholder="descrição"/>
                    </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Body;
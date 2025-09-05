// src/components/Skills.js
import React from 'react';

const Skill = ({ name, attribute }) => (
    <li className="skill-item">
        <input type="text" className="points"/>
        <span>{name}</span>
        <span className="attribute-tag">{attribute}</span>
    </li>
)

const Skills = () => {
    const skillsData = [
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
        <div className="section-box">
            <h2 className="section-title">FACULDADES</h2>
            <ul className="skills-list">
                {skillsData.map(skill => <Skill key={skill.name} name={skill.name} attribute={skill.attr} />)}
            </ul>
        </div>
    );
};

export default Skills;
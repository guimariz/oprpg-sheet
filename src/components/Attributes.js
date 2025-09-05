// src/components/Attributes.js
import React from 'react';

const Attribute = ({ name }) => (
  <li className="attribute-item">
    <span className="attribute-name">{name}</span>
    <div className="attribute-values">
      <input type="text" placeholder="real" />
      <input type="text" placeholder="max" />
      <input type="text" placeholder="mod" />
    </div>
  </li>
);


const Attributes = () => {
  const attributeNames = ["FOR", "RIT", "RES", "PRO", "RAC", "FER"];
  
  return (
    <div className="section-box">
      <h2 className="section-title">ATRIBUTOS</h2>
      <ul className="attributes-list">
        {attributeNames.map(attr => <Attribute key={attr} name={attr} />)}
      </ul>
    </div>
  );
};

export default Attributes;
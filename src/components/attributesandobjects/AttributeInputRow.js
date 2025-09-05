// src/components/AttributeInputRow.js
import React from 'react';
import Input from '../common/Input';

const AttributeInputRow = ({ attr }) => (
  <div className="attribute-row">
    <span className="attribute-name">{attr}</span>
    <Input className="small-input" placeholder="valor" />
    <Input className="small-input" placeholder="m/n" />
    <Input className="small-input" placeholder="m/a" />
    <Input className="small-input" placeholder="m/t" />
  </div>
);

export default AttributeInputRow;
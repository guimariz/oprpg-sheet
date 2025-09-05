// src/components/ObjectInputRow.js
import React from 'react';
import Input from '../common/Input';

const ObjectInputRow = () => (
  <div className="object-row">
    <Input className="item-input" placeholder="item" />
    <Input className="quant-input" placeholder="quant" />
    <Input className="desc-input" placeholder="descrição" />
  </div>
);

export default ObjectInputRow;
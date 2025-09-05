import React from 'react';
import Input from '../common/Input';

const VitalityInputRow = ({ label }) => (
  <div className="vit-dis-row">
    <span>{label}</span>
    <Input placeholder="real" />
    <Input placeholder="max" />
    <Input placeholder="mod" />
  </div>
);

export default VitalityInputRow;
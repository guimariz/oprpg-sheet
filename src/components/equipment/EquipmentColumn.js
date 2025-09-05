// src/components/equipment/EquipmentColumn.js

import React from 'react';
import EquipmentItem from './EquipmentItem';

const EquipmentColumn = ({ items }) => (
  <div className="equipment-column">
    {items.map(item => (
      <EquipmentItem key={item} label={item} />
    ))}
  </div>
);

export default EquipmentColumn;
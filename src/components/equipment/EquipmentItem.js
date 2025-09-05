// src/components/equipment/EquipmentItem.js

import React from 'react';

const EquipmentItem = ({ label }) => (
  <div className="equip-item">
    <label>{label}:</label>
    <input type="text" placeholder="nome" />
    <input type="text" placeholder="bônus" />
    <textarea placeholder="descrição"></textarea>
  </div>
);

export default EquipmentItem;
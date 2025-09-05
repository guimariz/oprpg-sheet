// src/components/Inventory.js
import React from 'react';

const InventoryItem = () => (
    <div className="inventory-item">
        <input className="item-name" type="text" placeholder="item" />
        <input className="item-quant" type="number" placeholder="quant" />
        <input className="item-desc" type="text" placeholder="descrição" />
    </div>
);

const InventoryColumn = () => {
    // Cria 11 espaços para itens
    const items = Array.from({ length: 11 });
    return (
        <div className="inventory-column">
            {items.map((_, index) => <InventoryItem key={index} />)}
        </div>
    );
};


const Inventory = () => {
  return (
    <div className="section-box inventory-container">
        <h2 className="section-title">OBJETOS</h2>
        <div className="inventory-grid">
            <InventoryColumn />
            <InventoryColumn />
        </div>
    </div>
  );
};

export default Inventory;
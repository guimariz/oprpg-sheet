// src/components/Inventory.js
import React from 'react';

const Inventory = () => {
    const rows = Array.from({ length: 6 });

    return (
        <div className="section-box">
            <h2 className="section-title">OBJETOS</h2>
            <div className="table-container">
                <table className="rpg-table">
                    <thead>
                        <tr>
                            <th>Item</th>
                            <th className="col-quant">Quant.</th>
                            <th className="col-cost">Valor</th>
                            <th>Descrição</th>
                        </tr>
                    </thead>
                    <tbody>
                        {rows.map((_, index) => (
                             <tr key={index}>
                                <td><textarea /></td>
                                <td><textarea /></td>
                                <td><textarea /></td>
                                <td><textarea /></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Inventory;
// src/components/Abilities.js
import React from 'react';

const Abilities = () => {
    // Cria um array para renderizar linhas da tabela
    const rows = Array.from({ length: 5 });

    return (
        <div className="section-box">
            <h2 className="section-title">HABILIDADES</h2>
            <div className="table-container">
                <table className="rpg-table">
                    <thead>
                        <tr>
                            <th>Habilidade</th>
                            <th className="col-cost">Custo</th>
                            <th>Descrição</th>
                        </tr>
                    </thead>
                    <tbody>
                        {rows.map((_, index) => (
                            <tr key={index}>
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

export default Abilities;
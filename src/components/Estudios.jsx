import React from 'react';

function Estudios() {
    const estudios = [
        { id: 1, nombre: 'Estudio A', fecha: '2022-01-01', costo: 1000 },
        { id: 2, nombre: 'Estudio B', fecha: '2022-02-15', costo: 2000 },
        { id: 3, nombre: 'Estudio C', fecha: '2022-03-30', costo: 3000 },
    ];

    return (
        <div>
            <h2>Estudios</h2>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nombre</th>
                        <th>Fecha</th>
                        <th>Costo</th>
                    </tr>
                </thead>
                <tbody>
                    {estudios.map((estudio) => (
                        <tr key={estudio.id}>
                            <td>{estudio.id}</td>
                            <td>{estudio.nombre}</td>
                            <td>{estudio.fecha}</td>
                            <td>{estudio.costo}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Estudios;


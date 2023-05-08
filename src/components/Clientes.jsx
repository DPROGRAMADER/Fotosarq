import React from 'react';

function Clientes() {
    const clientes = [
        { id: 1, nombre: 'Juan Perez', direccion: 'Calle 123', telefono: '555-1234' },
        { id: 2, nombre: 'Maria Lopez', direccion: 'Avenida 456', telefono: '555-5678' },
        { id: 3, nombre: 'Carlos Sanchez', direccion: 'Plaza 789', telefono: '555-9012' },
    ];

    return (
        <div>
            <h2>Clientes</h2>
            <ul>
                {clientes.map((cliente) => (
                    <li key={cliente.id}>
                        <span className="label">Nombre:</span>
                        <span className="value">{cliente.nombre}</span>
                        <span className="label">Dirección:</span>
                        <span className="value">{cliente.direccion}</span>
                        <span className="label">Teléfono:</span>
                        <span className="value">{cliente.telefono}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Clientes;





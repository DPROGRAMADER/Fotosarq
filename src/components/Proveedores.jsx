import React from 'react';

function Proveedores() {
    const proveedores = [
        { id: 1, nombre: 'Proveedor A', email: 'proveedorA@example.com', telefono: '555-1234' },
        { id: 2, nombre: 'Proveedor B', email: 'proveedorB@example.com', telefono: '555-5678' },
        { id: 3, nombre: 'Proveedor C', email: 'proveedorC@example.com', telefono: '555-9012' },
    ];

    return (
        <div>
            <h2>Proveedores</h2>
            <ul>
                {proveedores.map((proveedor) => (
                    <li key={proveedor.id}>
                        <h3>{proveedor.nombre}</h3>
                        <p>Email: {proveedor.email}</p>
                        <p>Teléfono: {proveedor.telefono}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Proveedores;


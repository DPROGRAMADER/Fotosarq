import React from 'react';
import Clientes from './components/Clientes';
import Proveedores from './components/Proveedores';
import Estudios from './components/Estudios';
import './styles.css';

function App() {
  return (
    <div className="container">
      <header className="header">
        <h1>Fotos Arq</h1>
        <div className="subheader">Control de Clientes, Proveedores y Estudios</div>
      </header>
      <section className="section">
        <Clientes />
      </section>
      <section className="section">
        <Proveedores />
      </section>
      <section className="section">
        <Estudios />
      </section>
    </div>
  );
}

export default App;


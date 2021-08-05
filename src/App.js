import React from 'react';
import Formulario from './components/Formularios';
import Header from './components/Header';

import CategoriaProviders from './contexts/CategoriasContext';

function App() {
  return (
    <CategoriaProviders>
      <Header />

      <div className="container mt-5">
        <div className="row">
          <Formulario />
        </div>
      </div>
    </CategoriaProviders>
  );
}

export default App;

import React from 'react';
import Formulario from './components/Formularios';
import Header from './components/Header';

import CategoriaProviders from './contexts/CategoriasContext';
import RecetasProvider from './contexts/Recetas.context';

function App() {
  return (
    <CategoriaProviders>
      <RecetasProvider>
        <Header />

        <div className="container mt-5">
          <div className="row">
            <Formulario />
          </div>
        </div>
        </RecetasProvider>
    </CategoriaProviders>
  );
}

export default App;

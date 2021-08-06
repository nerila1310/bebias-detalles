import React from 'react';
import Formulario from './components/Formularios';
import Header from './components/Header';
import ListaRecetas from './components/ListaRecetas';

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
          <ListaRecetas />
        </div>
        </RecetasProvider>
    </CategoriaProviders>
  );
}

export default App;

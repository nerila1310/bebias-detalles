import React, { createContext, useState } from 'react'

export const RecetasContext = createContext();

const RecetasProvider = (props) => {

    const [recetas, guardarRecetas] = useState([]);
    const [receta, guardarReceta] = useState({
        nombre:'',
        categoria:''
    });

    return(
        <RecetasContext.Provider
            value={{
                guardarReceta
            }}
        >
            {props.children}
        </RecetasContext.Provider>
    );
}

export default RecetasProvider;
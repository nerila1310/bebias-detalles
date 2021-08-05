import axios from 'axios';
import React, {createContext, useState, useEffect} from 'react';

//crear context
export const CategoriasContext = createContext();

// providers donde se encutran las funciones y state
const CategoriaProviders = (props) => {

    //crear el state del context
    const [categorias, guardarCategorias] = useState([]);

    //ejecutar el llamado a la api
    useEffect( () => {
        const obtenerCategorias = async () => {
            const url = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list';
        
            const categorias = await axios.get(url);
            guardarCategorias(categorias.data.drinks);
        };

        obtenerCategorias();
    }, [])

    return(
        <CategoriasContext.Provider
            value={{
                categorias
            }}
        >
            {props.children}
        </CategoriasContext.Provider>
    )
}

export default CategoriaProviders;
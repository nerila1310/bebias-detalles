import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const RecetasContext = createContext();

const RecetasProvider = (props) => {

    const [recetas, guardarRecetas] = useState([]);
    const [receta, guardarReceta] = useState({
        nombre:'',
        categoria:''
    });
    const [consultar, guardarConsultar] = useState(false);

    const {nombre, categoria} = receta;

    useEffect( () => {
        if(consultar){
            const obtenerRecetas = async () => {
                const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${nombre}&c=${categoria}`;
    
                const resultado = await axios.get(url);
                guardarRecetas(resultado.data.drinks);
            }
            obtenerRecetas();
        }
    }, [categoria, consultar, nombre, receta])

    return(
        <RecetasContext.Provider
            value={{
                recetas,
                guardarReceta,
                guardarConsultar
            }}
        >
            {props.children}
        </RecetasContext.Provider>
    );
}

export default RecetasProvider;
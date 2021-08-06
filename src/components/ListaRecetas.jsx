import React, {useContext} from 'react'

import { RecetasContext } from '../contexts/Recetas.context';
import Receta from './Receta';

const ListaRecetas = () => {

    //extraer lñas recetas
    const {recetas} = useContext(RecetasContext);
   
    return (  
        <div className="row mt-5">
            {recetas.map(receta => (
                <Receta 
                    key={receta.idDrink}
                    receta={receta}
                />
            ))}
        </div>
    );
}
 
export default ListaRecetas;
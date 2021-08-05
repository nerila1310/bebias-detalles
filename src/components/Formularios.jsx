import React, {useContext, useState} from 'react';
import { CategoriasContext } from '../contexts/CategoriasContext';

const Formulario = () => {

    const [busqueda, guardarBusqueda] = useState({
        nombre:'',
        categoria:''
    })

    const {categorias} = useContext(CategoriasContext);


    //funcion para leer el contenido ingresado
    const obtenerDatos = e => {
        guardarBusqueda({...busqueda, [e.target.name]:e.target.value})
    }

    return (  
        <form
            className="col-12"
        >
            <fieldset className="text-center">
                <legend>Busca bebidas por categorias o Ingrediente</legend>
            </fieldset>

            <div className="row mt-4">
                <div className="col-md-4">
                    <input  
                        name="nombre"
                        className="form-control"
                        type="text"
                        placeholder="Buscar por ingrediente"
                        onChange={obtenerDatos}
                    />
                </div>
                <div className="col-md-4">
                    <select
                        className="form-control"
                        name="categoria"
                        onChange={obtenerDatos}
                    >
                        <option value="">Selecciona Categoria</option>
                        {categorias.map(categoria => (
                            <option 
                                key={categoria.strCategory}
                                value={categoria.strCategory}
                            >{categoria.strCategory}</option>
                        ))}
                    </select>
                </div>
                <div className="col-md-4">
                    <input 
                        type="submit"
                        className="btn btn-block btn-primary"
                        value="Buscar Bebidas" 
                    />
                </div>
            </div>
        </form>
    );
}
 
export default Formulario;
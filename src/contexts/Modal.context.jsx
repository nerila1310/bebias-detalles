import React, {createContext, useEffect, useState} from 'react';
import axios from 'axios';

//crear el contex
export const ModalContext = createContext();

const ModalProvider = (props) => {

    // state del provider
    const [idreceta, guardarIdReceta] = useState(null);

    return (  
        <ModalContext.Provider
            value={{
                guardarIdReceta
            }}
        >
            {props.children}
        </ModalContext.Provider>
    );
}
 
export default ModalProvider;
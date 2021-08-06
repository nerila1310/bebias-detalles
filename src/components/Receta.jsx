import React, {useContext, useState} from 'react';
import { ModalContext } from '../contexts/Modal.context';
import Modal from '@material-ui/core/Modal';
import { makeStyles } from '@material-ui/core/styles';

function getModalStyle() {
    const top = 50 ;
    const left = 50;
  
    return {
      top: `${top}%`,
      left: `${left}%`,
      transform: `translate(-${top}%, -${left}%)`,
    };
}

const useStyles = makeStyles(theme => ({
    paper: {
      position: 'absolute',
      width: 600,
      backgroundColor: theme.palette.background.paper,
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
}));

const Receta = ({receta}) => {

    //configuracion del Modal de material UI
    const [modalstyle] = useState(getModalStyle);
    const [open, setOpen] = useState(false);

    const classes = useStyles();

    const handleOpen = () => {
        setOpen(true);
    }
    const handleClose = () => {
        setOpen(false);
    }

    //extraer los valores del context
    const {inforeceta, guardarIdReceta, guardarReceta} = useContext(ModalContext);


    // muestra y formatea los ingredientes
    const mostrarIngredientes = inforeceta => {
        let ingredientes = [];
        for (let i = 1; i < 16; i++) {
            if(inforeceta[`strIngredient${i}`]){
                ingredientes.push(
                    <li
                    key={
                        inforeceta[`strIngredient${i}`] +
                        inforeceta[`strMeasure${i}`]
                    }
                    >{inforeceta[`strIngredient${i}`]} : {inforeceta[`strMeasure${i}`]}</li>
                )
            }
        }
        return ingredientes;
    }

    return (  
        <div className="col-md-4 mb-3">
            <div className="card">
                <h2 className="card-header">{receta.strDrink}</h2>
                <img className="card-img-top" src={receta.strDrinkThumb} alt={receta.strDrink}/>
                <div className="card-body">
                    <button
                        type="button"
                        className="btn btn-block btn-primary"
                        onClick={() => {
                            guardarIdReceta(receta.idDrink);
                            handleOpen();
                        }}
                    >
                        Ver receta
                    </button>

                    <Modal
                        open={open}
                        onClose={() => {
                            guardarIdReceta(null);
                            guardarReceta({})
                            handleClose();
                        }}
                    >
                        <div style={modalstyle} className={classes.paper}>
                            <h2>{inforeceta.strDrink}</h2>
                            <h3 className="mt-4">Instrucciones</h3>
                            <p> {inforeceta.strInstructions} </p>
                            <img className="img-fluid my-4" src={inforeceta.strDrinkThumb} alt={inforeceta.strDrink} />
                            <h3>Ingedientes y Cantidades</h3>
                            <ul>
                                {mostrarIngredientes(inforeceta)}
                            </ul>
                        </div>
                    </Modal>
                </div>
            </div>
        </div>
    );
}
 
export default Receta;
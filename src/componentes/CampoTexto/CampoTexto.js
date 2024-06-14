import "./CampoTexto.css"
import { useState } from "react";

const CampoTexto = (props) => {


const {type = "text"} = props;
console.log(type);

const RecibirInput = (event) =>{
    
   props.actualizarvalor(event.target.value);
}

const placeholderModificador = `${props.placeholder}...`
    return(
        <div className={`campo campo-${type}`}> 

            <label>{props.titulo}</label>
            <input 
           
            placeholder= {placeholderModificador} 
            required={props.required} 
            value={props.valor}
            onChange={RecibirInput}
            type={type}
            />

        </div>
    )
}

export default CampoTexto
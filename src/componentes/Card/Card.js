
import "./Card.css"

import { AiFillCloseCircle , AiOutlineHeart, AiFillHeart } from "react-icons/ai";

const Card = (props) => {

    const { Foto , Nombre, Puesto,id , fav } = props.datos;
    const {colorPrimario , EliminarColaborador , like} = props;
    return(
        <div className="colaborador">
            
            <AiFillCloseCircle  onClick={() =>EliminarColaborador(id)}  className="eliminar"/>
            <div className="encabezado" style={{backgroundColor: colorPrimario}}> 
                <img src={Foto} alt={id} />
            </div>
            <div className="info">
                <h4>{Nombre}</h4>
                <h5>{Puesto}</h5>
                {fav ? <AiFillHeart color="red" onClick={ ()=>{ like(id)}} /> :  <AiOutlineHeart  onClick={ ()=>{ like(id)}}/>}
                
                
            </div>
        </div>
    )

}


export default Card
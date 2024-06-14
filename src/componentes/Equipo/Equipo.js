
import "./Equipo.css"
import  Card  from "../Card/Card";
import hexToRgba from 'hex-to-rgba';

const Equipo = (props) =>{

    //Destructuracion
    const {colorPrimario ,  titulo , id} = props.datos
    const colaboradores = props.colaborador;
    const EliminarColaborador = props.EliminarColaborador;
    const actualizarColor = props.actualizarColor;
    const like = props.like;
    return <> { colaboradores.length > 0 && <section className="equipo" style={{backgroundColor: hexToRgba(colorPrimario , 0.6) }}>

            <input type="color" className="input" value={colorPrimario} onChange={(event) =>{ 
                
                actualizarColor(event.target.value , id);
            
            }}/>
            <h3 style={{borderBottomColor: colorPrimario}}>{titulo}</h3>
            <div className="Colaboradores">
         
        {
            colaboradores.map((event , index) => <Card datos={event} key={index} colorPrimario= {colorPrimario}
             EliminarColaborador={EliminarColaborador} like={like} />)
            
        }
            

            </div>
        </section>} </>
        
    
    

}



export default Equipo
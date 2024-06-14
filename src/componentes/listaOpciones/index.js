
import "./listaOpcion.css"

const ListaOpciones = (props) =>{

   
    const manejarCambio = (event) =>{

        console.log(event.target.value);
        props.actualizarvalor(event.target.value);

    }

    return(
        <div className="lista-opciones"> 
            <label>Equipos</label>
            <select value={props.valor} onChange={manejarCambio}>
            <option value="" disabled defaultValue="" hidden>Selecionar Equipo</option>
                {
                    props.equipos.map( (equipo , index) =>{
                        
                        return <option key={index}>{equipo}</option>

                         })
                }
               
            </select>
        </div>
    )

}

export default ListaOpciones
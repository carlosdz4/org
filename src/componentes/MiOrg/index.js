
import "./MiOrg.css"
import {useState} from "react"

const MiOrg = (props) =>{

    const [nombre , actualizarNombre] = useState("Harland");
    const [mostrar , actualizarmostrar] = useState(true);

    const manejarClick = () =>{

        console.log("estado " + mostrar);
        actualizarmostrar(!mostrar);

    }

    return(

        <section className="orgSection">
            <h3>Mi organización</h3>
            <img src="/img/add.png" alt="add" onClick={props.cambiarMostar}/>
        </section>

    )

};

export default MiOrg
import { useState } from "react";
import "./Formulario.css";
import  CampoTexto  from "../CampoTexto/CampoTexto.js";
import  ListaOpciones  from "../listaOpciones";
import  Boton  from "../Boton";


const Formulario = (props) =>{

    const [Nombre , actualizarNombre] = useState("");
    const [Puesto , actualizarPuesto] = useState("");
    const [Foto , actualizarFoto] = useState("");
    const [Equipos , actualizarEquipo] = useState("")
    const [titulo , actualizartitulo] = useState("")
    const [color , actualizarcolor] = useState("")
    const {registrarColaborador , registrarEquipo} = props;

    const manejarEnvioEvento = (event) =>{

        event.preventDefault();

        let datos = {
            Nombre:Nombre,
            Puesto:Puesto,
            Foto:Foto,
            Equipo:Equipos
        }

        
        registrarColaborador(datos);

    };

    const manejarNuevoEquipo = (event) =>{


        event.preventDefault();

        let datos = {
            titulo: titulo,
            colorPrimario: color,
        }

        
        registrarEquipo(datos);

    };
   

    return(
        <section className="formulario">
            <form onSubmit={manejarEnvioEvento}>
                <h2>
                Rellena el formulario para crear el colaborador.
                </h2>
                <CampoTexto titulo="Nombre" placeholder="Ingresar Nombre" required 
                valor={Nombre} actualizarvalor={actualizarNombre} />
                <CampoTexto titulo="Puesto" placeholder="Ingresar Puesto" required
                 valor={Puesto} actualizarvalor={actualizarPuesto} />
                <CampoTexto titulo="Foto" placeholder="Ingresar enlace de Foto" required
                 valor={Foto} actualizarvalor={actualizarFoto}/>
                <ListaOpciones valor={Equipos} actualizarvalor={actualizarEquipo} equipos={props.equipos}/>
                <Boton>
                    Crear
                   
                </Boton>
              
            </form>

            <form onSubmit={manejarNuevoEquipo}>
                <h2>
                Rellena el formulario para crear Equipo.
                </h2>
                <CampoTexto titulo="Titulo" placeholder="Ingresar el Titulo" required 
                valor={titulo} actualizarvalor={actualizartitulo} />
                <CampoTexto titulo="Color" placeholder="Ingresar el color en HX" required
                 valor={color} actualizarvalor={actualizarcolor} type={"color"} />
                
                <Boton>
                   Crear un equipo
                </Boton>
              
            </form>
        </section>
    )
}

export default Formulario

import { useState } from "react";
import {v4 as uuid} from 'uuid'
import './App.css';
import  Header  from "./componentes/Header/header.js";
import  Formulario  from "./componentes/Formulario/Formulario.js";
import  MiOrg  from "./componentes/MiOrg";
import Equipo from "./componentes//Equipo/Equipo.js";
import Footer from "./componentes/Footer"
function App() {

  const [mostrarFormulario , actualizarFormulario] = useState(false);
  const [colaboradores , actualizarcolaboradores] = useState([{
    id: uuid(),
    Equipo: "Front End",
    Foto: "https://github.com/harlandlohora.png",
    Nombre: "Harland Lohora",
    Puesto: "Instructor",
    fav:false
  },
  {
    id: uuid(),
    Equipo: "Programación",
    Foto: "https://github.com/genesysaluralatam.png",
    Nombre: "Genesys Rondón",
    Puesto: "Desarrolladora de software e instructora",
    fav:false
  },
  {
    id: uuid(),
    Equipo: "UX y Diseño",
    Foto: "https://github.com/JeanmarieAluraLatam.png",
    Nombre: "Jeanmarie Quijada",
    Puesto: "Instructora en Alura Latam",
    fav:false
  },
  {
    id: uuid(),
    Equipo: "Programación",
    Foto: "https://github.com/christianpva.png",
    Nombre: "Christian Velasco",
    Puesto: "Head de Alura e Instructor",
    fav:false
  },
  {
    id: uuid(),
    Equipo: "Innovación y  Gestión",
    Foto: "https://github.com/JoseDarioGonzalezCha.png",
    Nombre: "Jose Gonzalez",
    Puesto: "Dev FullStack",
    fav:true
  

  }]);

  const [equipos , actualizarequipos] = useState([
    {
      id: uuid(),
      titulo: "Programación",
      colorPrimario: "#57C278",
      
    },
    {
      id: uuid(),
      titulo: "Front End",
      colorPrimario: "#82CFFA",
      
    },
    {
      id: uuid(),
      titulo:  "Data Science",
      colorPrimario: "#A6D157",
      
    },
    {
      id: uuid(),
      titulo: "Devops",
      colorPrimario: "#E06B69",
      
    },
    {
      id: uuid(),
      titulo: "UX y Diseño",
      colorPrimario: "#DB6EBF",
     
    },
    {
      id: uuid(),
      titulo: "Móvil",
      colorPrimario: "#FFBA05",
      
    },
    {
      id: uuid(),
      titulo: "Innovación y  Gestión",
      colorPrimario: "#FF8A29",
     
    }
    
]);





  const cambiarMostar = () =>{

    actualizarFormulario(!mostrarFormulario);

  }

  const EliminarColaborador = (id) =>{
    console.log("Aqui eliminamos " + id );

    const nuevosColaboradores = colaboradores.filter((colaborador) => colaborador.id !== id);

    actualizarcolaboradores(nuevosColaboradores);
  }

  const actualizarColor = (color , id) =>{
    console.log("el color es " + color + " y el id es " + id)

    const actualizarequipo = equipos.map((equipo) =>{
      if(equipo.id === id){
        equipo.colorPrimario = color;
      }

      return equipo
    })
    actualizarequipos(actualizarequipo);
  }

  const like = (id) =>{
    
    const colaboradoresLike = colaboradores.map((colaborador) =>{
      if(colaborador.id === id){
        colaborador.fav = !colaborador.fav;
      }

      return colaborador
    })

    actualizarcolaboradores(colaboradoresLike);
  
  
  }

  // Registrar colaborador

  const registrarColaborador = (colaborador) =>{
    console.log(colaborador);
    //spread operator
    actualizarcolaboradores([...colaboradores , colaborador]);
  }


  //Registrar Equipo

  const registrarEquipo = (equipo) =>{
    console.log(equipo)
    actualizarequipos([...equipos , {...equipo , id: uuid()}])
  } 


  //Lista de Equipo

  

  return (

    <div>
      <Header/>
      { mostrarFormulario ? <Formulario 
      equipos={equipos.map((event) => event.titulo)}
      registrarColaborador = {registrarColaborador}
      registrarEquipo = {registrarEquipo}
      /> : <></>}
     
     <MiOrg cambiarMostar = {cambiarMostar} />

    {

      equipos.map((event) =>
         <Equipo datos={event} key={event.titulo}
          colaborador={colaboradores.filter(colaborador => colaborador.Equipo === event.titulo)}
          EliminarColaborador = {EliminarColaborador}
          actualizarColor = {actualizarColor}
          like={like}
      />  )

    }
    <Footer />



     
    </div>
  );
}

export default App;

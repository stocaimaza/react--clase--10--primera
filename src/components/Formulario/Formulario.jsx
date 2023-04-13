/* EVENTOS CON EL FORMULARIO */

//1) onSubmit.

import './Formulario.css'
import { useState } from 'react'

const Formulario = () => {
    //Creamos los estados:
    const [nombre, setNombre] = useState("");
    const [apellido, setApellido] = useState("");

    //Creamos el manejador del evento: 

    const handlerFormulario = (event) => {
        //Prevenimos la recarga de la página. 
        event.preventDefault();

        const nuevoCliente = {nombre, apellido};
        console.log(nuevoCliente);

        //event.target.value = "";
        //¿Por qué esto no funciona? ahhh ayudame loco

        setNombre("");
        setApellido("");

    }

  return (
    <form onSubmit={handlerFormulario}>
       <label htmlFor="nombre"> Nombre </label>
       <input type="text" id='nombre' onChange={(e)=>setNombre(e.target.value)} value={nombre} />

       <label htmlFor="apellido"> Apellido </label>
       <input type="text" id='apellido' onChange={(e)=>setApellido(e.target.value)} value={apellido}/>

       <button type='submit'>Enviar datos</button>
    </form>
  )
}

export default Formulario

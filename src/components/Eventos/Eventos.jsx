import './Eventos.css'
/* EVENTOS */

//1) Eventos manuales. 
//2) Eventos automáticos. (Ejemplo Netflix)

//Eventos más utilizados: 
//Click

import { useState } from 'react';

const Eventos = () => {
    const [input, setInput] = useState("");

    //handler = manejador
    const manejadorClick = () => {
        console.log("Click");
    }

    const manejadorInput = (event) => {
        //Voy a trabajar con el objeto "event". 
        setInput(event.target.value);
        //La propiedad target es la referencia al objeto del DOM que disparo el evento. 

        //console.log(input);
    }


  return (
    <div>
      <button onClick={ manejadorClick } > Haceme Click </button>

      <div className="caja"
            onMouseMove={()=>console.log("Nuevo Evento")}
            onMouseEnter={()=>console.log("Entraste")}
            onMouseLeave={()=>console.log("Saliste")}
            >
      </div>

      <form>
            <h2> {input} </h2>
            <label htmlFor="campo"> Ingrese texto </label>
            <input type="text" id='campo'  
                onChange={ manejadorInput }
                onKeyDown={()=>console.log("Presionaste una tecla")}
                onKeyUp={()=>console.log("Soltaste una tecla")}
                />

              {
                //htmlFor = es igual al for que usamos en HTML
                //change = se dispara cuando el usuario cambia el valor del input. 
                //keyDown = cuando presionamos una tecla. 
                //keyUp = cuando soltamos una tecla. 
              }  
      </form>
    </div>
  )
}

export default Eventos

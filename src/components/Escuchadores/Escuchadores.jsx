//También podemos utilizar los "event listeners"
// Trabajando con el objeto window. 
//Este objeto global representa a la ventana del navegador

const Escuchadores = () => {
    //Llamamos al objeto global window y al método addEventListener
    window.addEventListener("resize", ()=>console.log("cambiaste el tamaño"));

    window.addEventListener("click", ()=>console.log("click"));

    
  return (
    <div>
      
    </div>
  )
}

export default Escuchadores

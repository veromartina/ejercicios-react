import { useState } from "react"


const Titulo = () => {
    const [titulo, setTitulo]= useState("vero");

  return (
    <div>
        <h4>{titulo}</h4>
      <button onClick={()=>setTitulo("Hola")}>cambiar</button>
    </div>
  )
}

export default Titulo

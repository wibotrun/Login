import React from "react";
import Input from "./Input";

function Formulario(){
    return(
        <div>
            <form>
              <div>  <Input type="text" className="inputCorto" placeholder="Nombre"/> 
               <Input type="text" className="inputCorto" placeholder="Apellido"/></div>
              <div><Input type="email" placeholder="Email" className="inputLargo"/></div>
              <div><Input type="tel" className="inputCorto2" placeholder="Telefono"/></div>
              <div><Input type="password" className="inputCorto" placeholder="Contraseña"/>
              <Input type="password" className="inputCorto" placeholder="Confirmacion"/></div>
              
            </form>
        </div>
    )


}


export default Formulario;
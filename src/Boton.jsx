import React from "react";



function Boton(props) {
return (
<button className={props.className} onClick={props.onClick}>{props.Texto}</button>
        )



}
export default Boton;
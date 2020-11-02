import React from "react";

function App (props){
    console.log(props); 
    const{nombre,comentario} = props; 
    return(
        <div>
            <div className="nombre"> {nombre}</div>
            <div className="comentario"> {comentario}</div>
        </div>
    );
}

export default App;
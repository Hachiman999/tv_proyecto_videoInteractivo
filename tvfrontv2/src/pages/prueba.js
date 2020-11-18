import React, { Component } from "react";
import ReactDOM from 'react-dom';
import { AiOutlineClose } from "react-icons/ai";
import art from "../assets/art.jpg";
import logo_s from "../assets/logo_s.jpg";
import "./styles.css";

  

class App extends Component{

    constructor() {
        super();
        this.iniciopage = this.iniciopage.bind(this);
      }
    
      iniciopage() {
        this.props.history.push("/");
      }
      
    render() {
        return (
            
            <div className="card"> 
                 <img src={logo_s} width="100" height="50" className="logo_prueba" /> 
                <button onClick={this.iniciopage} className="btn-salir" > <AiOutlineClose size='2rem' /> </button>
                <div className="contenedor-card"> 
                <img src={art} width="100" height="50" className="img-card" />
                <h1>De una a mil muertes:el luto y el dolor que deja el coronavirus</h1>
                <p>SEMANA cuenta las historias de pérdida y dolor de las familias
                     que vieron morir a sus seres queridos por cuenta de la epidemia
                     que sacude al mundo. Una alianza con El País, de Cali, y El Universal,
                     de Cartagena, periódicos de las ciudades con más casos del país.</p>
                 <button className="btn-card"  > Ir</button>
           </div>
             </div>
        );
    }
}


export default App;

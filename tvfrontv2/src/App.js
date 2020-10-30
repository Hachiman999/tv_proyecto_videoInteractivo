import React, { Component } from "react";
import logo from './logo.svg';
import './App.css';

import axios from 'axios';

class App extends Component {
  constructor(){
    super();
    this.state = { correo: "", password: "" };
    this.loginfun = this.loginfun.bind(this);
  }
  loginfun = async () => {
   /* var requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };
    
    fetch("http://localhost:3030/us", requestOptions)
      .then(response => response.json())
      .then(result => console.log(result))
      .catch(error => console.log('error', error));*/
      const URL =  "http://localhost:3030/"
      //const data = JSON.stringify({"correo":"micorreo@uao.edu.co","password":"contraseña123"});
 /*     try{

        var init ={ 
            method: "POST", 
            mode:'no-cors',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({"correo":"micorreo@uao.edu.co","password":"contraseña123"})
        }
     
        var response = await fetch(URL, init)
        
            if (response.ok) {
    
                await response.json()
                .then(data =>{
                  console.log(data); 
               
                });
               
            } else {
                throw new Error(response.statusText)
            }
        } catch (err) {
            console.log("Error al realizar la petición AJAX: " + err.message)
        }*/
        const httpInstance = axios.create( {
          baseURL:"http://localhost:3030/",
          timeout: 1000,
          headers: {'Content-Type': 'application/json'}
      });//

      httpInstance.interceptors.response.use(null, error => {
        const expectedError = error.response && error.response.status >= 400 && error.response.status < 500;
        if (!expectedError) {
            // Loggear mensaje de error a un servicio como Sentry
            // Mostrar error genérico al usuario
            return Promise.reject(error);
        }
      }
    );
      //------
      httpInstance.post('login',{
        correo: "micorreo@uao.edu.co",
        password: "contraseña123"
      }).then(usuarios => {
        console.log(usuarios.data);
    }).catch(error => {
        console.error(error);
    })

  }// fin 
  
  
  render(){
    return(   
      <div>
      <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <p>
        Edit <code>src/App.js</code> and save to reload.
      </p>
      <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn React
      </a>
      <button
      onClick={this.loginfun}
      >
boton
     </button>
    </header>


  
  </div>
    ); 
  }
}



export default App;

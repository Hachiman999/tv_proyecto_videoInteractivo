import React, { Component } from "react";
import logo from '../logo.svg';
import '../App.css';

import axios from 'axios';

class App extends Component {
  constructor(){
    super();
    this.state = { dbdatos: [] };
   // this.loginfun = this.loginfun.bind(this);
  }

  componentWillMount(){
    const httpInstance = axios.create( {
        baseURL:"http://localhost:8080/",
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
    httpInstance.get('us').then(usuarios => {
     
        const array = usuarios.data; 
        
        console.log(array); 
    //  this.setState({dbdatos:array  })
  }).catch(error => {
      console.error(error);
  })
  }
 
 


 
 
  
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
    
        {this.state.dbdatos}



    </header>


  
  </div>
    ); 
  }
}



export default App;

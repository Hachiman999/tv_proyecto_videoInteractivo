import React, { Component } from "react";
import '../App.css';

//import axios from 'axios';

import Card from './cardbus'

class App extends Component {
  constructor(){
    super();
    this.state = { dbdatos: [] ,estado: true};
   
  }

  componentDidMount(){
    fetch('http://localhost:8080/us')
    .then(result => result.json())
    .then(data => {
     // this.setState({dbdatos:data})
     const {dbdatos}=this.state ; 
      for(var i =0 ; i< data.length ; i++){
        dbdatos.push(data[i]); 
      }
      this.setState({dbdatos: dbdatos, estado:false});

    // console.log(this.state.dbdatos.length) 
    });
  }//fin del componentWillMount
 
 


 
 
  
  render(){
    
    if(this.state.estado){
     // console.log(this.state.dbdatos.length) 
      return(
        <div>
          Cargando..
        </div>
      );
    }else{
      console.log(this.state.dbdatos) 
       
      return(   
        this.state.dbdatos.map((come)=>{
         return( <div key={come._id}>
           <Card nombre ={come.nombre} comentario={ come.comentario}/>
                
        </div>)
         })
        ); 
    }    
  }
}



export default App;
/**
 *    this.state.dbdatos.map
 *    const httpInstance = axios.create( {
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
       console.log(array)
     //  console.log(array); 
     this.setState({dbdatos:array  })
 }).catch(error => {
     console.error(error);
 })
 */
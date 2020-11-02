import React, {Component} from 'react'
import axios from 'axios';
class App extends Component{
constructor(){
    super()
    this.state={nombre:"", comentario:""}; 
    this.enviarinfo = this.enviarinfo.bind(this);
}
update = (name, e) => {
    this.setState({ [name]: e.target.value });
  };
enviarinfo(){
    
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
   const {nombre, comentario} = this.state; 
   httpInstance.post('cu',{
    nombre, comentario
   }).then(usuarios => {
          console.log(usuarios.data)   
 }).catch(error => {
     console.error(error);
 })
 
}

    render(){
        return(
            <div>
                <form>
                    nombre
                    <input 
                    name='nombre'
                    type='text'
                    value={this.state.nombre}
                    onChange={(e) => this.update("nombre", e)}
                    />

                    comentario 
                    <input
                     name='comentario'
                    type='text'
                    value={this.state.comentario}
                    onChange={(e) => this.update("comentario", e)}
                    />
                    <button
                     
                     onClick={this.enviarinfo}
                    >
                        enviar
                    </button>
                </form>
            </div>
        )
    }
}

export default App; 
import React, { Component } from "react";
import axios from 'axios';
import "./styles.css";



class App extends Component {

  constructor() {
    super();
    this.state = { render: false, data: {} };
    this.httpInstance = axios.create({
      baseURL: "https://covid19.mathdro.id",
      timeout: 1000,
      headers: { 'Content-Type': 'application/json' }
    });
  }
  componentDidMount () {
    this.httpInstance.get('/api/countries/Colombia').then(respuesta => {
      if (respuesta.status === 200) {

        const { data } = respuesta;
        this.setState({ data: data, })

      } else {
        console.log(respuesta);
      }
    });

  }


  render () {
    if (this.state.render) {
      return (

        <div >
          {this.state.datos}

        </div>
      );
    } else {
      return (

        <div >
          cargando ...
        </div>
      );
    }

  }
}


export default App;

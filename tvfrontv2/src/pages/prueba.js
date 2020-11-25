import React, { Component } from "react";
import axios from 'axios';
import Lottie from 'react-lottie';
import virus from "../assets/virus.json"
import "./styles.css";



class App extends Component {

  constructor() {
    super();
    this.state = {
      render: false, confirmed: {}, deaths: {}, recovered: {}, defaultOptions: {
        loop: true,
        autoplay: true,
        animationData: virus,
        rendererSettings: {
          preserveAspectRatio: "xMidYMid slice"
        }
      }
    };
    this.httpInstance = axios.create({
      baseURL: "https://covid19.mathdro.id",
      timeout: 1000,
      headers: { 'Content-Type': 'application/json' }
    });
  }
  componentDidMount () {
    this.httpInstance.get('/api/countries/Colombia').then(respuesta => {
      if (respuesta.status === 200) {

        const { data: { confirmed, deaths, recovered } } = respuesta;
        //console.log(confirmed, deaths, recovered)
        this.setState({ confirmed, deaths, recovered, render: true })
        console.log(this.state.data);

      } else {
        console.log(respuesta);
      }
    });

  }


  render () {
    if (this.state.render) {
      return (

        <div >

          <div className="album py-5">
            <div className="container">
              <div className="row">
                <div className="col-md-4">
                  <div className="card mb-4">
                    <Lottie className="bd-placeholder-img card-img-top" width="100%" height="225"
                      options={this.state.defaultOptions}

                    />
                    <div className="card-body">
                      <p className="card-text">
                        <p className="text-danger display-4 text-center">
                          123.123.123
                       </p>
                        <p className="text-center text-dark  display-4 ">
                          Contagiados
                       </p>
                      </p>
                    </div>

                  </div>
                </div>
                <div className="col-md-4">
                  <div className="card mb-4">
                    <Lottie className="bd-placeholder-img card-img-top" width="100%" height="225"
                      options={this.state.defaultOptions}

                    />
                    <div className="card-body">
                      <p className="card-text">
                        <p className="text-danger display-4 text-center">
                          123.123.123
                       </p>
                        <p className="text-center text-dark  display-4 ">
                          Contagiados
                       </p>
                      </p>
                    </div>

                  </div>
                </div>
              </div>
            </div>
          </div>
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

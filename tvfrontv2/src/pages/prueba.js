import React, { Component } from "react";
import axios from 'axios';
import Lottie from 'react-lottie';
import virus from "../assets/virus.json";
import saludable from "../assets/saludable.json";
import muerto from "../assets/dead.json";
import manos from "../assets/manos.json";
import "./styles.css";



class App extends Component {

  constructor() {
    super();
    this.state = {
      render1: false, render2: false, comentarios: [], confirmed: {}, deaths: {}, recovered: {}, virus: {
        loop: true,
        autoplay: true,
        animationData: virus,
        rendererSettings: {
          preserveAspectRatio: "xMidYMid slice"
        }
      },
      saludable: {
        loop: true,
        autoplay: true,
        animationData: saludable,
        rendererSettings: {
          preserveAspectRatio: "xMidYMid slice"
        }
      },
      muerto: {
        loop: true,
        autoplay: true,
        animationData: muerto,
        rendererSettings: {
          preserveAspectRatio: "xMidYMid slice"
        }
      },
      manos: {
        loop: true,
        autoplay: true,
        animationData: manos,
        rendererSettings: {
          preserveAspectRatio: "xMidYMid slice"
        }
      }
    };

  }
  componentDidMount () {
    axios.get(`https://covid19.mathdro.id/api/countries/Colombia`)
      .then(res => {
        const { data: { confirmed, deaths, recovered } } = res;
        this.setState({ confirmed, deaths, recovered, render1: true })

      })

    axios.get(`http://localhost:8080/us`)
      .then(res => {
        const { data } = res;
        this.setState({ comentarios: data, render2: true });

      })
  }//fin del componentDidmount


  render () {
    if (this.state.render1 && this.state.render2) {
      return (

        <div >

          <div className="album py-5">
            <div className="container">
              <div className="row">
                <div className="col-md-4">
                  <div className="card mb-4">
                    <Lottie className="bd-placeholder-img card-img-top" width="100%" height="225"
                      options={this.state.virus}

                    />
                    <div className="card-body">
                      <p className="card-text">
                        <p className="text-danger display-4 text-center">
                          {this.state.confirmed.value}
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
                      options={this.state.saludable}

                    />
                    <div className="card-body">
                      <p className="card-text">
                        <p className="text-danger display-4 text-center">
                          {this.state.recovered.value}
                        </p>
                        <p className="text-center text-dark  display-4 ">
                          Recuperados
                       </p>
                      </p>
                    </div>

                  </div>
                </div>
                <div className="col-md-4">
                  <div className="card mb-4">

                    <div className="card-body">
                      <p className="card-text">
                        <p className="text-danger display-4 text-center">
                          {this.state.deaths.value}
                        </p>
                        <p className="text-center text-dark  display-4 ">
                          Recuperados
                       </p>
                      </p>
                    </div>

                  </div>
                </div>
              </div>
              <div className="row">
                <div className="text-dark">

                  {this.state.comentarios.map(item => (
                    <div className="view overlay zoom">
                      <Lottie key={item._id} className="img-fluid" alt="comentario"

                        options={this.state.manos}
                        height={15}
                        width={15}

                      />
                      <div className="mask flex-center">
                        <p className="white-text">{item.nombre}</p>
                        <p className="white-text">{item.comentario}</p>
                      </div>


                    </div>

                  ))}


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

import React, { Component } from "react";
import axios from 'axios';
import Lottie from 'react-lottie';
import virus from "../assets/virus.json";
import saludable from "../assets/saludable.json";
import muerto from "../assets/dead.json";
import manos from "../assets/manos.json";
import "./styless2.css";


class App extends Component {

  constructor() {
    super();
    this.state = {
      render1: false, render2: false, popoverOpen: false, comentarios: [], statuspop: [], confirmed: {}, deaths: {}, recovered: {}, virus: {
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
    this.togglePopover = this.togglePopover.bind(this);
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
        var resstatus = [];
        for (var i in data) {
          resstatus.push({
            id: data[i]._id,
            nombre: data[i].nombre,
            comentario: data[i].comentario,
            status: false
          })

        }
        this.setState({ comentarios: resstatus, render2: true });

      })
  }//fin del componentDidmount
  togglePopover () {
    this.setState({ popoverOpen: !this.state.popoverOpen })
  }

  render () {
    if (this.state.render1 && this.state.render2) {
      return (

        <div >

          <div className="album py-5">
            <div className="container">
              <div className="row">
                <div className="col-md-4">
                  <div className="card car_v mb-4">
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
                  <div className="card car_v mb-4">
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
                  <div className="card car_v mb-4">
                    <Lottie className="bd-placeholder-img card-img-top" width="100%" height="225"
                      options={this.state.muerto}

                    />
                    <div className="card-body">
                      <p className="card-text">
                        <p className="text-danger display-4 text-center">
                          {this.state.deaths.value}
                        </p>
                        <p className="text-center text-dark  display-4 ">
                          Fallecidos
                       </p>
                      </p>
                    </div>

                  </div>
                </div>
              </div>
              <div className="row">

                {this.state.comentarios.map(item => (
                  <div key={item.id}  >
                    <div className="col-md-4">

                      <button
                        type="button"
                        className="btn "
                        id={item._id}

                      >

                        <Lottie className="img-fluid" alt="comentario"

                          options={this.state.manos}
                          height={100}
                          width={100}

                        />

                      </button>

                    </div>


                  </div>

                ))}


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

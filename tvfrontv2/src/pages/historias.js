import React, { Component } from "react";
import { AiOutlinePlayCircle } from "react-icons/ai";
import ejem1 from "../assets/ejem1.gif";
import ejem2 from "../assets/ejem2.gif";
import ejem3 from "../assets/ejem3.mp4";
import ejem4 from "../assets/ejem4.mp4";
import './styles.css';
class App extends Component {
  constructor() {
    super();
    this.rutahistoria2 = this.rutahistoria2.bind(this);
    this.rutahistoria1 = this.rutahistoria1.bind(this);
  }

  rutahistoria1() {
    this.props.history.push("/ha");
  }
  rutahistoria2() {
    this.props.history.push("/hb");
  }


  render() {

    return (
      <div className=" container-fluid m-0  p-0">
    
        <div className="row m-0 p-0 ">
          <div className="col-12 col-sm-6 p-0">
            <video autoPlay loop muted src={ejem3} className=" p-0 o-vid  w-auto m-0 " />
            <div className="col-12 p-0 m-0 o-btn-container">
              <div className=" d-flex o-btn-container justify-content-center">
                <span onClick={this.rutahistoria1} className="btn mt-auto btn-link  p-0 o-btn-story"  > <AiOutlinePlayCircle size='10rem' /> </span>
              </div>
            </div>
            <div className="col-12  mt-5 p-0 m-0 ">
              <div className=" d-flex mt-5  justify-content-center">
                <p className="h3 titulo mt-5 text-white">Trabajador</p>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-6">
            <video autoPlay loop muted src={ejem4} className="m-0  o-vid p-0 w-auto  " />
            <div className="col-12 p-0 m-0 o-btn-container">
              <div className=" d-flex o-btn-container justify-content-center">
                <span onClick={this.rutahistoria2} className="btn mt-auto btn-link  p-0 o-btn-story"  > <AiOutlinePlayCircle size='10rem' /> </span>
              </div>
            </div>
            <div className="col-12 mt-5 p-0 m-0 ">
              <div className=" d-flex mt-5  justify-content-center">
                <p className="h3 titulo mt-5">Abuela</p>
              </div>
            </div>
          </div>
        </div>
  
        <div className="row w-100 m-0 p-0">
          <nav className="navbar shadow-sm fixed-bottom o-navbar w-100 m-0 p-4 d-flex justify-content-center  navbar-expand-sm o-navbar ">
            <p className="h1 o-subtitulo text-white">Selecciona una historia</p>
          </nav>
        </div>
        
      </div>
    );
  }
}

export default App;

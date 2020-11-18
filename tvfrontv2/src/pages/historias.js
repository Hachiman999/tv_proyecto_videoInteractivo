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
      <div className="contenedor-btn">
        <button onClick={this.rutahistoria1} className="btn-historia1"  > <AiOutlinePlayCircle size='10rem' /> </button>
        <button onClick={this.rutahistoria2} className="btn-historia2" > <AiOutlinePlayCircle size='10rem' /> </button>
       
        <div className="contenerdor-video" >
        <video autoPlay loop playsInline muted src={ejem3} className="videof1" />
        <video autoPlay loop playsInline muted src={ejem4} className="videof2" />
        </div> 
      </div>
    );
  }
}

export default App;

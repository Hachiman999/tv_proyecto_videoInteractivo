import React, { Component } from "react";
import "./styless2.css";
import video1 from "../assets/Creditos.mp4";
import { FaRegArrowAltCircleRight } from "react-icons/fa";
class App extends Component {


    render () {
        return (
            <div className="container-fluid p-5  o-form-container">
                <div className="row d-flex justify-content-center">
                    <video className=" video " src={video1} autoPlay controls />
                </div>
                <div className="row d-flex justify-content-end">
                    <a href="/" className="btn btn-lg  btn-link p-0"><FaRegArrowAltCircleRight className=" display-3 o-btn-close mr-5" /></a>
                </div>

            </div>);
    }
}

export default App; 
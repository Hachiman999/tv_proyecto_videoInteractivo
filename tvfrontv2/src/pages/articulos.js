import React, { Component } from "react";
import imgI from "../assets/articulos.PNG"
import s from "../assets/logo_s.jpg"
import { AiOutlineCloseCircle } from "react-icons/ai";
class App extends Component {


    render () {
        return (
            <div>
                <div className="row p-1 mt-5">
                    <a href="https://www.semana.com/noticias/covid-19/" className="btn btn-link ml-5 mr-auto mt-1 p-0 "><img className="o-articule-img" alt="some value" src={s} /></a>
                    <a href="/" className="btn btn-lg  btn-link p-0 mr-5 ml-auto "><AiOutlineCloseCircle className=" h1 o-btn-close m-0" /></a>
                </div>

                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <div class="card mt-4" >
                                <a href="/">
                                    <img className="card-img-top" alt="Card image cap" src={imgI} />
                                </a>
                                <div class="card-body">

                                    <p className="card-text  text-dark">De una a mil muertes:el luto y el dolor que deja el coronavirus</p>

                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div class="card mt-4" >
                                <a href="#">
                                    <img className="card-img-top" src={imgI} alt="Card image cap" />
                                </a>
                                <div class="card-body">

                                    <p className="card-text  text-dark">De una a mil muertes:el luto y el dolor que deja el coronavirus</p>

                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div class="card mt-4" >
                                <a href="#">
                                    <img className="card-img-top" src={imgI} alt="Card image cap" />
                                </a>
                                <div class="card-body">

                                    <p className="card-text  text-dark">De una a mil muertes:el luto y el dolor que deja el coronavirus</p>

                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div class="card mt-4" >
                                <a href="#">
                                    <img className="card-img-top" src={imgI} alt="Card image cap" />
                                </a>
                                <div class="card-body">

                                    <p className="card-text  text-dark">De una a mil muertes:el luto y el dolor que deja el coronavirus</p>

                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div class="card mt-4" >
                                <a href="#">
                                    <img className="card-img-top" src={imgI} alt="Card image cap" />
                                </a>
                                <div class="card-body">

                                    <p className="card-text  text-dark">De una a mil muertes:el luto y el dolor que deja el coronavirus</p>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
import React, { Component } from "react";
import imgI from "../assets/articulos.PNG"
import s from "../assets/logo_s.jpg"
import { FaRegArrowAltCircleRight } from "react-icons/fa";
class App extends Component {
    constructor(props) {
        super(props)
    }
    render () {
        return (
            <div>
                <div className="row p-1 mt-5">
                    <a href="" className="btn btn-link ml-5 mr-auto mt-1 p-0 "><img className="o-articule-img" alt="some value" src={s} /></a>

                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <div class="card mt-4" >
                                <img className="card-img-top" src={imgI} alt="Card image cap" />
                                <div class="card-body">
                                    <h5 className="card-title text-dark">Card title</h5>
                                    <p className="card-text  text-dark">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <a href="#" className="btn btn-primary">ir ar articulo</a>
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
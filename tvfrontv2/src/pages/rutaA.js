import React, { Component } from "react";
import video1 from "../assets/A1.mp4";
import video2 from "../assets/A2.mp4";
import video3 from "../assets/A3.mp4";
import video4 from "../assets/A4.mp4";
import video5 from "../assets/A5.mp4";
import videoMuerte from "../assets/MuerteA.mp4";
import Lottie from 'react-lottie';
import conducir from "../assets/conducir.json";
import radio from "../assets/radio.json";
import cuarentena from "../assets/cuarentena.json";
import trabajar from "../assets/trabajar.json";
import trabajar2 from "../assets/trabajar2.json";
import comprar from "../assets/comprar.json";
import casa from "../assets/casa.json";
import fiesta from "../assets/fiesta.json";

import "./styles.css";

class rutaA extends Component {
    constructor(props) {
        super(props);
        this.changeVideo = this.changeVideo.bind(this);
        this.retry = this.retry.bind(this);
        this.next = this.next.bind(this);

        this.state = {
            video: 1,
            lastVideo: 1,
            pause:false,
            conducir: {
                loop: true,
                autoplay: true,
                animationData: conducir,
                rendererSettings: {
                    preserveAspectRatio: "xMidYMid slice"
                }
            },
            radio: {
                loop: true,
                autoplay: true,
                animationData: radio,
                rendererSettings: {
                    preserveAspectRatio: "xMidYMid slice"
                }
            }, cuarentena: {
                loop: true,
                autoplay: true,
                animationData: cuarentena,
                rendererSettings: {
                    preserveAspectRatio: "xMidYMid slice"
                }
            },  trabajar: {
                loop: true,
                autoplay: true,
                animationData: trabajar,
                rendererSettings: {
                    preserveAspectRatio: "xMidYMid slice"
                }
            }, comprar: {
                loop: true,
                autoplay: true,
                animationData: comprar,
                rendererSettings: {
                    preserveAspectRatio: "xMidYMid slice"
                }
            },
            trabajar2: {
                loop: true,
                autoplay: true,
                animationData: trabajar2,
                rendererSettings: {
                    preserveAspectRatio: "xMidYMid slice"
                }
            }, fiesta: {
                loop: true,
                autoplay: true,
                animationData: fiesta,
                rendererSettings: {
                    preserveAspectRatio: "xMidYMid slice"
                }
            }, casa: {
                loop: true,
                autoplay: true,
                animationData: casa,
                rendererSettings: {
                    preserveAspectRatio: "xMidYMid slice"
                }
            }
            
        }
    }
    changeVideo = () => {
        this.setState({ video: this.state.video + 1, pause: false, lastVideo: this.state.lastVideo + 1 });


    }

    retry = () => {
        this.setState({ video: 8, pause: false });
    }

    next = () => {
        
        this.state.video < 5 ? this.setState({ pause: true }) : this.state.video === 8 ? this.setState({ video: this.state.lastVideo }) : this.props.history.push("/honorPage");
    }
    render() {
        return (
            <div className="container-fluid o-story-container m-0 p-0">
                <div className={(this.state.pause ? "o-show " : "")+"o-test-pause h-100 w-100  row"}>
                    <div className="col-12 d-flex justify-content-center  col-sm-12">
                        <p className="o-text-chose text-white mt-5">Selecciona las opciones que te parezcan correctas</p>
                    </div>
                </div>
                <div className={(this.state.pause ? "o-show  " : "") + "o-test-pause h-100 w-100  row"}>
                    <div className="col-12 d-flex justify-content-end align-self-center col-sm-6">
                        <span onClick={this.changeVideo} className="btn o-option-video-card">
                            <Lottie className="bd-placeholder-img card-img-top" width="80%" height="350px" options={ this.state.video === 1 ? this.state.radio : this.state.video === 2 ? this.state.cuarentena : this.state.video === 3 ?  this.state.comprar : this.state.casa } />
                            <p className="h3 text-dark text-center mt-5 font-weight-bold">{this.state.video === 1 ? "Escuchar la radio" : this.state.video === 2 ? "Entrar en cuarentena" : this.state.video === 3 ? "Comprar" : "Volver a casa"}</p>
                            <div className="d-flex justify-content-center">
                                <div className=" bg-success o-option-border">
                                </div>
                            </div>
                        </span>
                    </div>
                    <div className="col-12 col-sm-6 d-flex justify-content-start align-self-center">
                        <span onClick={this.retry} className="btn o-option-video-card">
                            <Lottie className="bd-placeholder-img card-img-top" width="80%" height="350px" options={this.state.video === 1 ? this.state.conducir : this.state.video === 2 ? this.state.trabajar : this.state.video === 3 ? this.state.trabajar2 : this.state.fiesta} />
                            <p className="h3 text-dark text-center mt-5 font-weight-bold">{this.state.video === 1 ? "Seguir conduciendo" : this.state.video === 2 ? "Trabajar" : this.state.video === 3 ? "Trabajar" : "Ir a la fiesta"}</p>
                            <div className="d-flex justify-content-center">
                                <div className=" bg-danger o-option-border">
                                </div>
                            </div>
                        </span>
                    </div>

                </div>
                <div className="d-flex justify-content-center">
                    <video src={this.state.video === 1 ? video1 : this.state.video === 2 ? video2 : this.state.video === 3 ? video3 : this.state.video === 4 ? video4 : this.state.video === 5 ? video5 : videoMuerte} id="storyvid" onEnded={this.next} autoPlay muted={false} controls className="o-video-stories" />
                </div>

            </div>
        )
    }
}

export default rutaA;
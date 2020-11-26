import React, { Component } from "react";
import video1 from "../assets/RUTA 2 VERSION FINAL DEFINITIVA/h2-1.mp4";
import video2 from "../assets/RUTA 2 VERSION FINAL DEFINITIVA/h2-2.mp4";
import video3 from "../assets/RUTA 2 VERSION FINAL DEFINITIVA/h2-3.mp4";
import video4 from "../assets/RUTA 2 VERSION FINAL DEFINITIVA/h2-4.mp4";
import videoMuerte from "../assets/RUTA 2 VERSION FINAL DEFINITIVA/Muerte.mp4";
import Lottie from 'react-lottie';
import familiar from "../assets/familiar.json";
import bus from "../assets/bus.json";
import ambulancia from "../assets/ambulancia.json";
import hospital from "../assets/hospital.json";
import casa from "../assets/casa.json";

import "./styles.css";

class rutaB extends Component {
    constructor(props) {
        super(props);
        this.changeVideo = this.changeVideo.bind(this);
        this.retry = this.retry.bind(this);
        this.next = this.next.bind(this);

        this.state = {
            video: 1,
            lastVideo: 1,
            pause: false,
            familiar: {
                loop: true,
                autoplay: true,
                animationData: familiar,
                rendererSettings: {
                    preserveAspectRatio: "xMidYMid slice"
                }
            },
            bus: {
                loop: true,
                autoplay: true,
                animationData: bus,
                rendererSettings: {
                    preserveAspectRatio: "xMidYMid slice"
                }
            }, ambulancia: {
                loop: true,
                autoplay: true,
                animationData: ambulancia,
                rendererSettings: {
                    preserveAspectRatio: "xMidYMid slice"
                }
            }, hospital: {
                loop: true,
                autoplay: true,
                animationData: hospital,
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

        this.state.video < 4 ? this.setState({ pause: true }) : this.state.video === 8 ? this.setState({ video: this.state.lastVideo }) : this.props.history.push("/honorPage");
    }
    render() {
        return (
            <div className="container-fluid o-story-container m-0 p-0">
                <div className={(this.state.pause ? "o-show " : "") + "o-test-pause h-100 w-100  row"}>
                    <div className="col-12 d-flex justify-content-center  col-sm-12">
                        <p className="o-text-chose text-white mt-5">Selecciona las opciones que te parezcan correctas</p>
                    </div>
                </div>
                <div className={(this.state.pause ? "o-show  " : "") + "o-test-pause h-100 w-100  row"}>
                    <div className="col-12 d-flex justify-content-end align-self-center col-sm-6">
                        <span onClick={this.changeVideo} className="btn o-option-video-card">
                            <Lottie className="bd-placeholder-img card-img-top" width="80%" height="350px" options={this.state.video === 1 ? this.state.familiar : this.state.video === 2 ? this.state.ambulancia : this.state.hospital} />
                            <p className="h3 text-dark text-center mt-5 font-weight-bold">{this.state.video === 1 ? "Llamar a un familiar" : this.state.video === 2 ? "Llamar una ambulancia" : "Hospitalizarse"}</p>
                            <div className="d-flex justify-content-center">
                                <div className=" bg-success o-option-border">
                                </div>
                            </div>
                        </span>
                    </div>
                    <div className="col-12 col-sm-6 d-flex justify-content-start align-self-center">
                        <span onClick={this.retry} className="btn o-option-video-card">
                            <Lottie className="bd-placeholder-img card-img-top" width="80%" height="350px" options={this.state.video === 1 ? this.state.bus : this.state.video === 2 ?  this.state.familiar : this.state.casa} />
                            <p className="h3 text-dark text-center mt-5 font-weight-bold">{this.state.video === 1 ? "Ir en bus" : this.state.video === 2 ? "Llamar a un familiar" : "Volver a casa"}</p>
                            <div className="d-flex justify-content-center">
                                <div className=" bg-danger o-option-border">
                                </div>
                            </div>
                        </span>
                    </div>

                </div>
                <div className="d-flex justify-content-center">
                    <video src={this.state.video === 1 ? video1 : this.state.video === 2 ? video2 : this.state.video === 3 ? video3 : this.state.video === 4 ? video4 : videoMuerte} id="storyvid" onEnded={this.next} autoPlay muted={false} controls className="o-video-stories" />
                </div>

            </div>
        )
    }
}

export default rutaB;
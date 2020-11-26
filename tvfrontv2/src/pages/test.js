import React, { Component } from "react";
import video1 from "../assets/A1.mp4";
import video2 from "../assets/A2.mp4";
import video3 from "../assets/A3.mp4";
import video4 from "../assets/A4.mp4";
import video5 from "../assets/A5.mp4";
import video6 from "../assets/A6.mp4";
import video7 from "../assets/A7.mp4";
import video8 from "../assets/A8.mp4";
import video9 from "../assets/A9.mp4";
import video10 from "../assets/A10.mp4";
import Lottie from 'react-lottie';
import conducir from "../assets/conducir.json";
import radio from "../assets/radio.json";



import "./styles.css";

class test extends Component {
    constructor(props) {
        super(props);
        this.changeVideo = this.changeVideo.bind(this);
        this.state = {
            video: 1,
            pause:true,
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
            }
        }
    }
    changeVideo = () => {

    }
    //   <p className="h3 text-white">Selecciona las opciones que te parezcan correctas</p>
    render() {
        return (
            <div className="container-fluid o-story-container m-0 p-0">
                <div className={(this.state.pause ? "invisible " : "")+"o-test-pause h-100 w-100  row"}>
                    <div className="col-12 d-flex justify-content-center  col-sm-12">
                        <p className="o-text-chose text-white mt-5">Selecciona las opciones que te parezcan correctas</p>
                    </div>
                </div>
                <div className={(this.state.pause ? "invisible " : "") + "o-test-pause h-100 w-100  row"}>
                    <div className="col-12 d-flex justify-content-end align-self-center col-sm-6">
                        <span onClick={this.changeVideo} className="btn o-option-video-card">
                            <Lottie className="bd-placeholder-img card-img-top" width="80%" height="350px" options={this.state.radio} />
                            <p className="h3 text-dark text-center mt-5 font-weight-bold">Protocolo de bioseguridad</p>
                            <div className="d-flex justify-content-center">
                                <div className=" bg-success o-option-border">
                                </div>
                            </div>
                        </span>
                    </div>
                    <div className="col-12 col-sm-6 d-flex justify-content-start align-self-center">
                        <span onClick={this.changeVideo} className="btn o-option-video-card">
                            <Lottie className="bd-placeholder-img card-img-top" width="80%" height="350px" options={this.state.conducir} />
                            <p className="h3 text-dark text-center mt-5 font-weight-bold">Irse</p>
                            <div className="d-flex justify-content-center">
                                <div className=" bg-danger o-option-border">
                                </div>
                            </div>
                        </span>
                    </div>

                </div>
                <div className="d-flex justify-content-center">
                    <video src={video1} id="storyvid" onEnded={() => this.changeVideo} autoPlay controls className="o-video-stories" />
                </div>

            </div>
        )
    }
}

export default test;
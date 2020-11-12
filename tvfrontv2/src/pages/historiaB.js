import React, { Component } from "react";
import video1 from "../assets/B1.mp4";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = { tiempo: 0, video: 1, src: video1 };

    this.comportamientoVideo = this.comportamientoVideo.bind(this);
  }
  componentDidMount = () => {
    var { src } = this.state;

    this.video = document.createElement("video");
    this.video.src = src;
    this.video.style.width = "75%";
    this.video.controls = true;
    this.mount.appendChild(this.video);
    this.comportamientoVideo(this.mount);
  };
  comportamientoVideo(body) {
    var { video, tiempo, src } = this.state;
    this.video.play();
    //  var estadob = true;
    // VARIABLES VIDEO 1
    var btn1 = document.createElement("BUTTON");
    btn1.id = "boton1";
    btn1.appendChild(document.createTextNode("Aceptar"));
    var btn2 = document.createElement("BUTTON");
    btn2.id = "boton2";
    btn2.appendChild(document.createTextNode("rechazar"));
    this.video.addEventListener(
      "timeupdate",
      (ev) => {
        tiempo = ev.target.currentTime;
        if (tiempo >= ev.target.duration - 0.5 && video === 1) {
          ev.target.currentTime = ev.target.duration - 2;
        }
      },
      true
    );
  }

  render() {
    return (
      <div>
        <div
          style={{ width: "100vw", height: "50.1vw" }}
          id="boardCanvas"
          ref={(mount) => {
            this.mount = mount;
          }}
        />
      </div>
    );
  }
}
export default App;

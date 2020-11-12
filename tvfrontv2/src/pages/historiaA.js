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
    var estadob = true;
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
        // console.log(ev)
        if (tiempo >= ev.target.duration - 0.5 && video === 1) {
          ev.target.currentTime = ev.target.duration - 2;

          if (estadob) {
            body.appendChild(btn1);
            body.appendChild(btn2);
            estadob = false;
          }

          btn1.addEventListener(
            "click",
            () => {
              video = 2;
              src = video2;
              this.video.src = src;
              this.video.play();
              btn1.remove(btn1);
              btn2.remove(btn2);
              estadob = true;
            },
            true
          );

          btn2.addEventListener(
            "click",
            () => {
              console.log("mala desicion");
            },
            true
          );
        }

        // console.log(tiempo)
        if (tiempo >= ev.target.duration - 0.5 && video === 2) {
          video = 3;
          src = video3;
          this.video.src = src;
          this.video.play();
        }
        if (tiempo >= ev.target.duration - 0.5 && video === 3) {
          video = 4;
          src = video4;
          this.video.src = src;
          this.video.play();
        }
        if (tiempo >= ev.target.duration - 0.5 && video === 4) {
          video = 5;
          src = video5;
          this.video.src = src;
          this.video.play();
        }
        if (tiempo >= ev.target.duration - 0.5 && video === 5) {
          video = 6;
          src = video6;
          this.video.src = src;
          this.video.play();
        }
        if (tiempo >= ev.target.duration - 0.5 && video === 6) {
          ev.target.currentTime = ev.target.duration - 2;

          if (estadob) {
            body.appendChild(btn1);
            body.appendChild(btn2);
            estadob = false;
          }

          btn1.addEventListener(
            "click",
            () => {
              video = 7;
              src = video7;
              this.video.src = src;
              this.video.play();
              btn1.remove(btn1);
              btn2.remove(btn2);
              estadob = true;
            },
            true
          );

          btn2.addEventListener(
            "click",
            () => {
              console.log("mala desicion");
            },
            true
          );
        }

        if (tiempo >= ev.target.duration - 0.5 && video === 7) {
          ev.target.currentTime = ev.target.duration - 2;

          if (estadob) {
            body.appendChild(btn1);
            body.appendChild(btn2);
            estadob = false;
          }

          btn1.addEventListener(
            "click",
            () => {
              video = 8;
              src = video8;
              this.video.src = src;
              this.video.play();
              btn1.remove(btn1);
              btn2.remove(btn2);
              estadob = true;
            },
            true
          );

          btn2.addEventListener(
            "click",
            () => {
              video = 9;
              src = video9;
              this.video.src = src;
              this.video.play();
              btn1.remove(btn1);
              btn2.remove(btn2);
              estadob = true;
            },
            true
          );
        }
        if (tiempo >= ev.target.duration - 0.5 && video === 9) {
          video = 10;
          src = video10;
          this.video.src = src;
          this.video.play();
        }
        //fin del evento de escuchar
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

import React, { Component } from "react";
import img from "../assets/fondo.GIF";
import s from "../assets/logo_s.jpg"
import './styles.css';
class App extends Component {
  constructor(props) {
    super(props);

    this.metodoq = this.metodoq.bind(this);
    this.metodox = this.metodox.bind(this);
  }

  metodoq() {
    this.props.history.push("/");
  }
  metodox() {
    this.props.history.push("/hs");
  }
  render() {
    return (
      <div className="container container_index">
        <img id="background-video" alt="some value" src={img} />
        <div className="row w-100">
          <div className="col-12 col-sm-6">
            <p className="ml-5 mt-5 display-3 titulo text-white ">De una a mil muertes:</p>
            <p className="ml-5 mb-5 display-3 titulo text-white ">El luto y el dolor que deja el coronavirus</p>
          </div>
        </div>
        <div className="row w-100 mb-5 mt-5 ml-3">
          <div className="col-12 ml-5 mb-5 col-sm-6">
            <button type="button" className="btn btn-link mt-5" onClick={this.metodox}><p className="ml-5 mt-5 h1 o-subtitulo text-white ">Da click para iniciar</p></button>
          </div>
        </div>
        <div className="row p-1 mt-5">
          <button type="button" className="btn btn-link ml-auto mr-5 mt-5 p-0 " onClick={this.metodoq}><img className="o-articule-img" alt="some value" src={s} /></button>
        </div>
      </div>
    );
  }
}

export default App;

/*
addEventListener("click", ()=>{}, false);
*/

/*
         ,--"""",--.__,---[],-------._
       ,"   __,'            \         \--""""""==;-
     ," _,-"  "/---.___     \       ___\   ,-'',"
    /,-'      / ;. ,.--'-.__\  _,-"" ,| `,'   /
   /``""""-._/,-|:\       []\,' ```-/:;-. `. /
             `  ;:::      ||       /:,;  `-.\
                =.,'__,---||-.____',.=
                =(:\_     ||__    ):)=
               ,"::::`----||::`--':::"._
             ,':::::::::::||::::::::::::'.
    .__     ;:::.-.:::::__||___:::::.-.:::\     __,
       """-;:::( O )::::>_|| _<::::( O )::::-"""
   =======;:::::`-`:::::::||':::::::`-`:::::\=======
    ,--"";:::_____________||______________::::""----.          , ,
         ; ::`._(    |    |||     |   )_,'::::\_,,,,,,,,,,____/,'_,
       ,;    :::`--._|____[]|_____|_.-'::::::::::::::::::::::::);_
      ;/ /      :::::::::,||,:::::::::::::::::::::::::::::::::::/
     /; ``''''----------/,'/,__,,,,,____:::::::::::::::::::::,"
     ;/                :);/|_;| ,--.. . ```-.:::::::::::::_,"
    /;                :::):__,'//""\\. ,--.. \:::,:::::_,"
   ;/              :::::/ . . . . . . //""\\. \::":__,"
   ;/          :::::::,' . . . . . . . . . . .:`::\
   ';      :::::::__,'. ,--.. . .,--. . . . . .:`::`
   ';   __,..--'''-. . //""\\. .//""\\ . ,--.. :`:::`
   ;    /  \\ .//""\\ . . . . . . . . . //""\\. :`::`
   ;   /       . . . . . . . . . . . . . . . . .:`::`
   ;   (          . . . . . . . . . . . . . . . ;:::`
   ,:  ;,            . . . . . . . . . . . . . ;':::`
   ,:  ;,             . . . . . . . . . . . . .;`:::
   ,:   ;,             . . . . . . . . . . . . ;`::;`
    ,:  ;             . . . . . . . . . . . . ;':::;`
     :   ;             . . . . . . . . . . . ,':::;
      :   '.          . . . . . . . .. . . .,':::;`
       :    `.       . . . . . . . . . . . ;::::;`
        '.    `-.   . . . . . . . . . . ,-'::::;
          `:_    ``--..___________..--'':::::;'`
             `._::,.:,.:,:_ctr_:,:,.::,.:_;'`
________________`"\/"\/\/'""""`\/"\/""\/"____________________________

*/

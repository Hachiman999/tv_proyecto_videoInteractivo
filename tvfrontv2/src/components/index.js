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

  metodoq () {
    this.props.history.push("/");
  }
  metodox () {
    this.props.history.push("/hs");
  }
  render () {
    return (
      <div className="container_index">
        <img id="background-video" alt="some value" src={img} />
        <div className="titulo text-white ">
          ssssssssssssssssssssssssssssssssssssssssssssss
          ssssssssssssssssssssssssssssssssssssssssssssssss
          ssssssssssssssssssssssssssssssssssssssssssssss
          ssssssssssssssssssssssssssssssssssssssssssssssss
          ssssssssssssssssssssssssssssssssssssssssssssss
          ssssssssssssssssssssssssssssssssssssssssssssssss
        </div>
        <div>

        </div>
        <div className="btn_historias">
          <button onClick={this.metodox}>elegir historia</button>
        </div>
        <div className="btn_articulos">
          <button onClick={this.metodoq}>  <img className="h-5 w-5" id="background-video" alt="some value" src={s} /> </button>
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

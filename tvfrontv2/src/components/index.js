import React, { Component } from "react";
import video1 from '../assets/finalllegandoacasa.mp4'
import video2 from '../assets/pruebaconanimate.mp4'
class App extends Component{

constructor(props){
    super(props)
    this.state={tiempo :0, video:1 ,src : video1}
    this.metodoq = this.metodoq.bind(this); 
    this.metodox = this.metodox.bind(this); 
    this.comportamientoVideo= this.comportamientoVideo.bind(this); 
    this.eventoClic1 = this.eventoClic1.bind(this); 
}
   
componentDidMount=()=> {
  document.addEventListener("click", this.eventoClic1);
  this.video = document.createElement('video');
  this.video.src = video1; 
  this.mount.appendChild(this.video); 
        this.comportamientoVideo(this.mount)
       

}
componentWillUnmount(){
  document.removeEventListener("click", this.mouseEventsdown);
}
comportamientoVideo(body){
   
    var {video, tiempo}= this.state; 
   this.video.play(); 
    this.video.addEventListener("timeupdate",function(ev){
        tiempo = ev.target.currentTime;
        if(tiempo >= 11 && video ===1){
            ev.target.currentTime=8; 
               // VARIABLES VIDEO 1
        var btn1 = document.createElement("BUTTON");
        btn1.id = "boton1"
        btn1.appendChild(document.createTextNode("Aceptar"))
        body.appendChild( btn1); 
        
   //  btn1.addEventListener("click",this.eventoClic1() , true); 
		
        var btn2 = document.createElement("BUTTON");
        btn2.id = "boton2"
        btn2.appendChild(document.createTextNode("rechazar"))
        }
       // console.log(tiempo)
        if(tiempo >= 11 && video ===2){
            ev.target.currentTime=8; 
        }

       },true);
  
}

eventoClic1(){
console.log(this.video); 
}
   
    metodoq(){
       this.props.history.push('/us');
     }
     metodox(){
        this.props.history.push('/cu');
      }
    render(){
        return(
            <div>
                usuario
             <button
             onClick={this.metodoq}
             >
                 usuarios
             </button>
             
             crear usuarios
             <button
             onClick={this.metodox}
             >
                 crear
             </button>
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
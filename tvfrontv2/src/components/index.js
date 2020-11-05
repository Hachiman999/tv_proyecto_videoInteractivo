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
  
}
   
componentDidMount=()=> {
  var {src} = this.state; 

  this.video = document.createElement('video');
  this.video.src =src; 
  this.video.controls=true; 
  this.mount.appendChild(this.video); 
        this.comportamientoVideo(this.mount)
       

}
componentWillUnmount(){
 
}

comportamientoVideo(body){
   
    var {video, tiempo,src}= this.state; 
   this.video.play(); 
   var estadob = true; 
    this.video.addEventListener("timeupdate",(ev)=>{
      tiempo = ev.target.currentTime;
      // console.log(ev)
       if(tiempo >= ev.target.duration-3 && video ===1){
           ev.target.currentTime=ev.target.duration-7; 
           
              // VARIABLES VIDEO 1
       var btn1 = document.createElement("BUTTON");
       btn1.id = "boton1"
       btn1.appendChild(document.createTextNode("Aceptar"))
       var btn2 = document.createElement("BUTTON");
       btn2.id = "boton2"
       btn2.appendChild(document.createTextNode("rechazar"))
     if(estadob){
       body.appendChild( btn1); body.appendChild( btn2); estadob= false; 
     }
       
       
    btn1.addEventListener("click",()=>{
     video=2; 
     src = video2; 
     this.video.src = src;  this.video.play(); 
    } , true); 
   
      
       btn2.addEventListener("click",()=>{
       

        } , true); 
       }
  

      // console.log(tiempo)
       if(tiempo >= 11 && video ===2){
           ev.target.currentTime=8; 
          
       }

      
    },true);
  
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
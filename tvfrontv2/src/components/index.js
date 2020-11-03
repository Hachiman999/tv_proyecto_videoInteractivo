import React, { Component } from "react";

class App extends Component{

constructor(props){
    super(props)
    this.state={tiempo :0, video:1}
    this.metodoq = this.metodoq.bind(this); 
    this.metodox = this.metodox.bind(this); 
}
   
componentDidMount() {
      // VARIABLES VIDEO 1
        var btn1 = document.createElement("BUTTON");
        btn1.id = "boton1"
        btn1.appendChild(document.createTextNode("Aceptar"))
		
        var btn2 = document.createElement("BUTTON");
        btn2.id = "boton2"
        btn2.appendChild(document.createTextNode("rechazar"))
        
        
        this.mount.appendChild(btn1)

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
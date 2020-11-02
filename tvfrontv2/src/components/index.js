import React, { Component } from "react";

class App extends Component{

constructor(props){
    super(props)
    this.state={num :0}
    this.metodoq = this.metodoq.bind(this); 
    this.metodox = this.metodox.bind(this); 
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

            </div>
        );
    }
}

export default App;
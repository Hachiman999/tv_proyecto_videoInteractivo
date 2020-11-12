import React, { Component } from "react";

class App extends Component{
    constructor(){
        this.rutahistoria1 = this.rutahistoria1.bind(this); 
    }

    rutahistoria1(){
        
    }

    render(){
        return(
            <div>
                <button
                onClick={this.rutahistoria1}
                >historia 1 </button>
                <button>historia 2 </button>
            </div>
        )
    }
}
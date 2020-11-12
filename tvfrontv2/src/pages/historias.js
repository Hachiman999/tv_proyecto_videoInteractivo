import React, { Component } from "react";

class App extends Component {
  constructor() {
    super();
    this.rutahistoria2 = this.rutahistoria2.bind(this);
    this.rutahistoria1 = this.rutahistoria1.bind(this);
  }

  rutahistoria1() {
    this.props.history.push("/ha");
  }
  rutahistoria2() {
    this.props.history.push("/hs");
  }

  render() {
    return (
      <div>
        <button onClick={this.rutahistoria1}>historia 1 </button>
        <button onClick={this.rutahistoria1}>historia 2 </button>
      </div>
    );
  }
}

export default App;

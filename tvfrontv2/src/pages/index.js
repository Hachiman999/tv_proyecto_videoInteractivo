import React, { Component } from "react";

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
      <div>
        <button onClick={this.metodoq}>ver articulos </button>

        <button onClick={this.metodox}>elegir historia</button>
      </div>
    );
  }
}

export default App;

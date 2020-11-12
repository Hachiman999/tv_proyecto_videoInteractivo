import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";

import bus from "../components/bus";
import cus from "../components/cus";
import index from "../components/index";
import hs from "../pages/historias";
import ha from "../pages/historiaA";
import por from "../pages/index";
class Main extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/us" component={bus} />
          <Route exact path="/cu" component={cus} />
          <Route exact path="/" component={index} />
          <Route exact path="/p" component={por} />
          <Route exact path="/hs" component={hs} />
          <Route exact path="/ha" component={ha} />
        </Switch>
      </div>
    );
  }
}

export default Main;

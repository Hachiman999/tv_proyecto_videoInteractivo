import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import bus from "../components/bus";
import cus from "../components/cus";
import index from "../components/index";
import hs from "../pages/historias";
import ha from "../pages/historiaA";
import hb from "../pages/historiaB";
import por from "../pages/index";
import prueba from "../pages/prueba"
import honorPage from "../pages/honorPage";
class Main extends Component {
  render () {
    return (
      <div>
        <Switch>
          <Route exact path="/us" component={bus} />
          <Route exact path="/cu" component={cus} />
          <Route exact path="/" component={index} />
          <Route exact path="/p" component={por} />
          <Route exact path="/hs" component={hs} />
          <Route exact path="/ha" component={ha} />
          <Route exact path="/hb" component={hb} />
          <Route exact path="/honorPage" component={honorPage} />
          <Route exact path="/prueba" component={prueba} />
        </Switch>
      </div>
    );
  }
}

export default Main;

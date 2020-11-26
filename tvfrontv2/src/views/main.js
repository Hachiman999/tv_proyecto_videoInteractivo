import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import bus from "../components/bus";
import cus from "../components/cus";
import index from "../components/index";
import hs from "../pages/historias";
import por from "../pages/index";
import prueba from "../pages/prueba"
import honorPage from "../pages/honorPage";
import credi from "../pages/creditos";
import arti from "../pages/articulos";
import rutaA from "../pages/rutaA";
import rutaB from "../pages/rutaB";

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
          <Route exact path="/honorPage" component={honorPage} />
          <Route exact path="/prueba" component={prueba} />
          <Route exact path="/creditos" component={credi} />
          <Route exact path="/articulos" component={arti} />
          <Route exact path="/ha" component={rutaA} />
          <Route exact path="/hb" component={rutaB} />
        </Switch>
      </div>
    );
  }
}

export default Main;

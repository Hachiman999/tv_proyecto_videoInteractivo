import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";

import bus from '../components/bus';
import cus from '../components/cus';
import index from '../components/index';

class Main extends Component{
      

    render(){
        return(
            <div>
                <Switch>
                    <Route exact path="/us" component={bus} />
                    <Route exact path="/cu" component={cus} />
                    <Route exact path="/" component={index} />

                </Switch>
            </div>
        );
    }
}

export default Main;

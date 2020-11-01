import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";

import bus from '../components/bus';

class Main extends Component{
      

    render(){
        return(
            <div>
                <Switch>
                    <Route exact path="/us" component={bus} />

                </Switch>
            </div>
        );
    }
}

export default Main;

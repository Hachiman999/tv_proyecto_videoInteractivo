import React from "react";
import { BrowserRouter } from "react-router-dom";
import Main from '../src/views/main'


function App (){
  return(
    <BrowserRouter>
    <Main/>
    </BrowserRouter>
  );
}
export default App;

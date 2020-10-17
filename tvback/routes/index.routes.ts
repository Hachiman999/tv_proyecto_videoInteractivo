import { 
    Router
} from "https://deno.land/x/oak/mod.ts";

import * as CTR from '../controllers/index.controllers.ts'

const rou = new Router();

rou.get ('/',({request, response})=>{
    response.body="holi"; 
 });

 rou.get ('/u',CTR.getUsers); 

 export default rou; 
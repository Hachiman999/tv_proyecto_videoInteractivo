
/*import { 
    Application
} from "https://deno.land/x/oak/mod.ts";

import router from './routes/index.routes.ts'

import env from './env.ts'; 

 const app = new Application();

 
app.use(router.routes());
app.use(router.allowedMethods()); //permitir todos lo metodos

 console.log(`vivo en el puero ${env.port}`); 
await app.listen({port: env.port}); 
*/

import { APIserver  } from "./src/APIserver.ts"; 
import env from './env.ts';
const server = new APIserver({hostname: env.hostname, port: env.port});
server.starServer();




 /**
  * instalaciones 
  *  deno run --allow-net index.ts
  *  deno install --allow-read --allow-run --allow-write --allow-net -f -q --unstable https://deno.land/x/denon@2.4.0/denon.ts
  *  denon start
 */
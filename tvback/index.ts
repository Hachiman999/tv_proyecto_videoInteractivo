import { 
    Application
} from "https://deno.land/x/oak/mod.ts";

import router from './routes/index.routes.ts'
 const PORT = 3031; 



 const app = new Application();

 

app.use(router.routes());
app.use(router.allowedMethods()); //permitir todos lo metodos


app.listen({port: PORT}); 
 console.log(`vivo en el puero 3031`); 




 /**
  * instalaciones 
  *  deno run --allow-net index.ts
  *  deno install --allow-read --allow-run --allow-write --allow-net -f -q --unstable https://deno.land/x/denon@2.4.0/denon.ts
  *  denon start
 */
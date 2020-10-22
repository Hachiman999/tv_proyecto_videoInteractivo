

import { APIserver  } from "./src/APIserver.ts"; 
import * as flags from "https://deno.land/std/flags/mod.ts";
import env from './env.ts';


const server = new APIserver({hostname: env.hostname, port: env.port });
server.starServer();





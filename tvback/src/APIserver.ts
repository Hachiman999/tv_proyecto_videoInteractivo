import {
    Application,
    Router,
    Context,
    Status,
    STATUS_TEXT,
  //  oakCors
} from "https://deno.land/x/oak/mod.ts";

import {
    green,
    cyan,
    bold
} from "https://deno.land/std@0.51.0/fmt/colors.ts";

import { UserManager, User, UserManagerResponse, UserManagerResponseStatus } from "./UserManager.ts";
import env from '../env.ts';


export interface ServerOptions {
    port: number,
    hostname: string
}

export class APIserver {

    private app = new Application();
    private routes = new Router({ methods: ["GET", "POST"] });
    private abortControllers = new AbortController();
    private userManager: UserManager = new UserManager();
    public hostname: string;
    public port: number;
    public isRunning: boolean = false;

    constructor(options: ServerOptions = { hostname: env.hostname, port: env.port }) {
        const {
            hostname,
            port
        } = options;

        this.hostname = hostname;
        this.userManager.connectWithOptions({ db: env.namedb, collection: env.collectiondb, llave: env.llavedb });
        this.port = port;
        this.initLogger();
        this.initEndPoints();
    }
    async starServer() {
        if (this.isRunning) {
            this.stopServer();
        }
        this.isRunning = true;
        const { signal } = this.abortControllers;
        console.log(bold(cyan(`Servidor iniciado en >> `)) + bold(green(this.hostname + ":" + this.port.toString())));
        await this.app.listen({ hostname: this.hostname, port: this.port, signal });
        console.log(bold(green("Servidor detenido")));
        this.isRunning = false;
    }
    stopServer() {
        console.log("Se esta deteniendo la API espere...");
        this.abortControllers.abort();
    }

    private initLogger() {
        this.app.use(async (context, next) => {
            const start: number = performance.now(); //float que da el tiempo en milisegundos
            context.response.headers.set('Access-Control-Allow-Origin', '*')
            await next();
            const duration: string = this.highPrecisionToHumanReadable(performance.now() - start);
            const status = STATUS_TEXT.get(context.response.status || Status.OK) || "OK";
            console.log(bold(this.getFormatedDatetime()) + " " + bold(green(context.request.method)) + " " + bold(cyan(context.request.url.pathname)) + " status:" + bold(status) + " req: " + context.request );
        });
    }

    private initEndPoints() {
        this.routes.get('/', async (context) => {
            context.response.body = "Hola a todos soy la api para tv "; 
        });

        this.routes.get('/us', async (context) => {
            let result: UserManagerResponse = await this.userManager.getUsers();

            context.response.status = this.GetHTTPStatus(result.status);
            context.response.body = result.value;
        });

        this.routes.post('/cu', async (context) => {
            
            if (!context.request.hasBody) {
                context.response.status = Status.BadRequest;
                context.response.body = "Cuerpo invalido";
            } else {
                let user: User = await (await context.request.body()).value;
                let result: UserManagerResponse = await this.userManager.createUser(user);
                context.response.status = this.GetHTTPStatus(result.status);
                context.response.body = result.value;
            }
        });
       // this.app.use(oakCors({ origin: `http://${env.hostname}:${env.portorigin}`, optionsSuccessStatus: 200 }));
        this.app.use(this.routes.routes());
        this.app.use(this.routes.allowedMethods());
    }
    private GetHTTPStatus(status: UserManagerResponseStatus): Status {
        switch (status) {
            case UserManagerResponseStatus.OK:
                return Status.OK;
                break;
            case UserManagerResponseStatus.NOT_FOUND:
                return Status.NotFound;
                break;
            case UserManagerResponseStatus.INVALID_DATA:
                return Status.BadRequest;
                break;
            case UserManagerResponseStatus.ERROR:
                return Status.InternalServerError;
                break;
            case UserManagerResponseStatus.CONFLICT_ID:
                return Status.Conflict;
            default:
                return Status.OK;
        }
    }
    private pad2(n: any) {
        return n < 10 ? '0' + n : n;
    }

    private getFormatedDatetime(): string {
        let date = new Date();
        return date.getFullYear().toString() + "/" + this.pad2(date.getMonth() + 1) + "/" + this.pad2(date.getDate()) + " " + this.pad2(date.getHours()) + ":" + this.pad2(date.getMinutes()) + ":" + this.pad2(date.getSeconds());
    }

    private highPrecisionToHumanReadable(value: number): string {
        let seconds = Math.trunc(value / 1000);
        let miliseconds = Math.trunc(value - (seconds * 1000));
        let microseconds = Math.trunc((value % 1) * 1000);

        if (!seconds && !miliseconds) return `${microseconds}μ`;
        else if (!seconds) return `${miliseconds}ms ${microseconds}μ`;
        else return `${seconds}s ${miliseconds}ms ${microseconds}μ`;
    }

}


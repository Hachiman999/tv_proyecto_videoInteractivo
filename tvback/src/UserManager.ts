import {MongoClient, Collection } from "https://deno.land/x/mongo@v0.13.0/mod.ts";
import {green,cyan,bold} from "https://deno.land/std@0.51.0/fmt/colors.ts";
import env from '../env.ts';
export interface DatabaseOptions {
    db: string,
    collection: string,
    llave: string;
}

export interface User {
    id: number;
    Name?: string;
    Comment?: string;
}

export enum UserManagerResponseStatus {
    OK,
    ERROR,
    NOT_FOUND,
    INVALID_DATA,
    CONFLICT_ID,
}

export interface UserManagerResponse {
    status: UserManagerResponseStatus;
    value?: any | undefined;
}

export class UserManager {
    private client = new MongoClient();
    private users?: Collection<User>;

    public async connectWithOptions(options: DatabaseOptions = { db: env.namedb, collection: env.collectiondb, llave: env.llavedb }) {
        const { db, collection, llave } = options;
        this.client.connectWithUri(llave);
        this.users= this.client.database(db).collection<User>(collection); 
        console.log(bold(cyan("Estado de monogo Atlas : ") + bold(green("Conectado"))));
    }

    public async getUsers(): Promise<UserManagerResponse> {
       
        if (!this.users) {
            return { status: UserManagerResponseStatus.ERROR, value: "Error al obtener usuarios de la base de datos" };
        }

        const users = await this.users.find({}); 
        users.forEach((user:any)=>{ delete user._id });
        return {status : UserManagerResponseStatus.OK, value: users}; 
    }

    public async createUser(user : User | undefined) : Promise<UserManagerResponse>{
        if(!this.users){
            return {status : UserManagerResponseStatus.ERROR, value: "Error al obtener usuarios de la base de datos"};
        } else if(!user){
            return {status: UserManagerResponseStatus.INVALID_DATA , value:"Estructura de los datos incorrecta"}
        }else{
            //insertamos un nuevo usuario
            const userscont = await this.users.find({}); 
            userscont.forEach((user:any)=>{ delete user._id });
            user.id= userscont.length +1 ; 
            const insertId = await this.users.insertOne(user); 
            return insertId ? {status: UserManagerResponseStatus.OK, value: user} : {status: UserManagerResponseStatus.ERROR, value:"" };
        }
    }

}


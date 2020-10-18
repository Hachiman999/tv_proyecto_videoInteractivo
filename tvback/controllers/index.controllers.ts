import {
    Response,
    Request,
    Body
} from "https://deno.land/x/oak/mod.ts";
import { 
    v4
 } from " https://deno.land/std/uuid/mod.ts";

interface User {
    id: string,
    name: string,
    comentario: string
}

const users: User[] = [{
    id: "1",
    name: "nombre nombre",
    comentario: "me gusto el video"
}];

export const getUsers = ({ response }: { response: Response }) => {
    response.body = {
        message: "hola perros ",
        users
    }
}
export const getUser = () => { }


export const createUser = async (
    { request, response }: { request: Request, response: Response }
    ) => {
    const body : Body =  await request.body();

    const newUser : User = await body.value;   
      //  console.log(newUser); 
        newUser.id = v4.generate(); 
        console.log(newUser); 
    users.push(newUser);
    console.log(users); 

    response.body = {
        message: 'recibido',
        users
    }
   
}
export const updateUser = () => { }
export const deleteUser = () => { }

import {
    Response,
    Request
} from "https://deno.land/x/oak/mod.ts";

interface User {
    id: number,
    name: string,
    comentario: string
}

const users: User[] = [{
    id: 1,
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

export const createUser = ({ request, response }: { request: Request, response: Response }) => { 
    
}
export const updateUser = () => { }
export const deleteUser = () => { }

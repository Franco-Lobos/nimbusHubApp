import { redirect } from "@remix-run/node";
import { NimbusError } from "~/models/errors/NimbusError";

export const manageApiErrors = (loadError: NimbusError) =>{
    switch(loadError.code){
        case 400:
        case 401:
        case 403:
            throw redirect('/acces/login', {
                headers: {
                    "Content-Type": "application/json",
                    'Set-Cookie': `${process.env.NIMBUS_HUB_SESSION}=; expires=${new Date(0).toUTCString()}; Path=/; HttpOnly; SameSite=Strict;`,
                    'Access-Control-Allow-Origin': '*'
                },
                }
            );
        case 402:
            throw redirect('/dashboard');  
        default:
            return loadError
    }
}
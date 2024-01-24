import { Session, redirect } from "@remix-run/node";
import { apiCookieFinder } from "./APICookieFinder";
import { deleteAllCookies } from "~/routes/dashboard.logout";
import { destroySession } from "~/session";

export async function sessionVerificator (session: Session, cookies: string){
    if(!session.has("userId")){
        return redirect("/acces/login");
      }
      const headers = new Headers();
      if(session.has("userId") && !apiCookieFinder(cookies)){
        const updatedCookies = deleteAllCookies(cookies);
        console.log(updatedCookies);
        updatedCookies.forEach((cookie) => {
          headers.append('Set-Cookie', cookie);
        });
    
        const destroySessionLogin: string = await destroySession(session);
        headers.append('Set-Cookie', destroySessionLogin);
        
        return redirect("/", {
          headers
        });
      }
}
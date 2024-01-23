import { Session, redirect } from "@remix-run/node";
import { apiCookieFinder } from "./APICookieFinder";
import { destroySession } from "~/session";
import { deleteAllCookies } from "~/routes/dashboard.logout";

export  function accesVerification(session: Session, headers: string | null){
    // const newHeaders = new Headers();

    if(!session.has("userId")){
      console.log("NO USER ID")
      return redirect("/acces/login");
    }
    
    // if(session.has("userId") && !apiCookieFinder(headers)){
    //   const updatedCookies = deleteAllCookies(headers);
    //   console.log(updatedCookies);
    //   updatedCookies.forEach((cookie) => {
    //     newHeaders.append('Set-Cookie', cookie)
    //   });

    //   const destroySessionLogin: string = await destroySession(session);
    //   newHeaders.append('Set-Cookie', destroySessionLogin);
      
    //   return redirect("/", {
    //     newHeaders
    //   });
    // }
}
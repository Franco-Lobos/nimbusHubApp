import { ActionFunction, ActionFunctionArgs, LoaderFunctionArgs, redirect } from "@remix-run/node";
import { allForecastsCookie } from "~/cookies.server";
import { SingleForcastSynchronizedCookie } from "~/models/cookies/forecastCookies";
import { SingleHistorySynchronizedCookie } from "~/models/cookies/historyCookies";
import { NimbusError, isNimbusError } from "~/models/errors/NimbusError";
import { CookieStorageManager } from "~/services/CookieStorageManager";

export async function action({
    request,
  }: ActionFunctionArgs) {

    const response : SingleHistorySynchronizedCookie  = await request.json()!;
    if(isNimbusError(response)){
      const pastDate = new Date(0).toUTCString();
      let cookieName = "all-histories-cookie";
      let headers;
      // Define the name of the cookie you want to remove
      
      headers ={
        "Content-Type": "application/json",
        'Set-Cookie': `${cookieName}=; expires=${pastDate}; Path=/; HttpOnly; SameSite=Strict;`,
        'Access-Control-Allow-Origin': '*'
      };

      throw redirect('/', {
        headers,
      });

    }

    const serializedCookie : string | any = await CookieStorageManager.setHistory(response,request);
    
    return new Response(JSON.stringify(serializedCookie), {
        headers: {
            "Content-Type": "application/json",
            "Set-Cookie": serializedCookie, 
            'Access-Control-Allow-Origin': '*'
        },
    });

}
export async function loader({
  request,
}: ActionFunctionArgs) {

  //return error
  return new Response(JSON.stringify({message: "Error, page not found"}), {
    headers: {
        "Content-Type": "application/json",
    },
  });
}


// export default function Forecast() {
//   return <h2>Loading cookies...</h2>;
// }


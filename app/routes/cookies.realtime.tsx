import { ActionFunction, ActionFunctionArgs, LoaderFunctionArgs, redirect } from "@remix-run/node";
import { allForecastsCookie } from "~/cookies.server";
import { SingleForcastSynchronizedCookie } from "~/models/cookies/forecastCookies";
import { SingleRealTimeSynchronizedCookie } from "~/models/cookies/realTimeCookies";
import { CookieError, isCookieError } from "~/models/errors/CookieError";
import { CookieStorageManager } from "~/services/CookieStorageManager";

export async function action({
    request,
  }: ActionFunctionArgs) {

    const resposne : SingleRealTimeSynchronizedCookie | CookieError  = await request.json()!;
    if(isCookieError(resposne)){
      const pastDate = new Date(0).toUTCString();
      let cookieName;
      let headers;
      // Define the name of the cookie you want to remove
      switch(resposne.code){
        case 400: //DELETE COOKIE
          cookieName = "all-real-times-cookie";
          break;
        default:
          cookieName ="all-real-times-cookie";
          break;
      }
      
      headers ={
        "Content-Type": "application/json",
        'Set-Cookie': `${cookieName}=; expires=${pastDate}; Path=/; HttpOnly; SameSite=Strict;`,
        'Access-Control-Allow-Origin': '*'
      };

      throw redirect('/', {
        headers,
      });

    }

    const serializedCookie : string | any = await CookieStorageManager.setRealTimeWeather(resposne,request);
    
    return new Response(JSON.stringify(serializedCookie), {
        headers: {
            "Content-Type": "application/json",
            "Set-Cookie": serializedCookie, 
            'Access-Control-Allow-Origin': '*'
        },
    });

}
export async function load({
  request,
}: ActionFunctionArgs) {

  //return error
  return new Response(JSON.stringify({message: "Error, page not found"}), {
    headers: {
        "Content-Type": "application/json",
    },
  });
}

// export default function RealTime() {
//   return <h2>Loading cookies...</h2>;
// }



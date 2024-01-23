import { ActionFunction, ActionFunctionArgs, LoaderFunctionArgs, redirect } from "@remix-run/node";
import { allForecastsCookie } from "~/cookies.server";
import { SingleForcastSynchronizedCookie } from "~/models/cookies/forecastCookies";
import { SingleRealTimeSynchronizedCookie } from "~/models/cookies/realTimeCookies";
import { NimbusError, isNimbusError } from "~/models/errors/NimbusError";
import { CookieStorageManager } from "~/services/CookieStorageManager";

export async function action({
    request,
  }: ActionFunctionArgs) {

    const resposne : SingleRealTimeSynchronizedCookie   = await request.json()!;
    if(isNimbusError(resposne)){
      const pastDate = new Date(0).toUTCString();
      let cookieName = "all-real-times-cookie";
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

    const serializedCookie : string | any = await CookieStorageManager.setRealTimeWeather(resposne,request);
    
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

// export default function RealTime() {
//   return <h2>Loading cookies...</h2>;
// }



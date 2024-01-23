import { json, type LoaderFunctionArgs, type MetaFunction , isSession, createSession, LoaderFunction, createCookieSessionStorage, redirect} from "@remix-run/node";
import { WeatherSDK } from "~/models/tomorrow/WeatherSDK";
import { useLoaderData } from "@remix-run/react";
import { getRealTimeWeather, getWeatherForecast, getWeatherRecentHistory } from "~/services/nimbusWeatherAPIService";
import { getSession } from "~/session";

export const meta: MetaFunction = () => {
  return [
    { title: "NinmbusHub" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export async function loader({
  request,
}: LoaderFunctionArgs) {
  
  const session = await getSession(request.headers.get("Cookie"));
  if(!session || !session.has("userId")){
    return redirect("/acces/login");
  }
  else{
    return redirect("/dashboard");
  }
};



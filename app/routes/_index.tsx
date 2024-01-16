import { json, type LoaderFunctionArgs, type MetaFunction , isSession, createSession, LoaderFunction, createCookieSessionStorage, redirect} from "@remix-run/node";
import { WeatherSDK } from "~/models/WeatherSDK";
import { useLoaderData } from "@remix-run/react";
import { getRealTimeWeather, getWeatherForecast, getWeatherRecentHistory } from "~/services/nimbusWeatherAPIService";

export const meta: MetaFunction = () => {
  return [
    { title: "NinmbusHub" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export async function loader({
  request,
}: LoaderFunctionArgs) {
  
  const storage =createCookieSessionStorage({
    cookie:{
      name: process.env.NIMBUS_HUB_SESSION,
    }
  });

  const session = await storage.getSession(request.headers.get("Cookie"));
  if(!session.has("userId")){
    return redirect("/acces/login");
  }
  else{
    return redirect("/dashboard");
  }
};



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
      httpOnly: true,
      secure: true,
    }
  });

  const session = await storage.getSession(request.headers.get("Cookie"));
  if(!session.has("userId")){
    return redirect("/acces/login");
  }

  return getWeatherForecast("paris", request);
};
export default function Dashboard() {
  const data = useLoaderData();
  console.log("data", data);
  
  return (
    <div className=" bg-white py-6 sm:py-8 lg:py-12">
      <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
        <div className="mb-10 md:mb-16">
          <h2 className="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl">Welcome to NimbusHub</h2>
          <p className="mb-4 text-center">
            {}
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 md:gap-6 lg:">

        </div>
      </div>
    </div>
  );
}
function load<T>(arg0: string) {
  throw new Error("Function not implemented.");
}


import { json, type LoaderFunctionArgs, type MetaFunction } from "@remix-run/node";
import { WeatherSDK } from "~/models/WeatherSDK";
import { useLoaderData } from "@remix-run/react";
import { getRealTimeWeather, getWeatherForecast, getWeatherRecentHistory } from "~/services/nimbusWeatherAPIService";

export const meta: MetaFunction = () => {
  return [
    { title: "NinmbusHub" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export async function loader()  {
  return getWeatherForecast("paris");
}

export default function Index() {
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


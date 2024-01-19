import { createCookie } from "@remix-run/node"; // or cloudflare/deno
import { WeatherLocation } from "./models/WeatherLocation";
import { ForecastWeatherData } from "./models/Forecast";

export type SingleForcastSynchronizedCookie = {
  location: WeatherLocation;
  time: string;
  // Add any other session data you need
};

export type CookieAllForecastsInLocalStorage ={
  forecasts: SingleForcastSynchronizedCookie[];
}

export const allForecastsCookie = createCookie("all-forecasts-cookie", {
  maxAge: 2_1600 // 6 hours
});
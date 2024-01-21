import {  allForecastsCookie} from "~/cookies.server";
import { CookieAllForecastsInLocalStorage, SingleForcastSynchronizedCookie, isSingleForcastSynchronizedCookie } from "~/models/cookies/cookies";
import { SessionLocation, TomorrowLocation, areLocationsEqual, isWeatherLocation } from "~/models/tomorrow/WeatherLocation";
import { getWeatherForecast } from "./nimbusWeatherAPIService";

export class CookieStorageManager {
    constructor(){

    }

    public static getForecastWeather =  async (location: SessionLocation, request: Request) => {
        const cookieHeader = request.headers.get("Cookie");
        const storedForecasts = (await allForecastsCookie.parse(cookieHeader)) || {};
        if(storedForecasts ===null){
            return false;
        }

        const parsedForecasts = storedForecasts as CookieAllForecastsInLocalStorage;
        let foundForecast : SingleForcastSynchronizedCookie | boolean= parsedForecasts?.forecasts?.length > 0;
        if(foundForecast){
            console.log("GET")
            foundForecast = this.deleteForecastWeatherIfExpired(parsedForecasts, location)!;
        }
      
        if(foundForecast){
            console.log("get: Cookies were updated, API call avoided")
            return foundForecast;
        }
      
        //else
        console.log("data save -> Data not found in cookies");
        return false;
    }

    public static setForecastWeather = async (
        data: SingleForcastSynchronizedCookie,
        request: Request
    ): Promise<any | string>=> {
        const cookieHeader = request.headers.get("Cookie");
        const storedForecasts = (await allForecastsCookie.parse(cookieHeader)) || {};
        const parsedForecasts = storedForecasts as CookieAllForecastsInLocalStorage;
        let foundForecast : SingleForcastSynchronizedCookie | boolean= parsedForecasts?.forecasts?.length > 0;
      
        if(foundForecast){
            console.log("SET")
            foundForecast = this.deleteForecastWeatherIfExpired(parsedForecasts, data.location)!;
        }

        if(foundForecast){
            console.log("set: Cookies were updated")
            return {message: "Cookies was updated"}; //Cookies were updated, no action has been made
        }
 
        if(parsedForecasts?.forecasts){
            parsedForecasts.forecasts.push(data);
        }else{
            parsedForecasts.forecasts = [data];
        }
        const serializedCookie = await allForecastsCookie.serialize(parsedForecasts);
        return serializedCookie; //all the cookies updated with the new forecast
    }

    //return cookie if is not expired | erase it if it's expired and return false | return false if not found
    private static deleteForecastWeatherIfExpired = (
        parsedForecasts: CookieAllForecastsInLocalStorage,
        location: TomorrowLocation
      ): SingleForcastSynchronizedCookie | boolean => {
            let returner :SingleForcastSynchronizedCookie | boolean = false;
            let i =0;
            while(i < parsedForecasts.forecasts.length && !returner){
                if(areLocationsEqual(location, parsedForecasts.forecasts[i].location)){
                    const savedDate = new Date(parsedForecasts.forecasts[i].time);
                    const now = new Date();
                    // const localTimezoneOffset = now.getTimezoneOffset();
                    const diff = now.getTime() - savedDate.getTime();
                    // const positiveDiff = Math.abs(now.getTime() - savedDate.getTime() ); 
                    // const diff =  positiveDiff + localTimezoneOffset * 60 * 1000
                    const diffHours = Math.floor(diff / (1000 * 60 * 60));
            
                    console.log("diffHours: ", diffHours);
                    if(diffHours > 1){
                        parsedForecasts.forecasts.splice(i, 1); // 2nd parameter means remove one item only  
                        returner = true;
                    }
                    
                    console.log("found", parsedForecasts.forecasts[i])
                    returner =  parsedForecasts.forecasts[i];
                    break;
                }
                i++
            }

        return isSingleForcastSynchronizedCookie(returner) ? returner : false;
    }

    public static deleteExpiredCookies =()=>{
        const cookies = document.cookie.split('; ');
      
        for (const cookie of cookies) {
          const [name, value] = cookie.split('=');
      
          // Check if the cookie has expired
          const expirationDate = new Date(value);
          if (isNaN(expirationDate.getTime()) || expirationDate <= new Date()) {
            document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
          }
        }
      }
}
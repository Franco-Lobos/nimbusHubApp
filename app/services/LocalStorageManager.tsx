import { ForecastWeatherData } from "~/models/tomorrow/Forecast";
import { SessionLocation, TomorrowLocation, areLocationsEqual } from "~/models/tomorrow/WeatherLocation";
import { SingleForcastSynchronizedCookie } from "../models/cookies/cookies";
import { CookieError } from "~/models/errors/CookieError";

export class StorageManager {
    static allForecastsKey: string  = "all-forecasts-in-local-storage";

    constructor() {
        // Your class constructor logic here
    }    
    
    public static setForecastWeatherDataInLocalStorage = async (data: ForecastWeatherData, forceUpdate: boolean) => { 
        // Check if data with the same identifiers exists in localStorage
        let parsedForecasts = JSON.parse(localStorage.getItem(this.allForecastsKey)!) as ForecastWeatherData[];
        let foundForecast :  boolean = parsedForecasts?.length > 0;
        let changesComited :boolean = false;
        if (!parsedForecasts || parsedForecasts == null) {
            console.log("parsedForecasts not found in localStorage. Saving data in localStorage.");
            // Save the data in localStorage
            localStorage.setItem(this.allForecastsKey, JSON.stringify([data]));
            parsedForecasts = JSON.parse(localStorage.getItem(this.allForecastsKey)!) as ForecastWeatherData[];
            foundForecast = false;
            changesComited = true;
        }

        console.log("parsedForecasts found in localStorage: ", parsedForecasts)

        if( parsedForecasts?.length > 0){
            let index: number = 0;
            while(index<parsedForecasts.length){
                if(areLocationsEqual(data.location, parsedForecasts[index].location)){
                    const savedDate = new Date(parsedForecasts[index].timelines.hourly[0].time);
                    const now = new Date();
                    const diff = now.getTime() - savedDate.getTime();
                    const diffHours = Math.floor(diff / (1000 * 60 * 60)); //60 min
                    console.log("diffHours: ", diffHours);

                    if(diffHours > 1){
                        console.log("Local Storage was expired, data removed: ", parsedForecasts );
                        parsedForecasts.splice(index, 1); // 2nd parameter means remove one item only  
                        foundForecast = false;
                        parsedForecasts.push(data);
                        changesComited = true;
                    }
                    else{
                        console.log("Local Storage was updated, no changes comited: ", parsedForecasts)
                    }  
                    break;
                }
                index++;
            };
        }

        if(changesComited || forceUpdate){
            // Save the data in localStorage
            localStorage.setItem(this.allForecastsKey, JSON.stringify(parsedForecasts));
            //SET COOKIE
            const cookiesUrl = `http://localhost:3000/cookies/forecastweather`;

            const foreacastAsCookie : SingleForcastSynchronizedCookie = {
                location: data.location,
                time: data.timelines.hourly[0].time,
            }
        
            const response = await fetch(cookiesUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*'
                },
                body: JSON.stringify( foreacastAsCookie)
            });
            
            if(response.ok){
                return false  //cookie has been properlty synchronized
            }  
        }
        return;
    }

    public static getForecastWeatherDataFromLocalStorage = async (location: TomorrowLocation) => {
        const parsedForecasts = JSON.parse(localStorage.getItem(this.allForecastsKey)!) as ForecastWeatherData[];
        let foundForecast : ForecastWeatherData | boolean = parsedForecasts?.length > 0;

        console.log("parsedForecasts found in localStorage: ", parsedForecasts)
        if (foundForecast) {
            let i = 0;
            while(i < parsedForecasts.length ){
                if(areLocationsEqual(location, parsedForecasts[i].location)){
                    foundForecast = parsedForecasts[i];
                    break;
                }
                i++;
            };
        }

        if(!foundForecast){
            //SET COOKIE
            const cookiesUrl = `http://localhost:3000/cookies/forecastweather`;

            const message : CookieError={
                code: 400,
                type:"UNSYNCRONIZED",
                message: "DELET-ALL",
            }
            const response = await fetch(cookiesUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*'
                },
                body: JSON.stringify(message)
            });
            
            if(response.ok){
                return false  //cookie has been properlty synchronized
            }  
        }
        return foundForecast;
    }
    
}
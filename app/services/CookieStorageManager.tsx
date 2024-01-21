import {  allForecastsCookie, allHistoriesCookie, allRealTimesCookie} from "~/cookies.server";
import { CookieAllForecastsInLocalStorage, SingleForcastSynchronizedCookie, isSingleForcastSynchronizedCookie } from "~/models/cookies/forecastCookies";
import { SessionLocation, TomorrowLocation, areLocationsEqual, isSessionLocation } from "~/models/tomorrow/WeatherLocation";
import { getWeatherForecast } from "./nimbusWeatherAPIService";
import { CookieAllRealTimesInLocalStorage, SingleRealTimeSynchronizedCookie, isSingleRealTimeSynchronizedCookie } from "~/models/cookies/realTimeCookies";
import { CookieAllHistoriesInLocalStorage, SingleHistorySynchronizedCookie, isSingleHistorySynchronizedCookie } from "~/models/cookies/historyCookies";

export class CookieStorageManager {
    constructor(){

    }
    // FORECAST COOKIES
    public static getForecastWeather =  async (location: SessionLocation, request: Request) => {
        const cookieHeader = request.headers.get("Cookie");
        const storedForecasts = (await allForecastsCookie.parse(cookieHeader)) || false;
        if(!storedForecasts || storedForecasts ===null){
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
                        break;
                    }
                    
                    console.log("found", parsedForecasts.forecasts[i])
                    returner =  parsedForecasts.forecasts[i];
                    break;
                }
                i++
            }

        return isSingleForcastSynchronizedCookie(returner) ? returner : false;
    }
    // FORECAST COOKIES END


    //REAL TIME COOKIES
    public static getRealTime =  async (location: SessionLocation, request: Request) => {
        const cookieHeader = request.headers.get("Cookie");
        const storedRealTimes = (await allRealTimesCookie.parse(cookieHeader)) || false;
        if(!storedRealTimes || storedRealTimes ===null){
            return false;
        }

        const parsedRealTimes = storedRealTimes as CookieAllRealTimesInLocalStorage;
        let foundRealTime : SingleForcastSynchronizedCookie | boolean= parsedRealTimes?.realTimes?.length > 0;
        if(foundRealTime){
            console.log("GET REAL TIME")
            foundRealTime = this.deleteRealTimeIfExpired(parsedRealTimes, location)!;
        }
      
        if(foundRealTime){
            console.log("get: Cookies were updated, API call avoided")
            return foundRealTime;
        }
      
        //else
        console.log("data save -> Data not found in cookies");
        return false;
    }

    public static setRealTimeWeather = async (
        data: SingleRealTimeSynchronizedCookie,
        request: Request
    ): Promise<any | string>=> {
        const cookieHeader = request.headers.get("Cookie");
        const storedRealTimes = (await allRealTimesCookie.parse(cookieHeader)) || {};
        const parsedRealTimes = storedRealTimes as CookieAllRealTimesInLocalStorage;
        let foundRealTime : SingleRealTimeSynchronizedCookie | boolean= parsedRealTimes?.realTimes?.length > 0;
      
        if(foundRealTime){
            console.log("SET REAL TIME")
            foundRealTime = this.deleteRealTimeIfExpired(parsedRealTimes, data.location)!;
        }

        if(foundRealTime){
            console.log("set: Cookies were updated")
            return {message: "Cookies was updated"}; //Cookies were updated, no action has been made
        }
 
        if(parsedRealTimes?.realTimes){
            parsedRealTimes.realTimes.push(data);
        }else{
            parsedRealTimes.realTimes = [data];
        }
        const serializedCookie = await allRealTimesCookie.serialize(parsedRealTimes);
        return serializedCookie; //all the cookies updated with the new forecast
    }

    private static deleteRealTimeIfExpired = (
        parsedRealTimes: CookieAllRealTimesInLocalStorage,
        location: TomorrowLocation
        ): SingleRealTimeSynchronizedCookie | boolean => {
            let returner :SingleRealTimeSynchronizedCookie | boolean = false;
            let i =0;
            while(i < parsedRealTimes.realTimes.length && !returner){
                if(areLocationsEqual(location, parsedRealTimes.realTimes[i].location)){
                    const savedDate = new Date(parsedRealTimes.realTimes[i].time);
                    const now = new Date();
                    // const localTimezoneOffset = now.getTimezoneOffset();
                    const diff = now.getTime() - savedDate.getTime();
                    // const positiveDiff = Math.abs(now.getTime() - savedDate.getTime() ); 
                    // const diff =  positiveDiff + localTimezoneOffset * 60 * 1000
                    const diffMins = Math.floor(diff / (1000 * 60 * 60)); // 1 min
            
                    console.log("diffMins: ", diffMins);
                    if(diffMins > 1){
                        parsedRealTimes.realTimes.splice(i, 1); // 2nd parameter means remove one item only  
                        returner = true;
                        break;
                    }
                    
                    console.log("found", parsedRealTimes.realTimes[i])
                    returner =  parsedRealTimes.realTimes[i];
                    break;
                }
                i++
            }

        return isSingleRealTimeSynchronizedCookie(returner) ? returner : false;
    }

    //REAL TIME COOKIES ENDS

    public static getHistory =  async (location: SessionLocation, request: Request) => {
        const cookieHeader = request.headers.get("Cookie");
        const storedHistories = (await allHistoriesCookie.parse(cookieHeader)) || false;
        console.log("storedHistories: ", storedHistories)

        if(!storedHistories || storedHistories ===null){
            return false;
        }
        const parsedHistories = storedHistories as CookieAllHistoriesInLocalStorage;
        let foundHistory : SingleHistorySynchronizedCookie | boolean= parsedHistories?.histories?.length > 0;
        if(foundHistory){
            console.log("GET HISTORY")
            foundHistory = this.deleteHistoryIfExpired(parsedHistories, location)!;
        }
      
        if(foundHistory){
            console.log("get: Cookies were updated, API call avoided")
            return foundHistory;
        }
      
        //else
        console.log("data save -> Data not found in cookies");
        return false;
    }

    public static setHistory = async (
        data: SingleHistorySynchronizedCookie,
        request: Request
    ): Promise<any | string>=> {
        const cookieHeader = request.headers.get("Cookie");
        const storedHistories = (await allHistoriesCookie.parse(cookieHeader)) || {};
        const parsedHistories = storedHistories as CookieAllHistoriesInLocalStorage;
        let foundHistories : SingleHistorySynchronizedCookie | boolean= parsedHistories?.histories?.length > 0;
      
        if(foundHistories){
            console.log("SET HISTORIES")
            foundHistories = this.deleteHistoryIfExpired(parsedHistories, data.location)!;
        }

        if(foundHistories){
            console.log("set: Cookies were updated")
            return {message: "Cookies was updated"}; //Cookies were updated, no action has been made
        }
 
        if(parsedHistories?.histories){
            parsedHistories.histories.push(data);
        }else{
            parsedHistories.histories = [data];
        }
        const serializedCookie = await allHistoriesCookie.serialize(parsedHistories);
        return serializedCookie; //all the cookies updated with the new forecast
    }

    private static deleteHistoryIfExpired = (
        parsedHistories: CookieAllHistoriesInLocalStorage,
        location: TomorrowLocation
        ): SingleHistorySynchronizedCookie | boolean => {
            let returner :SingleHistorySynchronizedCookie | boolean = false;
            let i =0;
            while(i < parsedHistories.histories.length && !returner){
                if(areLocationsEqual(location, parsedHistories.histories[i].location)){
                    const savedDate = new Date(parsedHistories.histories[i].time);
                    const now = new Date();
                    // const localTimezoneOffset = now.getTimezoneOffset();
                    const diff = now.getTime() - savedDate.getTime();
                    // const positiveDiff = Math.abs(now.getTime() - savedDate.getTime() ); 
                    // const diff =  positiveDiff + localTimezoneOffset * 60 * 1000
                    const diffHours = Math.floor(diff / (1000 * 60 * 60 *24)); // 24 hours
            
                    console.log("diffHours history cookie: ", diffHours);
                    if(diffHours > 24){
                        parsedHistories.histories.splice(i, 1); // 2nd parameter means remove one item only  
                        returner = true;
                        break;
                    }
                    
                    console.log("found", parsedHistories.histories[i])
                    returner =  parsedHistories.histories[i];
                    break;
                }
                i++
            }

        return isSingleHistorySynchronizedCookie(returner) ? returner : false;
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

















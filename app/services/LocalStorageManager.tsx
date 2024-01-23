import { ForecastWeatherData } from "~/models/tomorrow/Forecast";
import { SessionLocation, TomorrowLocation, areLocationsEqual } from "~/models/tomorrow/WeatherLocation";
import { SingleForcastSynchronizedCookie } from "../models/cookies/forecastCookies";
import { NimbusError, NimbusErrorType } from "~/models/errors/NimbusError";
import { RealTimeData } from "~/models/tomorrow/RealTime";
import { SingleRealTimeSynchronizedCookie } from "~/models/cookies/realTimeCookies";
import { HistoryData } from "~/models/tomorrow/History";
import { SingleHistorySynchronizedCookie } from "~/models/cookies/historyCookies";

export class StorageManager {
    static allForecastsKey: string  = "all-forecasts-in-local-storage";
    static allRealTimes: string  = "all-real-times-cookie";
    static allHistories: string  = "all-histories-cookie";

    constructor() {
        // Your class constructor logic here
    }    
    
    // FORECAST LOCAL STORAGE
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
            let locationFound: boolean = false;
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
                    locationFound=true;
                    break;
                }
                index++;
            };

            if(!locationFound){
                parsedForecasts.push(data);
                changesComited = true;
            }
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

            const message : NimbusError={
                code: 400,
                type: NimbusErrorType.COOKIE,
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

    // FORECAST LOCAL STORAGE END
    public static setRealTimeDataInLocalStorage = async (data: RealTimeData, forceUpdate: boolean) => { 
        // Check if data with the same identifiers exists in localStorage
        let parsedRealTimes = JSON.parse(localStorage.getItem(this.allRealTimes)!) as RealTimeData[];
        let foundRealTime :  boolean = parsedRealTimes?.length > 0;
        let changesComited :boolean = false;

        if (!parsedRealTimes || parsedRealTimes == null) {
            console.log("parsedRealTimes not found in localStorage. Saving data in localStorage.");
            // Save the data in localStorage
            localStorage.setItem(this.allRealTimes, JSON.stringify([data]));
            parsedRealTimes = JSON.parse(localStorage.getItem(this.allRealTimes)!) as RealTimeData[];
            foundRealTime = false;
            changesComited = true;
        }

        console.log("allRealTimes found in localStorage: ", parsedRealTimes)

        if( parsedRealTimes?.length > 0){
            let index: number = 0;
            while(index<parsedRealTimes.length){
                if(areLocationsEqual(data.location, parsedRealTimes[index].location)){
                    const savedDate = new Date(parsedRealTimes[index].data.time);
                    const now = new Date();
                    const diff = now.getTime() - savedDate.getTime();
                    const diffMins = Math.floor(diff / (1000 * 60 * 60 )); //1 min
                    console.log("diffMins: ", diffMins);

                    if(diffMins > 1){
                        console.log("Local Storage was expired, data removed: ", parsedRealTimes );
                        parsedRealTimes.splice(index, 1); // 2nd parameter means remove one item only  
                        foundRealTime = false;
                        parsedRealTimes.push(data);
                        changesComited = true;
                    }
                    else{
                        console.log("Local Storage was updated, no changes comited: ", parsedRealTimes)
                    }  
                    break;
                }
                index++;
            };
        }

        if(changesComited || forceUpdate){
            // Save the data in localStorage
            localStorage.setItem(this.allRealTimes, JSON.stringify(parsedRealTimes));
            //SET COOKIE
            const cookiesUrl = `http://localhost:3000/cookies/realtime`;

            const realTimeAsCookie : SingleRealTimeSynchronizedCookie = {
                location: data.location,
                time: data.data.time,
            }
        
            const response = await fetch(cookiesUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*'
                },
                body: JSON.stringify( realTimeAsCookie)
            });
            
            if(response.ok){
                return false  //cookie has been properlty synchronized
            }  
        }
        return;
    }

    public static getRealTimeDataFromLocalStorage = async(location: TomorrowLocation): Promise<boolean | RealTimeData> => {
        const parsedRealTimes = JSON.parse(localStorage.getItem(this.allRealTimes)!) as RealTimeData[];
        let foundRealTime : RealTimeData | boolean = parsedRealTimes?.length > 0;

        console.log("parsedRealTimes found in localStorage: ", parsedRealTimes)
        if (foundRealTime) {
            let i = 0;
            while(i < parsedRealTimes.length ){
                if(areLocationsEqual(location, parsedRealTimes[i].location)){
                    foundRealTime = parsedRealTimes[i];
                    break;
                }
                i++;
            };
        }
        if(!foundRealTime){
            //SET COOKIE
            const cookiesUrl = `http://localhost:3000/cookies/realtime`;

            const message : NimbusError={
                code: 400,
                type:  NimbusErrorType.COOKIE,
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
        return foundRealTime;
    }
    // REALTIME LOCAL STORAGE END

    // HISTORY LOCAL STORAGE

    public static setHistoryDataInLocalStorage = async (data: HistoryData, forceUpdate: boolean) => { 
        // Check if data with the same identifiers exists in localStorage
        let parsedHistory = JSON.parse(localStorage.getItem(this.allHistories)!) as HistoryData[];
        let foundHistory :  boolean = parsedHistory?.length > 0;
        let changesComited :boolean = false;

        if (!parsedHistory || parsedHistory == null) {
            console.log("parsedHistory not found in localStorage. Saving data in localStorage.");
            // Save the data in localStorage
            localStorage.setItem(this.allHistories, JSON.stringify([data]));
            parsedHistory = JSON.parse(localStorage.getItem(this.allHistories)!) as HistoryData[];
            foundHistory = false;
            changesComited = true;
        }

        console.log("parsedHistory found in localStorage: ", parsedHistory)

        if( parsedHistory?.length > 0){
            let index: number = 0;
            while(index<parsedHistory.length){
                if(areLocationsEqual(data.location, parsedHistory[index].location)){
                    const savedDate = new Date(parsedHistory[index].timelines.hourly[0].time);
                    const now = new Date();
                    const diff = now.getTime() - savedDate.getTime();
                    const diffHours = Math.floor(diff / (1000 * 60 * 60 )); //1 min
                    console.log("diffHours: ", diffHours);

                    if(diffHours > 1){
                        console.log("Local Storage was expired, data removed: ", parsedHistory );
                        parsedHistory.splice(index, 1); // 2nd parameter means remove one item only  
                        foundHistory = false;
                        parsedHistory.push(data);
                        changesComited = true;
                    }
                    else{
                        console.log("Local Storage was updated, no changes comited: ", parsedHistory)
                    }  
                    break;
                }
                index++;
            };
        }

        if(changesComited || forceUpdate){
            // Save the data in localStorage
            localStorage.setItem(this.allHistories, JSON.stringify(parsedHistory));
            //SET COOKIE
            const cookiesUrl = `http://localhost:3000/cookies/history`;

            const realTimeAsCookie : SingleHistorySynchronizedCookie = {
                location: data.location,
                time: data.timelines.hourly[0].time,
            }
        
            const response = await fetch(cookiesUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*'
                },
                body: JSON.stringify( realTimeAsCookie)
            });
            
            if(response.ok){
                return false  //cookie has been properlty synchronized
            }  
        }
        return;
    }

    
    public static getHistoryFromLocalStorage = async(location: TomorrowLocation): Promise<boolean | HistoryData> => {
        const parsedHistories = JSON.parse(localStorage.getItem(this.allHistories)!) as HistoryData[];
        let foundHistory : HistoryData | boolean = parsedHistories?.length > 0;

        console.log("foundHistory found in localStorage: ", foundHistory)
        if (foundHistory) {
            let i = 0;
            while(i < parsedHistories.length ){
                if(areLocationsEqual(location, parsedHistories[i].location)){
                    foundHistory = parsedHistories[i];
                    break;
                }
                i++;
            };
        }
        if(!foundHistory){
            //SET COOKIE
            const cookiesUrl = `http://localhost:3000/cookies/history`;

            const message : NimbusError={
                code: 400,
                type: NimbusErrorType.COOKIE,
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
        return foundHistory;
    }

    

    // HISTORY LOCAL STORAGE END

}
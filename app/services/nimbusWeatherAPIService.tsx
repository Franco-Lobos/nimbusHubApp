import { json } from "@remix-run/node";
import { convertToURLfriendly } from "~/library/stringManagement";

const baseUrl= "http://127.0.0.1:8080/weather";

export const getWeatherForecast = async (location: string) => {
    location = convertToURLfriendly(location);
    const tomorrowUrl = `${baseUrl}/forecast/${location}`; // TODO SAVE IN CONSTANTS

    const data = await fetch(tomorrowUrl, {
        method: 'GET', 
        headers:{
          apikey: "9pIbRDZ6vY2jEUckr5BZ7tSOcJsJScrw", // TODO SAVE IN.ENV
          accept: 'application/json',
          Cookie: 'NIMBUS-AUTH=501770f0eebcd4eca49dbd678631029c06cf283f6b6bd02686c84b0d159cfbc4'
        }, 
        credentials: 'include',
      })
      
    if (data.status === 403) {
      // Handle forbidden error
      throw new Error('Forbidden');
    }
    
    return data.json()
}


export const getRealTimeWeather = async (location: string) => {
    location = convertToURLfriendly(location);
    const tomorrowUrl = `${baseUrl}/realtime/${location}`; // TODO SAVE IN CONSTANTS

    const data = await fetch(tomorrowUrl, {
        method: 'GET', 
        headers:{
          apikey: "9pIbRDZ6vY2jEUckr5BZ7tSOcJsJScrw", // TODO SAVE IN.ENV
          accept: 'application/json'
        }
      })
    return json(await data.json())
}

export const getWeatherRecentHistory = async (location: string) => {
    location = convertToURLfriendly(location);
    const tomorrowUrl = `${baseUrl}/history/recent/${location}`; // TODO SAVE IN CONSTANTS

    const data = await fetch(tomorrowUrl, {
        method: 'GET', 
        headers:{
          apikey: "9pIbRDZ6vY2jEUckr5BZ7tSOcJsJScrw", // TODO SAVE IN.ENV
          accept: 'application/json'
        }
      })
    return json(await data.json())
}
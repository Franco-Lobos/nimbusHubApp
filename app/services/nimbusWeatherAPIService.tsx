import { json } from "@remix-run/node";
import { convertToURLfriendly } from "~/library/stringManagement";
import { config as dotenvConfig } from 'dotenv';
dotenvConfig();

export const getWeatherForecast = async (location: string, request: Request) => {
    location = convertToURLfriendly(location);
    const tomorrowUrl = `${process.env.WHEATER_URL}/forecast/${location}`; // TODO SAVE IN CONSTANTS

    const data = await fetch(tomorrowUrl, {
        method: 'GET', 
        credentials: 'include',
        headers:{
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Cookie': request.headers.get("cookie")!
        }
      })
      
    if (data.status === 403) {
      // Handle forbidden error
      throw new Error('Forbidden');
    }
    
    return data.json()
}


export const getRealTimeWeather = async (location: string, request: Request) => {
    location = convertToURLfriendly(location);
    const tomorrowUrl = `${process.env.WHEATER_URL}/realtime/${location}`; // TODO SAVE IN CONSTANTS

    const data = await fetch(tomorrowUrl, {
        method: 'GET', 
        credentials: 'include',
        headers:{
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Cookie': request.headers.get("cookie")!
        }
      })
    return json(await data.json())
}

export const getWeatherRecentHistory = async (location: string, request: Request) => {
    location = convertToURLfriendly(location);
    const tomorrowUrl = `${process.env.WHEATER_URL}/history/recent/${location}`; // TODO SAVE IN CONSTANTS

    const data = await fetch(tomorrowUrl, {
      method: 'GET', 
      credentials: 'include',
      headers:{
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Cookie': request.headers.get("cookie")!
      }
    })
    return json(await data.json())
}
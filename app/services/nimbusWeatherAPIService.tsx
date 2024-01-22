import { json } from "@remix-run/node";
import { convertToURLfriendly } from "~/library/stringManagement";
import { config as dotenvConfig } from 'dotenv';
dotenvConfig();

export const getWeatherForecast = async (location: string, request: Request) => {
    console.log("LOCATION", location)
    const tomorrowUrl = `${process.env.WHEATER_URL}/forecast/${location}`; // TODO SAVE IN CONSTANTS

    const data = await fetch(tomorrowUrl, {
        method: 'GET', 
        credentials: 'include',
        headers:{
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Cookie': request.headers.get("Cookie")!
        }
      })
    if (!data.ok) {
      // Handle forbidden error
      throw new Error('Forbidden');
    }
    
    return data.json()
}

export const getRealTimeWeather = async (location: string, request: Request) => {
    console.log("LOCATION", location)
    const tomorrowUrl = `${process.env.WHEATER_URL}/realtime/${location}`; // TODO SAVE IN CONSTANTS

    const data = await fetch(tomorrowUrl, {
        method: 'GET', 
        credentials: 'include',
        headers:{
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Cookie': request.headers.get("Cookie")!
        }
      })
      if (!data.ok) {
        // Handle forbidden error
        throw new Error('Forbidden');
      }
      
    return await data.json();
}

export const getWeatherRecentHistory = async (location: string, request: Request) => {
  console.log("LOCATION", location)  
  const tomorrowUrl = `${process.env.WHEATER_URL}/history/recent/${location}`; // TODO SAVE IN CONSTANTS

    const data = await fetch(tomorrowUrl, {
      method: 'GET', 
      credentials: 'include',
      headers:{
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Cookie': request.headers.get("Cookie")!
      }
    })

    if (!data.ok) {
      // Handle forbidden error
      throw new Error('Forbidden');
    }
    return await data.json();
}
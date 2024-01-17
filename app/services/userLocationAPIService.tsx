import { SessionData, json } from "@remix-run/node";
import { config as dotenvConfig } from 'dotenv';
import { WeatherLocation } from "~/models/WeatherLocation";

dotenvConfig();

export const locationService = async (ip: string) => {
    const tomorrowUrl = `${process.env.LOCATION_URL}/${ip}/json/`; 
    let returnter: WeatherLocation;

    const data = await fetch(tomorrowUrl, {
        method: 'POST', 
        headers:{
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        }, 
    })
    const dataJson = await data.json();

    if(data.status !== 200){
        return json({error: "error"});
    }

    let name: string = dataJson.city;
    if(dataJson.region  && dataJson.region != ""){
        name += ", " + dataJson.region;
    }
    if(dataJson.country_name  && dataJson.country_name != ""){
        name += ", " + dataJson.country_name;
    }

    returnter = {
        lat: dataJson.latitude,
        lon: dataJson.longitude,
        name: name,
        type: "administrative"
    }

    return returnter;
}
import { SessionData, json } from "@remix-run/node";
import { config as dotenvConfig } from 'dotenv';
import { defaultLocation } from "~/components/constants/defaults";
import { SessionLocation } from "~/models/tomorrow/WeatherLocation";

dotenvConfig();

export const locationService = async (ip: string) => {
    const tomorrowUrl = `${process.env.LOCATION_URL}/${ip}/json/`; 
    let returnter: SessionLocation;

    const data = await fetch(tomorrowUrl, {
        method: 'POST', 
        headers:{
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        }, 
    })
    const dataJson = await data.json();

    if(data.status !== 200){
        return defaultLocation;
    }

    let name: string = dataJson.city;
    if(dataJson.region  && dataJson.region != ""){
        name += ", " + dataJson.region;
    }
    if(dataJson.country_name  && dataJson.country_name != ""){
        name += ", " + dataJson.country_name;
    }

    returnter = {
        lat: parseFloat(dataJson.latitude.toFixed(4)),
        lon: parseFloat(dataJson.longitude.toFixed(4)),
        name: name,
        type: "administrative"
    }

    return returnter;
}
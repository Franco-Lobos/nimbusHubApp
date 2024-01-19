import { Link, useLoaderData } from '@remix-run/react';
import {  type LoaderFunctionArgs,  redirect, json } from '@remix-run/node';
import { getSession } from '~/session';
import { Outlet } from 'react-router-dom';
import { useOutletContext } from "@remix-run/react";
import {  isTomorrowError } from '~/models/tomorrow/TomorrowError';
import ErrorView from '~/components/widgets/error';
import { HourlyItem } from '~/models/WeatherHourly';
import { defaultForecast, defaultLocation } from '~/components/constants/defaults';

import ForecastHourlyCard from '~/components/widgets/dashboard/weatherCards/forecastHourlyCard';
import ForecastDailyCard from '~/components/widgets/dashboard/weatherCards/forecastDailyCard';
import { DailyItem } from '~/models/WeatherDaily';
import { useEffect, useState } from 'react';
import { getWeatherForecast } from '~/services/nimbusWeatherAPIService';
import { WeatherLocation, areLocationsEqual } from '~/models/WeatherLocation';

import { cardStyleClass } from '~/components/constants/styles';
import { motion } from 'framer-motion';
import { FaArrowCircleUp } from 'react-icons/fa/index.js';
import { ForecastWeatherData } from '~/models/Forecast';
import { CookieAllForecastsInLocalStorage, SingleForcastSynchronizedCookie, allForecastsCookie } from "~/cookies.server";

const cookieStorageManager = async (location:WeatherLocation, request: Request) => {
  const cookieHeader = request.headers.get("Cookie");
  const storedForecasts = (await allForecastsCookie.parse(cookieHeader)) || {};
  const parsedForecasts = storedForecasts as CookieAllForecastsInLocalStorage;
  let foundForecast : SingleForcastSynchronizedCookie | boolean= parsedForecasts?.forecasts?.length > 0;

  if(foundForecast){
    parsedForecasts.forecasts.forEach((forecast, index) => {
      if(areLocationsEqual(location, forecast.location)){
        const savedDate = new Date(forecast.time);
        const now = new Date();
        const diff = now.getTime() - savedDate.getTime();
        const diffHours = Math.floor(diff / (1000 * 60 * 60));

        console.log("diffHours: ", diffHours);
        if(diffHours > 1){
          parsedForecasts.forecasts.splice(index, 1); // 2nd parameter means remove one item only  
          foundForecast = false;
        }
        else{
          console.log("Cookies were updated, API call avoided: ", parsedForecasts)
          foundForecast = forecast;
        }  
        return;
      }
    })
    foundForecast = false;
  }

  if(foundForecast){
    return foundForecast;
  }

  //else
  console.log("Data not found in cookies. Making a new request to the API.");
  return  await getWeatherForecast(location.name, request);
  // Save the data in cookies
  // if(parsedForecasts?.forecasts){
  //   parsedForecasts.forecasts.push(loadForecast);
  // }else{
  //   parsedForecasts.forecasts = [loadForecast];
  // }
  // const serializedCookie = await allForecastsCookie.serialize(parsedForecasts);
  // // Use the newly fetched data
  // console.log("Data fetched from API:", loadForecast);
  // //RELOAD ROUT  WITH THE NEW HEADER (SET-COOKIES:serializedCookie )

  // const response = await fetch(request.url, {
  //   method: 'GET',
  //   headers: {
  //     'Set-Cookie': serializedCookie,
  //     'Content-Type': 'application/json',
  //   },
  // });

  // console.log(response)

  // return response.json();

  
};


export async function loader({
  request,
}: LoaderFunctionArgs) {

  const session = await getSession(request.headers.get("Cookie"));
  if (!session.has("userId")) {
    return redirect("/acces/login");
  }
  
  let location: WeatherLocation = defaultLocation;
  if(session.has("location")){
    const sessionLocations = session.get("location")!;
    location = sessionLocations[sessionLocations.length-1 ];
  }

  // const loadForecast : any = await cookieStorageManager(location, request);
  const loadForecast = defaultForecast;
  return loadForecast;
};


export default function DashboardForecast() {
    const foreceastData = useLoaderData<typeof loader>();
    console.log("foreceastData: ", foreceastData)
    const parsedForecastData : ForecastWeatherData = foreceastData as ForecastWeatherData;
    const hourlyItems: HourlyItem[] = parsedForecastData?.timelines?.hourly as HourlyItem[];
    const dailyItems: DailyItem[] = parsedForecastData?.timelines?.daily as DailyItem[];

    const [minTempWeek, setMinTempWeek] = useState<number>(0); 
    const [maxTempWeek, setMaxTempWeek] = useState<number>(0); 

    const [via, setVia] = useState<number>(10);

    useEffect(() => {
      if(!dailyItems) return;
      let smaller = Math.round(dailyItems[0].values.temperatureMin);
      let bigger  = Math.round(dailyItems[0].values.temperatureMax);
      dailyItems.slice(1,7).forEach((dailyItem, indx)=>{
        const min = Math.round(dailyItem.values.temperatureMin);
        const max = Math.round(dailyItem.values.temperatureMax);
        if(min < smaller){ smaller = min}
        if(max > bigger){ bigger = max}
        }
      )
      setMinTempWeek(smaller);
      setMaxTempWeek(bigger);
    },[dailyItems]);

    // Example: Displaying hourly data
    return (
        isTomorrowError(foreceastData)
        ?
          <ErrorView/>
        :
        <motion.div
          initial={{ y: 30 }}
          animate={{ y: 50 }}
          >
        <div className='overflow-scroll h-dvh rounded-lg pb-72 '>
          <motion.div
              initial={{ scale: 0.8 , height: 0, opacity: 0}}
              animate={{ scale: 1 , height: "min-content", opacity: 1}}
              transition={{ duration: 0.3, delay: 0.2 }}
          >
            <div className={`
              p-4 pb-0 rounded-lg mt-6
              bg-snowGray/0
              bg-gradient-to-br from-iceLightblue/10 via-iceLightblue/20 via-${via}% to-iceLightblue/60
              bg-iceLightblue/0
              dark:bg-gradient-to-br dark:from-iceLightblue/10 dark:via-iceLightblue/20 dark:via-${via}% dark:to-iceLightblue/10
              `}>
              <h3 className=" 
                text-sm uppercase
                font-semibold mb-4 pb-2 text-blue/80 border-b border-blue/40 
                dark:text-iceBlue/80 dark:border-iceBlue/40">Next hours forecast</h3>
                <ul className='flex flex-row overflow-scroll align-center justify-start'>
                    {
                    hourlyItems.slice(0,24).map((hourlyItem, indx)=> 
                      <ForecastHourlyCard hourlyItem={hourlyItem}  now={indx==0}/>
                    )
                    }
                </ul>
            </div>
          </motion.div>
          <motion.div
              initial={{ scale: 0.8 , height: 0, opacity: 0}}
              animate={{ scale: 1 , height: "min-content", opacity: 1}}
              transition={{ duration: 0.3, delay: 0.2  }}
          >
          <div className={` bg-snowGray/0
            ${cardStyleClass}
          `}>
            <h3 className="
                text-sm uppercase
                font-semibold mb-4 text-blue/80 dark:text-iceBlue/80 border-b border-blue/40
                dark:border-iceBlue/40 pb-2 ">  Next Week Forecast
            </h3>
            <motion.ul
              initial="hidden"
              animate="visible"
              variants={{
                visible: { opacity: 1 },
                hidden: { opacity: 0 },
              }}
            ></motion.ul>
            <ul className='flex flex-col align-center justify-start'>
                  {
                  dailyItems.slice(0,7).map((dailyItem, indx)=> 
                    <ForecastDailyCard dailyItem={dailyItem} minTempWeek={minTempWeek} maxTempWeek={maxTempWeek} indx={indx}/>
                  )
                  }
            </ul>
          </div>
          </motion.div>

          <motion.div
            initial={{ scale: 0.8 , height: 0, bottom:"100vh"}}
            animate={{ scale: 1 , height: "min-content", bottom:0}}
            transition={{ duration: 0.3, delay: 0.2  }}
          >
          <Link to="/dashboard/realtime/history">
          <div className={` cursor-pointer  bg-snowGray/0 relative ${cardStyleClass}`}>
            <div className="flex flex-row justify-between items-center border-b border-blue/40  dark:border-iceBlue/40">
              <h3 className="text-sm uppercase font-semibold mb-2 text-blue/80 dark:text-iceBlue/80 
              " >Last days Were...</h3>
              <FaArrowCircleUp className="
              text-blue/80 dark:text-iceBlue/80 pr-2 pb-2 w-6 h-6  
              "></FaArrowCircleUp>
            </div>
          </div>
          </Link>
          </motion.div>
        </div>
        </motion.div>        
    );
}

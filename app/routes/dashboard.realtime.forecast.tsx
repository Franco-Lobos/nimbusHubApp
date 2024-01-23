import { Link, useLoaderData, useNavigate } from '@remix-run/react';
import {  type LoaderFunctionArgs,  redirect, json } from '@remix-run/node';
import { getSession } from '~/session';
import { Outlet } from 'react-router-dom';
import { useOutletContext } from "@remix-run/react";
import {  isTomorrowError } from '~/models/errors/TomorrowError';
import ErrorView from '~/components/widgets/error';
import { HourlyItem } from '~/models/tomorrow/WeatherHourly';
import { defaultForecast, defaultLocation, defaultSessionLocation } from '~/components/constants/defaults';

import ForecastHourlyCard from '~/components/widgets/dashboard/weatherCards/forecastHourlyCard';
import ForecastDailyCard from '~/components/widgets/dashboard/weatherCards/forecastDailyCard';
import { DailyItem } from '~/models/tomorrow/WeatherDaily';
import { useEffect, useState } from 'react';
import { getWeatherForecast } from '~/services/nimbusWeatherAPIService';
import { SessionLocation, areLocationsEqual } from '~/models/tomorrow/WeatherLocation';

import { cardStyleClass } from '~/components/constants/styles';
import { motion } from 'framer-motion';
import { FaArrowCircleUp } from 'react-icons/fa/index.js';
import { ForecastWeatherData, isForecastWeatherData } from '~/models/tomorrow/Forecast';
import { SingleForcastSynchronizedCookie } from "../models/cookies/forecastCookies"
import { StorageManager } from '~/services/LocalStorageManager';
import { CookieStorageManager } from '~/services/CookieStorageManager';
import { isSingleForcastSynchronizedCookie } from '../models/cookies/forecastCookies';
import { allForecastsCookie } from '~/cookies.server';


export async function loader({
  request,
}: LoaderFunctionArgs) {
  const cookieHeader = request.headers.get("Cookie");

  const session = await getSession(cookieHeader);
  if (!session.has("userId")) {
    return redirect("/acces/login");
  }
  
  let location: SessionLocation = defaultSessionLocation;

  if(session.has("location")){
    const sessionLocations = session.get("location")!;
    location = sessionLocations[sessionLocations.length-1];
  }

  let updateStorage = false;
  let loadForecast : ForecastWeatherData | SingleForcastSynchronizedCookie | boolean = await CookieStorageManager.getForecastWeather(location, request);
  if(!loadForecast){
    console.info("FORECAST: MAKING API CALL")
    loadForecast  = defaultForecast!;
    //SYNC COOKIES WITH LOCAL STORAGE
    updateStorage = true;
    const coords : string = `${location.lat},${location.lon}`;
    // loadForecast = await getWeatherForecast(coords, request)
  }
  else{
    console.log("FORECAST: API CALL AVOIDED")
  }
  return {forecast: loadForecast, updateStorage: updateStorage};
};


export default function DashboardForecast() {
    const navigate = useNavigate();
    const [forecastData, setForecastData] = useState<any |ForecastWeatherData | undefined>( useLoaderData<typeof loader>());
    // let foreceastData : any = useLoaderData<typeof loader>();
    const [parsedForecastData, setParsedForecastData] = useState<ForecastWeatherData | null>(null);
    const [hourlyItems, setHourlyItems] = useState<HourlyItem[]>([]);
    const [dailyItems, setDailyItems] = useState<DailyItem[]>([]);

    const [loadedFromLocalStorage, setLoadedFromLocalStorage] = useState<boolean>(false);
    const [minTempWeek, setMinTempWeek] = useState<number>(0); 
    const [maxTempWeek, setMaxTempWeek] = useState<number>(0); 

    const [via, setVia] = useState<number>(10);

    useEffect(() => {
      const readedData = forecastData?.forecast;
      if(!readedData){
        navigate("/dashboard");
        return;
      };

      if (isSingleForcastSynchronizedCookie(readedData) && !loadedFromLocalStorage){
        console.log("FORECAST: LOAD FROM LOCAL")
        const setData = async()=>{

          setForecastData(
            {...forecastData,
              forecast: await StorageManager.getForecastWeatherDataFromLocalStorage(readedData.location),
            })  
          setLoadedFromLocalStorage(true);
        }
        setData();
        return;
      }

      if(isForecastWeatherData(readedData)){
        setParsedForecastData(readedData);
        setHourlyItems(readedData.timelines.hourly);
        setDailyItems(readedData.timelines.daily);
        return;
      }
    },[forecastData]);

    useEffect( () => {
      const localStorageFlag = forecastData?.updateStorage;

      if(!parsedForecastData || loadedFromLocalStorage) return;
      if (isForecastWeatherData(parsedForecastData)){
        console.log("FORECAST: SAVE IN LOCAL")
        const saveData = async()=>{
          await StorageManager.setForecastWeatherDataInLocalStorage(parsedForecastData, localStorageFlag);
        }
        saveData();
      }
    },[parsedForecastData]);


    useEffect(() => {
      if(!dailyItems || dailyItems.length == 0) return;
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
        forecastData && isTomorrowError(forecastData)
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
                    hourlyItems
                      ?
                      hourlyItems.slice(0,24).map((hourlyItem, indx)=> 
                      <ForecastHourlyCard key={hourlyItem.time} hourlyItem={hourlyItem}  indx={indx}/>
                      )
                      :""
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
                  dailyItems?
                  dailyItems.slice(0,7).map((dailyItem, indx)=> 
                    <ForecastDailyCard key={dailyItem.time} dailyItem={dailyItem} minTempWeek={minTempWeek} maxTempWeek={maxTempWeek} indx={indx}/>
                  )
                  : ""
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

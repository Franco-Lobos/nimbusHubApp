import { Link, useLoaderData, useNavigate } from '@remix-run/react';
import {  type LoaderFunctionArgs, redirect } from '@remix-run/node';
import { getSession } from '~/session';
import { SessionLocation } from '~/models/tomorrow/WeatherLocation';
import { RealTimeData } from '~/models/tomorrow/RealTime';
import { isTomorrowError } from '~/models/errors/TomorrowError';
import ErrorView from '~/components/widgets/error';
import { defaultForecast, defaultHistory, defaultLocation, defaultRealTime, defaultSessionLocation } from '~/components/constants/defaults';
import { getRealTimeWeather, getWeatherRecentHistory } from '~/services/nimbusWeatherAPIService';
import { DailyItem } from '~/models/tomorrow/WeatherDaily';
import ForecastDailyCard from '~/components/widgets/dashboard/weatherCards/forecastDailyCard';
import { useEffect, useState } from 'react';

import { cardStyleClass } from '~/components/constants/styles';
import { motion } from 'framer-motion';

import { FaArrowCircleDown } from 'react-icons/fa/index.js';
import { HistoryData, isHistoryData } from '~/models/tomorrow/History';
import { SingleHistorySynchronizedCookie, isSingleHistorySynchronizedCookie } from '~/models/cookies/historyCookies';
import {StorageManager} from '~/services/LocalStorageManager';
import { CookieStorageManager } from '~/services/CookieStorageManager';
import { isSingleForcastSynchronizedCookie } from '~/models/cookies/forecastCookies';
import { NimbusError, isNimbusError } from '~/models/errors/NimbusError';
import { manageApiErrors } from '~/services/manageAPIErrors';
import { sessionVerificator } from '~/utils/SessionVerificator';
import { HourlyItem } from '~/models/tomorrow/WeatherHourly';
import ForecastHourlyCard from '~/components/widgets/dashboard/weatherCards/forecastHourlyCard';

export async function loader({
  request,
}: LoaderFunctionArgs) {

  const cookies = request.headers.get("Cookie");
  const session = await getSession(cookies);
  //VERIFICATION
  const verificationResponse = await sessionVerificator(session, cookies!);
  if(verificationResponse){
    return verificationResponse;
  }
  //VERIFICATION END
  
  let location: SessionLocation = defaultSessionLocation;
  if(session.has("location")){
    const sessionLocations = session.get("location")!;
    location = sessionLocations[sessionLocations.length-1 ];
  }

  let updateStorage = false;
  let loadHistory : HistoryData | SingleHistorySynchronizedCookie | Boolean | NimbusError = await CookieStorageManager.getHistory(location, request);
  console.info("loadHistory: ", loadHistory)
  //PLACEHOLDER CITY NAME = session.data.location[0].name
  if(!loadHistory){
    console.info("HISTORY: MAKING API CALL")
    loadHistory  = defaultHistory!;
    //SYNC COOKIES WITH LOCAL STORAGE
    updateStorage = true;
    const coords : string = `${location.lat},${location.lon}`;
    
    const loadedData = await getWeatherRecentHistory(coords, request);
    if(loadedData && isNimbusError(loadedData)){
      return manageApiErrors(loadedData);
    }
    loadHistory = loadedData;
  }
  else{
    console.log("HISTORY: API CALL AVOIDED")
  }
  return {history: loadHistory, updateStorage: updateStorage};

  // return loadForecast;
};


const RecentHistory = () => {
  const navigate = useNavigate();
  const [loadHistory, setLoadHistory]= useState<any | HistoryData | undefined>(useLoaderData<typeof loader>());
  const [parsedHistory, setParsedHistory] =useState<HistoryData | null>(null);
  const [hourlyItems, setHourlyItems] = useState<HourlyItem[]>([]);
  const [dailyItems, setDailyItems] = useState<DailyItem[]>([]);
  const [loadedFromLocalStorage, setLoadedFromLocalStorage] = useState<boolean>(false);


  const [minTempWeek, setMinTempWeek] = useState<number>(0); 
  const [maxTempWeek, setMaxTempWeek] = useState<number>(0);

  useEffect(() => {
    console.log("loadHistory: ", loadHistory)
    const readedData = loadHistory?.history;
    if(!readedData){
      navigate("/dashboard");
      return;
    };


    if (isSingleHistorySynchronizedCookie(readedData) && !loadedFromLocalStorage){
      console.log("HISTORY: LOAD FROM LOCAL")
      const setData = async()=>{
        setLoadHistory(
          {...loadHistory,
            history: await StorageManager.getHistoryFromLocalStorage(readedData.location)  
          }
        )  
        setLoadedFromLocalStorage(true);
      }
      setData();
      return;
    }

    if(isHistoryData(readedData)){
      setParsedHistory(readedData);
      setHourlyItems(readedData.timelines.hourly);
      setDailyItems(readedData.timelines.daily);
      console.log("IS HISTORY DATA")
      return;
    }

  },[loadHistory]);

  useEffect( () => {
    const localStorageFlag = loadHistory?.updateStorage;
    if(!parsedHistory || loadedFromLocalStorage) return;
    if (isHistoryData(parsedHistory)){
      console.log("HISTORY: SAVE IN LOCAL")
      const saveData = async()=>{
        await StorageManager.setHistoryDataInLocalStorage(parsedHistory, localStorageFlag);
      }
      saveData();
    }
  },[parsedHistory]);
  

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


  return (
    loadHistory && isTomorrowError(loadHistory)
    ?
      <ErrorView/>
    :
    <>
      <motion.div
        initial={{ scale: 0.8 , height: 0, opacity: 0}}
        animate={{ scale: 1 , height: "min-content", opacity:1}}
        transition={{ duration: 0.5, delay:0.6 }}
      >
      <Link to="/dashboard/realtime/forecast">
        <div className={` cursor-pointer  bg-snowGray/0 relative ${cardStyleClass}`}
          >
          <div className="flex flex-row justify-between items-center border-b border-blue/40  dark:border-iceBlue/40">
            <h3 className="text-sm uppercase font-semibold mb-2 text-blue/80 dark:text-iceBlue/80 
             " >Forecast</h3>
            <FaArrowCircleDown className="
            text-blue/80 dark:text-iceBlue/80 pr-2 pb-2 w-6 h-6 
            "></FaArrowCircleDown>
          </div>
         
       </div>
      </Link>
      </motion.div>
      <motion.div
        initial={{ scale: 0.8 , height: 0, y:"100vh"}}
        animate={{ scale: 1 , height: "min-content", y:0}}
        transition={{ duration: 0.4 }}
      >

          <div className={`
              ${cardStyleClass}
              `}>
              <h3 className=" 
                text-sm uppercase
                font-semibold mb-4 pb-2 text-blue/80 border-b border-blue/40 
                dark:text-iceBlue/80 dark:border-iceBlue/40">Last Hours were</h3>
                <ul className='flex flex-row overflow-scroll align-center justify-start'>
                    {
                    hourlyItems
                      ?
                      hourlyItems.slice(0,24).map((hourlyItem, indx)=> 
                      <ForecastHourlyCard key={hourlyItem.time} hourlyItem={hourlyItem}  index={indx}/>
                      )
                      :""
                    }
                </ul>
          </div>


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
                dark:border-iceBlue/40 pb-2 "> Last days were
            </h3>
            <motion.ul
              initial="hidden"
              animate="visible"
              variants={{
                visible: { opacity: 1 },
                hidden: { opacity: 0 },
              }}
            ></motion.ul>
            <ul className='flex flex-col align-center justify-start lg:flex-row overflow-x-scroll'>
                  {
                  dailyItems?
                  dailyItems.slice(0,7).map((dailyItem, indx)=> 
                    <ForecastDailyCard key={dailyItem.time} dailyItem={dailyItem} minTempWeek={minTempWeek} maxTempWeek={maxTempWeek} indx={-(indx+1)}/>
                  )
                  : ""
                  }
            </ul>
          </div>
          </motion.div>
     
      
      </motion.div>
    </>
  );
};

export default RecentHistory;

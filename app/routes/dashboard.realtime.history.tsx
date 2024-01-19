import { Link, useLoaderData } from '@remix-run/react';
import {  type LoaderFunctionArgs, redirect } from '@remix-run/node';
import { getSession } from '~/session';
import { WeatherLocation } from '~/models/WeatherLocation';
import { RealTimeData } from '~/models/RealTime';
import { isTomorrowError } from '~/models/tomorrow/TomorrowError';
import ErrorView from '~/components/widgets/error';
import { defaultForecast, defaultHistory, defaultLocation, defaultRealTime } from '~/components/constants/defaults';
import { getRealTimeWeather } from '~/services/nimbusWeatherAPIService';
import { DailyItem } from '~/models/WeatherDaily';
import ForecastDailyCard from '~/components/widgets/dashboard/weatherCards/forecastDailyCard';
import { useState } from 'react';

import { cardStyleClass } from '~/components/constants/styles';
import { motion } from 'framer-motion';

import { FaArrowCircleDown } from 'react-icons/fa/index.js';

const splitedName = (name: string) => {
  let nameArray; 
  try{
    nameArray = name.split(",");
  }
  catch(error){
    return name
  }
  return nameArray[0]
}

export async function loader({
  request,
}: LoaderFunctionArgs) {
    // const cityName: string = useOutletContext();

  const session = await getSession(request.headers.get("Cookie"));
  if (!session.has("userId")) {
    return redirect("/acces/login");
  }
  
  let location: WeatherLocation = defaultLocation;
  if(session.has("location")){
    const sessionLocations = session.get("location")!;
    location = sessionLocations[sessionLocations.length-1 ];
  }

  // const loadForecast : any = await getWeatherForecast(location.name, request);
  const loadForecast = defaultHistory;
  return loadForecast;
};


const RecentHistory = () => {
  const loadForecast: any = useLoaderData<typeof loader>();
  const forecast: RealTimeData = loadForecast as RealTimeData;
  const dailyItems: DailyItem[] = loadForecast.timelines.daily as DailyItem[];

  const [via, setVia] = useState<number>(10);

  
  return (
    isTomorrowError(loadForecast)
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
      <div className={`p-4 bg-snowGray/0 ${cardStyleClass}
        `}>
        <h3 className="
          font-semibold mb-4 text-blue/80 dark:text-iceBlue/80 border-b border-blue/40
          dark:border-iceBlue/40 pb-2 text-sm uppercase">Last days were... </h3>
        <ul className='flex flex-col align-center justify-start'>
            {
            dailyItems.slice(0,7).map((dailyItem, indx)=> 
              <ForecastDailyCard dailyItem={dailyItem} minTempWeek={0} maxTempWeek={10} indx={indx}/>
            )
            }
        </ul>
      </div>
      </motion.div>
    </>

    
  );
};

export default RecentHistory;

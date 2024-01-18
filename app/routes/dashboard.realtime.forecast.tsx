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
import { WeatherLocation } from '~/models/WeatherLocation';

import { cardStyleClass } from '~/components/constants/styles';

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
  const loadForecast = defaultForecast;
  return loadForecast;
};


export default function DashboardForecast() {
    const foreceastData = useLoaderData<typeof loader>();
    const cityName: string = useOutletContext();
    const hourlyItems: HourlyItem[] = foreceastData.timelines.hourly as HourlyItem[];
    const dailyItems: DailyItem[] = foreceastData.timelines.daily as DailyItem[];

    const [minTempWeek, setMinTempWeek] = useState<number>(0); 
    const [maxTempWeek, setMaxTempWeek] = useState<number>(0); 

    const [via, setVia] = useState<number>(10);

    useEffect(() => {
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
        <div>
          <div className='overflow-scroll h-dvh rounded-lg pb-56 '>
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

            <div className={` bg-snowGray/0
              ${cardStyleClass}
            `}>
              <h3 className="
                text-sm uppercase
                font-semibold mb-4 text-blue/80 dark:text-iceBlue/80 border-b border-blue/40
                dark:border-iceBlue/40 pb-2 ">  Next Week Forecast </h3>
              <ul className='flex flex-col align-center justify-start'>
                  {
                  dailyItems.slice(0,7).map((dailyItem, indx)=> 
                    <ForecastDailyCard dailyItem={dailyItem} today={indx==0} minTempWeek={minTempWeek} maxTempWeek={maxTempWeek}/>
                  )
                  }
              </ul>
            </div>

            <Link to="/dashboard/realtime/history">
            <div className={` cursor-pointer pb-2  bg-snowGray/0 ${cardStyleClass}`}
              >
              <h3 className="
               text-sm uppercase
                font-semibold mb-4 text-blue/80 dark:text-iceBlue/80 border-b border-blue/40
                dark:border-iceBlue/40 pb-2">Last days were...
              </h3>
            </div>
            </Link>
          </div>
        </div>
        // Example styles using Tailwind CSS
    
    );
}
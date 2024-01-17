import { useLoaderData } from '@remix-run/react';
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
          <div className="flex-1 flex flex-col overflow-hidden  overflow-x-hidden overflow-y-auto">
              <Outlet context={cityName}/>
          </div>
          <div className='overflow-scroll h-dvh'>
            <div className="p-4 bg-iceBlue/20 rounded-lg mt-6">
              <h3 className="font-semibold mb-4 text-blue/60 border-b border-blue/40 pb-2">Hourly Weather Forecast</h3>
                <ul className='flex flex-row overflow-scroll align-center justify-start'>
                    {
                    hourlyItems.slice(0,24).map((hourlyItem, indx)=> 
                      <ForecastHourlyCard hourlyItem={hourlyItem}  now={indx==0}/>
                    )
                    }
                </ul>
            </div>

            <div className="p-4 bg-iceBlue/20 rounded-lg mt-6">
              <h3 className="font-semibold mb-4 text-blue/60 border-b border-blue/40 pb-2">  Next Week Forecast </h3>
              <ul className='flex flex-col  align-center justify-start'>
                  {
                  dailyItems.slice(0,7).map((dailyItem, indx)=> 
                    <ForecastDailyCard dailyItem={dailyItem} today={indx==0} minTempWeek={minTempWeek} maxTempWeek={maxTempWeek}/>
                  )
                  }
              </ul>
            </div>

            
          </div>
        </div>
        // Example styles using Tailwind CSS
    
    );
}

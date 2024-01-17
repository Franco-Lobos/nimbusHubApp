import { useLoaderData } from '@remix-run/react';
import {  type LoaderFunctionArgs,  redirect, json } from '@remix-run/node';
import { getSession } from '~/session';
import { Outlet } from 'react-router-dom';
import { useOutletContext } from "@remix-run/react";
import {  isTomorrowError } from '~/models/tomorrow/TomorrowError';
import ErrorView from '~/components/widgets/error';
import { HourlyItem } from '~/models/WeatherHourly';
import { defaultForecast } from '~/components/constants/defaults';

import ForecastHourlyCard from '~/components/widgets/dashboard/weatherCards/forecastHourlyCard';

export async function loader({
  request,
}: LoaderFunctionArgs) {
    // const cityName: string = useOutletContext();

  const session = await getSession(request.headers.get("Cookie"));
  if (!session.has("userId")) {
    return redirect("/acces/login");
  }

  // const loadForecast : any = await getWeatherForecast("paris", request);
  const loadForecast = defaultForecast;

  return loadForecast;
};

export default function DashboardForecast() {
    const foreceastData = useLoaderData<typeof loader>();
    const cityName: string = useOutletContext();
    const hourlyItems: HourlyItem[] = foreceastData.timelines.hourly as HourlyItem[];

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
        <div className="p-4  bg-iceBlue/20 rounded-lg">
          <h3 className="text-2xl font-bold mb-4 text-themeBlack">Hourly Weather Forecast</h3>
            <ul className='flex flex-row overflow-scroll align-center justify-start'>

                {
                hourlyItems.map(hourlyItem=> 
                  <ForecastHourlyCard hourlyItem={hourlyItem}/>
                )
                }
            </ul>
          </div>
        </div>
        // Example styles using Tailwind CSS
    
    );
}

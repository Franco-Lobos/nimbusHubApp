import { Link, Outlet, useLoaderData } from '@remix-run/react';
import {  type LoaderFunctionArgs, redirect } from '@remix-run/node';
import { getSession } from '~/session';
import { WeatherLocation } from '~/models/WeatherLocation';
import { RealTimeData } from '~/models/RealTime';
import { isTomorrowError } from '~/models/tomorrow/TomorrowError';
import ErrorView from '~/components/widgets/error';
import { defaultLocation, defaultRealTime } from '~/components/constants/defaults';
import { getRealTimeWeather } from '~/services/nimbusWeatherAPIService';
import { mainBg } from '~/components/constants/styles';
import { FaMap } from 'react-icons/fa/index.js';


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
      const session = await getSession(request.headers.get("Cookie"));
      if (!session.has("userId")) {
        return redirect("/acces/login");
      }

      let location: WeatherLocation = defaultLocation;
      if(session.has("location")){
        const sessionLocations = session.get("location")!;
        location = sessionLocations[sessionLocations.length-1 ];
      }
      
      // console.log( await getRealTimeWeather(location.name, request));
      // const loadForecast = await getRealTimeWeather(location.name, request);
      const loadForecast = defaultRealTime;
      return loadForecast;
  };


const ReaLtimeLocation = () => {
  const loadForecast: any = useLoaderData<typeof loader>();
  const forecast: RealTimeData = loadForecast as RealTimeData;
  const cityName: string = splitedName(forecast?.location?.name);
  const currentWiwather: number = forecast?.data?.values?.temperature;

  return (
    isTomorrowError(loadForecast)
    ?
      <ErrorView/>
    :
    <div className={mainBg}>
      <div className='flex flex-col py-6'>
      <Link to="/dashboard" className={`
        bg-iceLightblue/0
        bg-gradient-to-br from-iceLightblue/20 via-iceLightblue/60 via-${10}% to-iceLightblue/0
        dark:bg-gradient-to-br dark:from-iceLightblue/10 dark:via-iceLightblue/20 dark:via-${10}% dark:to-iceLightblue/0
        w-fit h-fit rounded-full
        `}>
        <FaMap className={`
          text-blue/80 dark:text-themeWhite/80 w-10 h-10  opacity-60 p-2`}
        ></FaMap>
      </Link>
        <div className="text-themeBlack/80 dark:text-themeWhite/80 text-center mt-8 text-2xl font-bold">
            {cityName}
        </div>
            <div className="text-themeBlack dark:text-themeWhite p-2 text-center text-6xl ">
            {Math.round(currentWiwather)}°C <br/>
        </div>
        
      </div>
      <Outlet/>
    </div>

    
  );
};

export default ReaLtimeLocation;

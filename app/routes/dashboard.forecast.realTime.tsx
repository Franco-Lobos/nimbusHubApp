import { useLoaderData } from '@remix-run/react';
import {  type LoaderFunctionArgs, redirect } from '@remix-run/node';
import { getSession } from '~/session';
import { WeatherLocation } from '~/models/WeatherLocation';
import { RealTimeData } from '~/models/RealTime';
import { isTomorrowError } from '~/models/tomorrow/TomorrowError';
import ErrorView from '~/components/widgets/error';
import { defaultLocation, defaultRealTime } from '~/components/constants/defaults';
import { getRealTimeWeather } from '~/services/nimbusWeatherAPIService';



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
    <div className='flex flex-col py-6'>
      <div className="text-themeBlack text-center mt-8 text-2xl font-bold">
          {cityName}
      </div>
          <div className="text-themeBlack p-2 text-center text-6xl ">
          {Math.round(currentWiwather)}°C <br/>
      </div>
      
    </div>
    
  );
};

export default ReaLtimeLocation;

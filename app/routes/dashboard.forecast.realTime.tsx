import { useLoaderData } from '@remix-run/react';
import {  type LoaderFunctionArgs, redirect } from '@remix-run/node';
import { getSession } from '~/session';
import { WeatherLocation } from '~/models/WeatherLocation';
import { RealTimeData } from '~/models/RealTime';
import { isTomorrowError } from '~/models/tomorrow/TomorrowError';
import ErrorView from '~/components/widgets/error';
import { defaultRealTime } from '~/components/constants/defaults';

const defaultLocation: WeatherLocation = {
  "lat": 40.71272659301758,
  "lon": -74.00601196289062,
  "name": "City of New York, New York, United States",
  "type": "administrative"
}


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

      let location: WeatherLocation;
      location = session.has("location")? session.get("location")![0]: defaultLocation;

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
    <div className='flex flex-col'>
      <div className="text-themeBlack p-4 text-center m-8 text-2xl font-bold">
          {cityName}
      </div>
          <div className="text-themeBlack p-2 text-center text-4xl font-bold">
          {currentWiwather}°C
      </div>
    </div>
    
  );
};

export default ReaLtimeLocation;

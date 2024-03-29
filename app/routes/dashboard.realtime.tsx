import { Link, Outlet, useLoaderData, useNavigate } from '@remix-run/react';
import {  type LoaderFunctionArgs, redirect } from '@remix-run/node';
import { destroySession, getSession } from '~/session';
import { SessionLocation } from '~/models/tomorrow/WeatherLocation';
import { RealTimeData, isRealTimeData } from '~/models/tomorrow/RealTime';
import { isTomorrowError } from '~/models/errors/TomorrowError';
import ErrorView from '~/components/widgets/error';
import { defaultLocation, defaultRealTime, defaultSessionLocation } from '~/components/constants/defaults';
import { getRealTimeWeather } from '~/services/nimbusWeatherAPIService';
import { buttonClass, mainBg } from '~/components/constants/styles';
import { FaMap } from 'react-icons/fa/index.js';
import { SingleRealTimeSynchronizedCookie, isSingleRealTimeSynchronizedCookie } from '~/models/cookies/realTimeCookies';
import { CookieStorageManager } from '~/services/CookieStorageManager';
import { StorageManager } from '~/services/LocalStorageManager';

import { useEffect, useState } from 'react';
import LogOutButton from '~/components/widgets/dashboard/logout';
import { apiCookieFinder } from '~/utils/APICookieFinder';
import { deleteAllCookies } from './dashboard.logout';
import { sessionVerificator } from '~/utils/SessionVerificator';


export async function loader({
    request,
  }: LoaderFunctionArgs) {
      const cookies = request.headers.get("Cookie")
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
      let loadRealTime : RealTimeData | SingleRealTimeSynchronizedCookie | boolean = await CookieStorageManager.getRealTime(location, request);
    
      if(!loadRealTime){
        console.info("REALTIME: MAKING API CALL")
        loadRealTime  = defaultRealTime!;
      
        //SYNC COOKIES WITH LOCAL STORAGE
        updateStorage = true;
        const coords : string = `${location.lat},${location.lon}`;
        loadRealTime = await getRealTimeWeather(coords, request);
      }
      else{
        console.log("REALTIME: API CALL AVOIDED")
      }
      return {realTime: loadRealTime, updateStorage: updateStorage, location: location};
    
  };


const ReaLtimeLocation = () => {
  const navigate = useNavigate();
  const [realTimeForecast, setRealTimeForecast]= useState<any | RealTimeData | undefined>(useLoaderData<typeof loader>());
  const [parsedRealTime, setParsedRealTime] =useState<RealTimeData | null>(null); //parsedRealTime = realTimeForecast as RealTimeData;
  const [currentWeather, setCurrentWeather] =useState<number | null>(null); //  const currentWeather: number = parsedRealTime?.data?.values?.temperature;
  const [loadedFromLocalStorage, setLoadedFromLocalStorage] = useState<boolean>(false);
  const [locationName, setLocationName] = useState<string>("");


  useEffect(() => {
    const readedData = realTimeForecast?.realTime;
    if(!readedData){
      navigate("/dashboard");
      return;
    };
    setLocationName(realTimeForecast?.location ? realTimeForecast?.location?.name : "Unknoun Location") 

    if (isSingleRealTimeSynchronizedCookie(readedData) && !loadedFromLocalStorage){
      console.log("REAL TIIME: LOAD FROM LOCAL")
      const setData = async()=>{
        setRealTimeForecast(
          {...realTimeForecast,
            realTime: await StorageManager.getRealTimeDataFromLocalStorage(readedData.location)  
          }
        )  
        setLoadedFromLocalStorage(true);
      }
      setData();
      return;
    }

    if(isRealTimeData(readedData)){
      console.log("IS REAL TIME DATA")
      setParsedRealTime(readedData);
      setCurrentWeather(readedData?.data?.values?.temperature);
      return;
    }

  },[realTimeForecast]);


  useEffect( () => {
    const localStorageFlag = realTimeForecast?.updateStorage;
    if(!parsedRealTime || loadedFromLocalStorage) return;
    if (isRealTimeData(parsedRealTime)){
      console.log("REAL TIME: SAVE IN LOCAL")
      const saveData = async()=>{
        await StorageManager.setRealTimeDataInLocalStorage(parsedRealTime, localStorageFlag);
      }
      saveData();
    }
  },[parsedRealTime]);


  return (
    realTimeForecast && isTomorrowError(realTimeForecast)
    ?
      <ErrorView/>
    :
     <div className={`${mainBg} lg:flex lg:flex-col lg:px-32`}>
      <div className='flex flex-col pb-4 pt-20'>
      <Link to="/dashboard" className={` ${buttonClass} absolute left-6 top-8`}>
        <FaMap className={`
          text-blue/80 dark:text-themeWhite/80 w-11 h-11  opacity-60 p-2`}
        ></FaMap>
      </Link>
        <div className="text-themeBlack/80 dark:text-themeWhite/80 text-center mt-8 text-2xl font-bold">
            {locationName}
        </div>
            <div className="text-themeBlack dark:text-themeWhite p-2 text-center text-6xl ">
            {Math.round(currentWeather ?? 0.0)}°C <br/>
        </div>
      </div>
      <Outlet/>
    </div>

    
  );
};

export default ReaLtimeLocation;

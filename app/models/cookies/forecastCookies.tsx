import { SessionLocation, TomorrowLocation } from "../tomorrow/WeatherLocation";


// FORECAST COOKIES
export type SingleForcastSynchronizedCookie = {
    location: TomorrowLocation;
    time: string;
    // Add any other session data you need
  };
  
  export type CookieAllForecastsInLocalStorage ={
    forecasts: SingleForcastSynchronizedCookie[];
  }
  
export const isSingleForcastSynchronizedCookie = (obj: any): obj is SingleForcastSynchronizedCookie => {
    return (
      obj &&
      typeof obj === 'object' &&
      'location' in obj &&
      'time' in obj &&
      typeof obj.location === 'object' &&
      'lat' in obj.location &&
      'lon' in obj.location &&
      typeof obj.time === 'string'
      // Add any other type checks you need for additional properties
    );
  };


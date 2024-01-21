import { SessionLocation, TomorrowLocation } from "../tomorrow/WeatherLocation";


// REAL TIME COOKIES
export type SingleRealTimeSynchronizedCookie = {
    location: TomorrowLocation;
    time: string;
};
  
export type CookieAllRealTimesInLocalStorage ={
  realTimes: SingleRealTimeSynchronizedCookie[];
}
  
export const isSingleRealTimeSynchronizedCookie = (obj: any): obj is SingleRealTimeSynchronizedCookie => {
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


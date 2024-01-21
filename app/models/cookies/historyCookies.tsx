import {  TomorrowLocation } from "../tomorrow/WeatherLocation";

// REAL TIME COOKIES
export type SingleHistorySynchronizedCookie = {
    location: TomorrowLocation;
    time: string;
};
  
export type CookieAllHistoriesInLocalStorage ={
  histories: SingleHistorySynchronizedCookie[];
}
  
export const isSingleHistorySynchronizedCookie = (obj: any): obj is SingleHistorySynchronizedCookie => {
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


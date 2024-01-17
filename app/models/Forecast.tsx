import { WeatherLocation } from "./WeatherLocation";
import { MinutelyItem } from "./WeatherMinutely";
import { HourlyItem } from "./WeatherHourly";
import { DailyItem } from "./WeatherDaily";

export interface ForecastWeatherData {
    timelines:{
        minutely: MinutelyItem[];
        hourly: HourlyItem[];
        daily: DailyItem[];
    },
    location: WeatherLocation;
}

export function isForecastWeatherData(obj: any): obj is ForecastWeatherData {
    return (
        'timelines' in obj &&
        typeof obj.timelines === 'object' &&
        'minutely' in obj.timelines &&
        Array.isArray(obj.timelines.minutely) &&
        'hourly' in obj.timelines &&
        Array.isArray(obj.timelines.hourly) &&
        'daily' in obj.timelines &&
        Array.isArray(obj.timelines.daily) &&
        'location' in obj &&
        typeof obj.location === 'object'
        // Add additional checks if necessary based on the actual types of WeatherLocation, MinutelyItem, HourlyItem, DailyItem
    );
}
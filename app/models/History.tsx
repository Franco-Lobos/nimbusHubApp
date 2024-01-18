import { WeatherLocation } from "./WeatherLocation";
import { MinutelyItem } from "./WeatherMinutely";
import { HourlyItem } from "./WeatherHourly";
import { DailyItem } from "./WeatherDaily";

export interface HistoryData {
    timelines:{
        hourly: HourlyItem[];
        daily: DailyItem[];
    },
    location: WeatherLocation;
}

export function isHistoryData(obj: any): obj is HistoryData {
    return (
        'timelines' in obj &&
        typeof obj.timelines === 'object' &&
        'hourly' in obj.timelines &&
        Array.isArray(obj.timelines.hourly) &&
        'daily' in obj.timelines &&
        Array.isArray(obj.timelines.daily) &&
        'location' in obj &&
        typeof obj.location === 'object'
        // Add additional checks if necessary based on the actual types of WeatherLocation, MinutelyItem, HourlyItem, DailyItem
    );
}
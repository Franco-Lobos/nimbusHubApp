import { TomorrowLocation, SessionLocation, isTomorrowLocation } from "./WeatherLocation";
import { MinutelyItem, isMinutelyItem } from "./WeatherMinutely";
import {isSessionLocation} from "./WeatherLocation";
export interface RealTimeData {
    data: MinutelyItem;
    location: TomorrowLocation;
}

export function isRealTimeData(obj: any): obj is RealTimeData {
    return (
        'data' in obj &&
        isMinutelyItem(obj.data) && // Check if 'data' is of type MinutelyItem
        'location' in obj &&
        isTomorrowLocation(obj.location) // Check if 'location' is of type WeatherLocation
    );
}
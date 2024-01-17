export interface MinutelyValues {
    cloudBase: number;
    cloudCeiling: number;
    cloudCover: number;
    dewPoint: number;
    freezingRainIntensity: number;
    humidity: number;
    precipitationProbability: number;
    pressureSurfaceLevel: number;
    rainIntensity: number;
    sleetIntensity: number;
    snowIntensity: number;
    temperature: number;
    temperatureApparent: number;
    uvHealthConcern: number;
    uvIndex: number;
    visibility: number;
    weatherCode: number;
    windDirection: number;
    windGust: number;
    windSpeed: number;
  }
  
export interface MinutelyItem {
  time: string; // You might want to use a specific date/time type
  values: MinutelyValues;
}
  

// Type guard for MinutelyValues
export function isMinutelyValues(obj: any): obj is MinutelyValues {
  return (
      'cloudBase' in obj &&
      'cloudCeiling' in obj &&
      'cloudCover' in obj &&
      'dewPoint' in obj &&
      'freezingRainIntensity' in obj &&
      'humidity' in obj &&
      'precipitationProbability' in obj &&
      'pressureSurfaceLevel' in obj &&
      'rainIntensity' in obj &&
      'sleetIntensity' in obj &&
      'snowIntensity' in obj &&
      'temperature' in obj &&
      'temperatureApparent' in obj &&
      'uvHealthConcern' in obj &&
      'uvIndex' in obj &&
      'visibility' in obj &&
      'weatherCode' in obj &&
      'windDirection' in obj &&
      'windGust' in obj &&
      'windSpeed' in obj
  );
}

// Type guard for MinutelyItem
export function isMinutelyItem(obj: any): obj is MinutelyItem {
  return (
      'time' in obj &&
      typeof obj.time === 'string' &&
      'values' in obj &&
      isMinutelyValues(obj.values) // Check if 'values' is of type MinutelyValues
  );
}
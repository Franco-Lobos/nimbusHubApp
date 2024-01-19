export interface HourlyValues {
  // cloudBase: number;
  // cloudCeiling: number;
  // cloudCover: number;
  // dewPoint: number;
  // evapotranspiration: number;
  // freezingRainIntensity: number;
  // humidity: number;
  // iceAccumulation: number;
  // iceAccumulationLwe: number;
  // precipitationProbability: number;
  // pressureSurfaceLevel: number;
  // rainAccumulation: number;
  // rainAccumulationLwe: number;
  // rainIntensity: number;
  // sleetAccumulation: number;
  // sleetAccumulationLwe: number;
  // sleetIntensity: number;
  // snowAccumulation: number;
  // snowAccumulationLwe: number;
  // snowDepth: number;
  // snowIntensity: number;
  temperature: number;
  temperatureApparent: number;
  // uvHealthConcern: number;
  // uvIndex: number;
  // visibility: number;
  weatherCode: number;
  // windDirection: number;
  // windGust: number;
  // windSpeed: number;
}
  
export interface HourlyItem {
    time: string; // You might want to use a specific date/time type
    values: HourlyValues;
}


export function isHourlyValues(obj: any): obj is HourlyValues {
  return (
      'cloudBase' in obj &&
      'cloudCeiling' in obj &&
      'cloudCover' in obj &&
      'dewPoint' in obj &&
      'evapotranspiration' in obj &&
      'freezingRainIntensity' in obj &&
      'humidity' in obj &&
      'iceAccumulation' in obj &&
      'iceAccumulationLwe' in obj &&
      'precipitationProbability' in obj &&
      'pressureSurfaceLevel' in obj &&
      'rainAccumulation' in obj &&
      'rainAccumulationLwe' in obj &&
      'rainIntensity' in obj &&
      'sleetAccumulation' in obj &&
      'sleetAccumulationLwe' in obj &&
      'sleetIntensity' in obj &&
      'snowAccumulation' in obj &&
      'snowAccumulationLwe' in obj &&
      'snowDepth' in obj &&
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


// Type guard for HourlyItem
export function isHourlyItem(obj: any): obj is HourlyItem {
  return (
      'time' in obj &&
      typeof obj.time === 'string' &&
      'values' in obj &&
      isHourlyValues(obj.values) // Check if 'values' is of type HourlyValues
  );
}
  
export interface SessionLocation {
    lat: number;
    lon: number;
    name: string;
    type: string;
  }
  
export interface TomorrowLocation {
  lat: number;
  lon: number;
}

export function isSessionLocation(obj: any): obj is SessionLocation {
  return (
      'lat' in obj &&
      'lon' in obj &&
      'name' in obj &&
      'type' in obj &&
      typeof obj.lat === 'number' &&
      typeof obj.lon === 'number' &&
      typeof obj.name === 'string' &&
      typeof obj.type === 'string'
  );
}

export function isTomorrowLocation(obj: any): obj is TomorrowLocation {
  return (
      'lat' in obj &&
      'lon' in obj &&
      typeof obj.lat === 'number' &&
      typeof obj.lon === 'number'
  );
}

export const areLocationsEqual = (
  location1: SessionLocation |TomorrowLocation,
  location2: SessionLocation|TomorrowLocation
): boolean => {
  return (location1.lat).toFixed(4) ===  (location2.lat).toFixed(4) &&  (location1.lon).toFixed(4) ===  (location2.lon).toFixed(4);
};
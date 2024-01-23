export interface WeatherSDK {
    auth(apiKey: string): Promise<void>;
    weatherForecast(options: { location: string }): Promise<{ data: any }>; // Adjust 'any' based on the actual response structure
  }
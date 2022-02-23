/**
 * There are 2 types of weather forecast search available in Openweathermap.org among other types of search
 * First type - is 16 Days search - Available to paid subscriptions
 * Second type - Next 3 hours search - Available to free subscriptions
 * I only could create contracts for second option as the only available option here
 */
export interface WeatherItem {
  id: number;
  main: string;
  description: string;
  icon: string;
};

export interface HourlyWeatherForecastResponse {
  coord: {
    lat: number;
    lon: number;
  };
  weather: WeatherItem[];
  main: {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    humidity: number;
  };
  visibility: number;
  wind: {
    speed: number;
    deg: number;
  };
  // Other properties can be added here later
};
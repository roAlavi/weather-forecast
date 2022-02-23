import { Injectable } from '@nestjs/common';
import { WeatherForecastOutput } from '../graphql.schema';
import { openWeatherProvider } from '../provider/openweather';

@Injectable()
export class WeatherService {
  async getTempByLocation(lat: number, lon: number): Promise<WeatherForecastOutput> {
    // Here we should get response from Weather API which has to be done later
    // Just a sample validator here to return data for London only
    const data = await openWeatherProvider.getHourlyWeather(lat, lon);

    return {
      description: data.weather[0].description,
    };
  }
}

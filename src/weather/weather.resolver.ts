import { Query, Resolver } from '@nestjs/graphql';
import { WeatherForecastInput, WeatherForecastOutput } from '../graphql.schema';
import { WeatherService } from './weather.service';

@Resolver('Weather')
export class WeatherResolver {
  constructor(private readonly weatherService: WeatherService) {}

  @Query('weather')
  async weather(input: WeatherForecastInput): Promise<WeatherForecastOutput> {
    const myPromise = new Promise<WeatherForecastOutput>((resolve, reject) => {
      setTimeout(() => {
        resolve(this.weatherService.getTempByLocation(input.lat, input.lon, input.date));
      }, 300);
    });
    return this.weatherService.getTempByLocation(input.lat, input.lon, input.date);
  }
}
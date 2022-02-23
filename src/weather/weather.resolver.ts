import { Args, Query, Resolver } from '@nestjs/graphql';
import { WeatherForecastInput, WeatherForecastOutput } from '../graphql.schema';
import { WeatherService } from './weather.service';

@Resolver('Weather')
export class WeatherResolver {
  constructor(private readonly weatherService: WeatherService) {}

  @Query(returns => WeatherForecastOutput)
  async weather(@Args('input') input: WeatherForecastInput): Promise<WeatherForecastOutput> {
    return this.weatherService.getTempByLocation(input.lat, input.lon, input.date);
  }
}
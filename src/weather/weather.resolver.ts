import { Args, Query, Resolver } from '@nestjs/graphql';
import { WeatherForecastInput, WeatherForecastOutput } from '../graphql.schema';
import { WeatherService } from './weather.service';

/**
 * Resolver class for weather query to request data
 */
@Resolver('Weather')
export class WeatherResolver {
  constructor(private readonly weatherService: WeatherService) {}

  // Added to silence ts-lint complaining for `returns`
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  @Query(returns => WeatherForecastOutput)
  async weather(@Args('input') input: WeatherForecastInput): Promise<WeatherForecastOutput> {
    return this.weatherService.getTempByLocation(input.lat, input.lon, input.date);
  }
}
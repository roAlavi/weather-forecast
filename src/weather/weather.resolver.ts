import { Args, Query, Resolver } from '@nestjs/graphql';
import { ApolloError } from 'apollo-server-express';
import { differenceInDays } from 'date-fns';
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
    // In resolver we check if date is in correct format
    const numOfDays = differenceInDays(new Date(input.date), Date.now());
    if (numOfDays >= 16 || numOfDays < 0) {
      throw new ApolloError('Input date must be within next 16 days.', 'INVALID_OPERATION');
    }
    return this.weatherService.getTempByLocation(input.lat, input.lon);
  }
}
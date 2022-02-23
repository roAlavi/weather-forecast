import { Injectable } from '@nestjs/common';
import { WeatherForecastOutput } from '../graphql.schema';
import constants from './weather.constants';

@Injectable()
export class WeatherService {
  getTempByLocation(lat: number, lon: number, date: Date): WeatherForecastOutput {
    // Here we should get response from Weather API which has to be done later
    // Just a sample validator here to return data for London only
    if ((lat < constants.minLatittude) || (lat > constants.maxLatittude)
      || (lon < constants.minLongitude) || (lat > constants.maxLongitude)) {
      return {
        temp: -1,
      };
    }
    return {
      temp: 23,
    };
  }
}

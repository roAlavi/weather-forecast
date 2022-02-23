import { Injectable } from '@nestjs/common';
import { WeatherForecastOutput } from '../graphql.schema';
import constants from './weather.constants';

const { minLatittude, maxLatittude, minLongitude, maxLongitude } = constants;
@Injectable()
export class WeatherService {
  getTempByLocation(lat: number, lon: number, date: Date): WeatherForecastOutput {
    // Here we should get response from Weather API which has to be done later
    // Just a sample validator here to return data for London only
    if ((lat < minLatittude) || (lat > maxLatittude)
      || (lon < minLongitude) || (lon > maxLongitude)) {
      return {
        description: 'sky is windy',
      };
    }
    return {
      description: 'sky is clear',
    };
  }
}

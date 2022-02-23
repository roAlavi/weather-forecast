import { Injectable } from '@nestjs/common';
import { WeatherForecastOutput } from '../graphql.schema';
import { OpenWeatherProvider } from '../provider/openweather';
import constants from './weather.constants';

const { minLatittude, maxLatittude, minLongitude, maxLongitude } = constants;
@Injectable()
export class WeatherService {
  getTempByLocation(lat: number, lon: number, date: Date): WeatherForecastOutput {
    // Here we should get response from Weather API which has to be done later
    // Just a sample validator here to return data for London only
    const provider = new OpenWeatherProvider();
    if ((lat < minLatittude) || (lat > maxLatittude)
      || (lon < minLongitude) || (lon > maxLongitude)) {
      return {
        description: provider.getUrl(),
      };
    }
    return {
      description: 'sky is clear',
    };
  }
}

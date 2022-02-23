import { httpClient } from '../common/util/httpClient';
import { config } from '../common/config';


export class OpenWeatherProvider {
  getUrl(): string {
    return config.provider.url;
  }
}
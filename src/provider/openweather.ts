import { httpClient } from '../common/util/httpClient';
import { config } from '../common/config';
import { HourlyWeatherForecastResponse } from './contracts';


class OpenWeatherProvider {
  async getHourlyWeather(lat: number, lon: number): Promise<HourlyWeatherForecastResponse> {
    const params = {
      lat: lat.toFixed(10),
      lon: lon.toFixed(10),
      appid: config.provider.apiKey,
    };
    httpClient.setBaseUrl(config.provider.url);
    const { data } = await httpClient.get<HourlyWeatherForecastResponse>('', { params });
    return data;
  }
}

export const openWeatherProvider = new OpenWeatherProvider();
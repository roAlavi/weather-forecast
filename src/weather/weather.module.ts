import { Module } from '@nestjs/common';
import { WeatherResolver } from './weather.resolver';
import { WeatherService } from './weather.service';

@Module({
  imports: [],
  providers: [WeatherService, WeatherResolver],
})
export class WeatherModule {}



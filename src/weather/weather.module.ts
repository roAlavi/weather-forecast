import { Module } from '@nestjs/common';
import { WeatherResolver } from './weather.resolver';
import { WeatherService } from './weather.service';

// NestJS Module to use Service and GraphQL resolver as providers
@Module({
  imports: [],
  providers: [WeatherService, WeatherResolver],
})
export class WeatherModule {}



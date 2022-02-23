import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { WeatherModule } from './weather/weather.module';
@Module({
  imports: [
    WeatherModule,
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      typePaths: ['./**/*.graphql'],
      installSubscriptionHandlers: true,
      plugins: [ require('./common/plugins/logging.plugin') ],
    }),
  ],
})
export class AppModule {}

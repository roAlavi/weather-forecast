import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { WeatherModule } from './weather/weather.module';
import { LoggingPlugin } from './common/plugins/logging.plugin';

const loggingPlugin = new LoggingPlugin();
@Module({
  imports: [
    WeatherModule,
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      typePaths: ['./**/*.graphql'],
      installSubscriptionHandlers: true,
      plugins: [ loggingPlugin ],
    }),
  ],
})
export class AppModule {}

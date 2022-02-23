import { Plugin } from '@nestjs/apollo';
import {
  ApolloServerPlugin,
  GraphQLRequestListener,
} from 'apollo-server-plugin-base';
import debug from 'debug';

const logger = debug('weather:logs');
@Plugin()
export class LoggingPlugin implements ApolloServerPlugin {
  async requestDidStart(): Promise<GraphQLRequestListener> {
    logger('Received request')
    return {
      async willSendResponse() {
        logger('Will send response');
      },
    };
  }
}

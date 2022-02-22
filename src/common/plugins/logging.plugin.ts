import { Plugin } from '@nestjs/apollo';
import {
  ApolloServerPlugin,
  GraphQLRequestListener,
} from 'apollo-server-plugin-base';
import * as debug from 'debug';

const logger = debug('logs');
@Plugin()
export class LoggingPlugin implements ApolloServerPlugin {
  async requestDidStart(): Promise<GraphQLRequestListener> {
    logger.log('Received request')
    return {
      async willSendResponse() {
        logger.log('Will send response');
      },
    };
  }
}

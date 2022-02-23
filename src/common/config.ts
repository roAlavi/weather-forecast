/**
 * @fileoverview
 * This file will be used to get config data from env variables and pass it to other parts
 */

import * as dotenv from 'dotenv';

dotenv.config();

export const config = {
  provider: {
    url: process.env.SERVICE_URL,
    apiKey: process.env.API_KEY,
  } 
};
import * as dotenv from 'dotenv';

dotenv.config();

export const config = {
  provider: {
    url: process.env.SERVICE_URL,
    apiKey: process.env.API_KEY,
  } 
};
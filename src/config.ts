import * as dotenv from 'dotenv';
import { cleanEnv, num, str, bool } from 'envalid';

dotenv.config();

export default cleanEnv(process.env, {
  MORALIS_API_KEY: str({
    desc: 'Your moralis Api key (keep this secret)',
    default: 'NnWKiI0M55PIX9d6NA4CQbTsmhBelpRuTdh2UJQcEWl6kSgUdlPJeUNEeFu8jBSJ'
  }),

  PORT: num({
    desc: 'Default port where parse-server will run on',
    default: 1337,
  }),
  DATABASE_URI: str({
    desc: 'URI to your MongoDB database',
    devDefault: 'mongodb+srv://testUser:87007541agiDev@bot.uxhtr.mongodb.net/?retryWrites=true&w=majority',
  }),
  CLOUD_PATH: str({
    desc: 'Path to your cloud code',
    default: './build/cloud/main.js',
  }),
  MASTER_KEY: str({
    desc: 'A secret key of your choice (keep this secret)',
    default: 'yLdsDGXThmcWro1z4ZpEWHEXxGIN8UkN6VDgGrNh'
  }),
  APPLICATION_ID: str({
    desc: 'An id for your app, can be anything you want',
    default: 'gLCfRQCzBK8r0GkJCMuU6NvJ0q6S47J7kzfu4eLI',
  }),
  SERVER_URL: str({
    desc: 'Reference to your server URL. Replace this when your app is hosted',
    devDefault: 'https://heroku-moralis-server.herokuapp.com/server',
  }),

  REDIS_CONNECTION_STRING: str({
    desc: 'Connection string for your redis instance in the format of redis://<host>:<port> or redis://<username>:<password>@<host>:<port>',
    devDefault: 'redis://moralis-bot:sRFsgsdqq1$2ov@redis-11491.c17.us-east-1-4.ec2.cloud.redislabs.com:11491',
  }),
  RATE_LIMIT_TTL: num({
    desc: 'Rate limit window in seconds',
    default: 30,
  }),
  RATE_LIMIT_AUTHENTICATED: num({
    desc: 'Rate limit requests per window for authenticated users',
    default: 50,
  }),
  RATE_LIMIT_ANONYMOUS: num({
    desc: 'Rate limit requests per window for anonymous users',
    default: 20,
  }),
  USE_STREAMS: bool({
    desc: 'Enable streams sync',
    default: true,
  }),
  STREAMS_WEBHOOK_URL: str({
    desc: 'Webhook url for streams sync',
    default: '/streams-webhook',
  }),
});

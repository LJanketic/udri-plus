import joi from 'joi';

import server, { ServerConfig } from './server';
import database, { DbConfig } from './database';

export interface Config {
  server: ServerConfig;
  database: DbConfig;
}

const schema = joi.object({
  server: joi.object(),
  database: joi.object(),
});

const createConfig = (env: any) => ({
  server: server(env),
  database: database(env),
});

export default (env: any): Config => joi.attempt(createConfig(env), schema);

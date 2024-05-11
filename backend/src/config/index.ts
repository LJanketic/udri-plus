import joi from 'joi';

import server, { ServerConfig } from './server';

export interface Config {
  server: ServerConfig;
}

const schema = joi.object({
  server: joi.object(),
});

const createConfig = (env: any) => ({
  server: server(env),
});

export default (env: any): Config => joi.attempt(createConfig(env), schema);

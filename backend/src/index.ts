import http from 'http';
import express from 'express';
import * as dotenv from 'dotenv';

import config, { Config } from './config';

const { server: serverConfig }: Config = config(process.env);

dotenv.config();

export const DependencyInjection = {} as {
  server: http.Server;
};

const app = express();
const port = serverConfig.port ?? '3000';

export const init = (async () => {
  DependencyInjection.server = app.listen(port, () => {
    console.log(`Application running on: http://localhost:${port}`);
  });
})();

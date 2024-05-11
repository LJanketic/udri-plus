import express from 'express';
import * as dotenv from 'dotenv';
import {
  DependencyInjection,
  initializeDependencyInjection,
} from './config/dependency-injection/dependency-injection';
import config, { Config } from './config';
import { RequestContext } from '@mikro-orm/mongodb';

const { server: serverConfig }: Config = config(process.env);

dotenv.config();

const app = express();
const port = serverConfig.port ?? '3000';

export const init = async (): Promise<void> => {
  await initializeDependencyInjection();

  DependencyInjection.em = DependencyInjection.orm.em;
  app.use(express.json());
  app.use((_req, _res, next) =>
    RequestContext.create(DependencyInjection.orm.em, next)
  );
  DependencyInjection.server = app.listen(port, () => {
    console.log(`Application running on: http://localhost:${port}`);
  });
};

init();

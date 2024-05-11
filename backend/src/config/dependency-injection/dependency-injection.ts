import http from 'http';
import express from 'express';
import { MikroORM, EntityManager, RequestContext } from '@mikro-orm/mongodb';
import mikroOrmConfig from '../mikro-orm/mikro-orm.config';

export const DependencyInjection = {} as {
  server: http.Server;
  orm: MikroORM;
  em: EntityManager;
};

const initializeDatabase = async (): Promise<void> => {
  DependencyInjection.orm = await MikroORM.init(mikroOrmConfig);
};

const setupMiddleware = (app: express.Application): void => {
  DependencyInjection.em = DependencyInjection.orm.em;
  app.use(express.json());
  app.use((_req, _res, next) =>
    RequestContext.create(DependencyInjection.orm.em, next)
  );
};

export const initializeDependencyInjection = async (
  app: express.Application
): Promise<void> => {
  try {
    await initializeDatabase();
    console.log('Database connected successfully');
    setupMiddleware(app);
    console.log('Middleware setup completed');
  } catch (error) {
    console.error('Failed to initialize database/setup middleware:', error);
  }
};

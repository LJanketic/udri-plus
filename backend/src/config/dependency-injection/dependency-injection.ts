import http from 'http';
import express from 'express';
import {
  MikroORM,
  EntityManager,
  RequestContext,
  EntityRepository,
} from '@mikro-orm/mongodb';
import mikroOrmConfig from '../mikro-orm/mikro-orm.config';
import { UserEntity } from '../../entities';

export const DependencyInjection = {} as {
  server: http.Server;
  orm: MikroORM;
  em: EntityManager;
  users: EntityRepository<UserEntity>;
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

const setupRepositories = (): void => {
  DependencyInjection.users =
    DependencyInjection.orm.em.getRepository(UserEntity);
};

export const initializeDependencyInjection = async (
  app: express.Application
): Promise<void> => {
  try {
    await initializeDatabase();
    console.log('Database setup completed successfully');
    setupMiddleware(app);
    console.log('Middleware setup completed successfully');
    setupRepositories();
    console.log('Repository setup completed successfully');
  } catch (error) {
    console.error('Application initialization failed:', error);
  }
};

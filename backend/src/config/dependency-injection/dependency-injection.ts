import http from 'http';
import express from 'express';
import {
  MikroORM,
  EntityManager,
  RequestContext,
  EntityRepository,
} from '@mikro-orm/postgresql';
import mikroOrmConfig from '../mikro-orm/mikro-orm.config';
import { User, Event, EventDetails, Friend, Vote } from '../../entities';

export const DependencyInjection = {} as {
  server: http.Server;
  orm: MikroORM;
  em: EntityManager;
  users: EntityRepository<User>;
  events: EntityRepository<Event>;
  details: EntityRepository<EventDetails>;
  friends: EntityRepository<Friend>;
  votes: EntityRepository<Vote>;
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
  DependencyInjection.users = DependencyInjection.orm.em.getRepository(User);
  DependencyInjection.events = DependencyInjection.orm.em.getRepository(Event);
  DependencyInjection.details =
    DependencyInjection.orm.em.getRepository(EventDetails);
  DependencyInjection.friends =
    DependencyInjection.orm.em.getRepository(Friend);
  DependencyInjection.votes = DependencyInjection.orm.em.getRepository(Vote);
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

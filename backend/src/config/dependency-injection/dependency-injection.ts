import http from 'http';
import mikroOrmConfig from '../mikro-orm/mikro-orm.config';
import { MikroORM, EntityManager } from '@mikro-orm/mongodb';

export const DependencyInjection = {} as {
  server: http.Server;
  orm: MikroORM;
  em: EntityManager;
};

const initializeDatabase = async (): Promise<void> => {
  DependencyInjection.orm = await MikroORM.init(mikroOrmConfig);
};

export const initializeDependencyInjection = async (): Promise<void> => {
  try {
    await initializeDatabase();
    console.log('Database connected successfully');
  } catch (error) {
    console.error('Failed to initialize database:', error);
  }
};

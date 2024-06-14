import { defineConfig } from '@mikro-orm/postgresql';
import { Migrator } from '@mikro-orm/migrations';
import {
  BaseEntity,
  User,
  Event,
  EventDetails,
  Vote,
  Friend,
} from '../../entities';
import config, { Config } from '../../config';

const { database }: Config = config(process.env);

export default defineConfig({
  extensions: [Migrator],
  entities: [BaseEntity, User, Event, EventDetails, Vote, Friend],
  dbName: database.dbName,
  user: database.dbUser,
  password: database.dbPwd,
  host: database.dbHost,
  port: database.dbPort,
  debug: true,
  migrations: {
    path: './src/migrations',
  },
});

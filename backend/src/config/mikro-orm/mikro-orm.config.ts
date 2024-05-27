import { defineConfig } from '@mikro-orm/postgresql';
import {
  BaseEntity,
  UserEntity,
  EventEntity,
  EventDetailEntity,
  VoteEntity,
  FriendEntity,
} from '../../entities';
import config, { Config } from '../../config';

const { database }: Config = config(process.env);

export default defineConfig({
  entities: [
    BaseEntity,
    UserEntity,
    EventEntity,
    EventDetailEntity,
    VoteEntity,
    FriendEntity,
  ],
  dbName: database.dbName,
  user: database.dbUser,
  password: database.dbPwd,
  host: database.dbHost,
  port: database.dbPort,
  debug: true,
});

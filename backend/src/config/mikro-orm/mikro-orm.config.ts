import { defineConfig } from '@mikro-orm/mongodb';
import { MongoHighlighter } from '@mikro-orm/mongo-highlighter';
import { BaseEntity, UserEntity } from '../../entities';
import config, { Config } from '../../config';

const { database }: Config = config(process.env);

export default defineConfig({
  entities: [BaseEntity, UserEntity],
  dbName: database.mongoDbName,
  highlighter: new MongoHighlighter(),
  debug: true,
});

import joi from 'joi';
import * as dotenv from 'dotenv';
dotenv.config();

export interface DbConfig {
  mongoDbName: string;
}

const schema = joi.object({
  mongoDbName: joi.string().required(),
});

const createConfig = (env: any): DbConfig => ({
  mongoDbName: env.MONGO_DB_NAME,
});

export default (env: any): DbConfig => joi.attempt(createConfig(env), schema);

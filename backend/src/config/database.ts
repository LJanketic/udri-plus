import joi from 'joi';
import * as dotenv from 'dotenv';
dotenv.config();

export interface DbConfig {
  dbName: string;
  dbUser: string;
  dbPwd: string;
  dbHost: string;
  dbPort: number;
}

const schema = joi.object({
  dbName: joi.string().required(),
  dbUser: joi.string().required(),
  dbPwd: joi.string().required(),
  dbHost: joi.string().required(),
  dbPort: joi.number().required(),
});

const createConfig = (env: any): DbConfig => ({
  dbName: env.DB_NAME,
  dbUser: env.DB_USER,
  dbPwd: env.DB_PWD,
  dbHost: env.DB_HOST,
  dbPort: env.DB_PORT,
});

export default (env: any): DbConfig => joi.attempt(createConfig(env), schema);

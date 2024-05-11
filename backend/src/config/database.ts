import joi from 'joi';

export interface DbConfig {
  mongoUrl: string;
  mongoDbName: string;
}

const schema = joi.object({
  mongoUrl: joi.string().required(),
  mongoDbName: joi.string().required(),
});

const createConfig = (env: any): DbConfig => ({
  mongoUrl: env.MONGO_URL,
  mongoDbName: env.MONGO_DB_NAME,
});

export default (env: any): DbConfig => joi.attempt(createConfig(env), schema);

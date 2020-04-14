//@ts-nocheck
/* eslint-disable */
require('dotenv').config();

const { DATABASE_URL, DB_HOST, DB_PORT, DB_USERNAME, DB_PASSWORD, DB_NAME, IA_ENV } = process.env;
const envs = ['development', 'staging', 'production'];

const useUrl = envs.includes(IA_ENV);

const options = useUrl
  ? { url: DATABASE_URL }
  : {
      host: DB_HOST,
      port: DB_PORT,
      username: DB_USERNAME,
      password: DB_PASSWORD,
      database: DB_NAME,
    };

module.exports = {
  ...options,
  type: 'postgres',
  synchronize: false,
  entities: ['src/modules/**/*.model.ts'],
  migrationsTableName: 'migrations',
  migrations: ['migrations/*.ts'],
  cli: {
    migrationsDir: 'migrations',
  },
};

//@ts-nocheck
/* eslint-disable */
require('dotenv').config();

const { DATABASE_URL, DB_HOST, DB_PORT, DB_USERNAME, DB_PASSWORD, DB_NAME, NODE_TLS_REJECT_UNAUTHORIZED } = process.env;

const options = Boolean(DATABASE_URL)
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
  ssl: NODE_TLS_REJECT_UNAUTHORIZED === '0',
  synchronize: false,
  entities: ['src/modules/**/*.model.ts'],
  migrationsTableName: 'migrations',
  migrations: ['migrations/*.ts'],
  cli: {
    migrationsDir: 'migrations',
  },
};

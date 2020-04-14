require('dotenv').config();
const BaseConfig = require('./core/utils')['Config'];
enum ENV {
  PORT = 'PORT',
  DB_USERNAME = 'DB_USERNAME',
  DB_PASSWORD = 'DB_PASSWORD',
  DB_NAME = 'DB_NAME',
  DB_HOST = 'DB_HOST',
}

declare namespace Config {
  export const getDatabaseConnectionString: (databaseName?: string) => string;
  export const getBoolean: (setting: ENV | string) => boolean;
  export const getString: (setting: ENV | string) => string;
  export const getNumber: (setting: ENV | string) => number;
}

(global as any).Config = (global as any).Config || new BaseConfig();
(global as any).ENV = (global as any).ENV || ENV;

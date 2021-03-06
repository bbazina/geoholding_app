require('dotenv').config();
import { Config as BaseConfig } from '../src/core/utils';
import { Client } from 'pg';

(async () => {
  try {
    const Config = new BaseConfig();
    const connectionString = Config.getDatabaseConnectionString('postgres');
    const client = new Client({
      connectionString,
      ssl: Config.getString('NODE_TLS_REJECT_UNAUTHORIZED') === '0',
    });
    const databaseName = connectionString.substring(connectionString.lastIndexOf('/') + 1);
    console.log(`Connecting to database: ${databaseName}`);
    await client.connect();
    console.log('Postgres client connected.');
    const result = await client.query(`SELECT 1 FROM pg_database WHERE datname='${databaseName}'`);
    if (result.rows.length === 0) {
      await client.query(`CREATE DATABASE ${databaseName} ENCODING 'UTF8';`);
      console.info(`Database created!`);
    } else {
      console.log('Database already exists, skipping...');
    }
    await client.end();
  } catch (err) {
    console.error(`Could not create database: ${err}`);
    process.exit(1);
  }
})();

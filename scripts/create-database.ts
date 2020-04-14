require('dotenv').config();
import { Config as BaseConfig } from '../src/core/utils';
import { Client } from 'pg';

(async () => {
  try {
    const Config = new BaseConfig();
    const client = new Client({
      connectionString: Config.getDatabaseConnectionString('postgres'),
    });
    const databaseName = process.env.DB_NAME || process.argv[2];
    console.log('Connecting to database: ' + databaseName);
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

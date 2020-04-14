require('dotenv').config();
import { Config as BaseConfig } from '../src/core/utils';
import { Client } from 'pg';

const query = `
do
$$
declare
  l_stmt text;
begin
  select 'truncate ' || string_agg(format('%I.%I', schemaname, tablename), ',')
    into l_stmt
  from pg_tables
  where schemaname in ('public');

  execute l_stmt;
end;
$$
`;

(async () => {
  try {
    const Config = new BaseConfig();
    const connectionString = Config.getDatabaseConnectionString();
    const client = new Client({
      connectionString,
      ssl: Config.getString('NODE_TLS_REJECT_UNAUTHORIZED') === '0',
    });
    const databaseName = connectionString.substring(connectionString.lastIndexOf('/') + 1);
    console.log(`Connecting to database: ${databaseName}`);
    await client.connect();
    console.log('Postgres client connected.');
    await client.query(query);
    console.info(`Database cleaned!`);
    await client.end();
  } catch (err) {
    console.error(`Could not create database: ${err}`);
    process.exit(1);
  }
})();

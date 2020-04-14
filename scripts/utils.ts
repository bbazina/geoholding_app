//@ts-nocheck
const createDatabaseConnectionString = (dbUser, dbPassword, dbEndpoint, dbName, dbPort = '5432') => {
  return `postgres://${dbUser}:${dbPassword}@${dbEndpoint}:${dbPort}/${dbName}`;
};

export const getDatabaseConnectionString = (databaseName = null) => {
  const { DB_USERNAME, DB_PASSWORD, DB_NAME, DB_HOST, DB_PORT } = process.env;
  return createDatabaseConnectionString(DB_USERNAME, DB_PASSWORD, DB_HOST, databaseName || DB_NAME, DB_PORT);
};

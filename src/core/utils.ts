export class Config {
  private readonly config: { [k: string]: string };

  constructor(config = process.env) {
    this.config = config;
  }
  public getBoolean(setting: string) {
    if (this.config === undefined) {
      throw new Error('Config is not initialized');
    }
    return Boolean(this.config[setting]);
  }

  public getString(setting: string) {
    if (this.config === undefined) {
      throw new Error('Config is not initialized');
    }
    return String(this.config[setting]);
  }

  public getNumber(setting: string) {
    if (this.config === undefined) {
      throw new Error('Config is not initialized');
    }
    return Number(this.config[setting]);
  }
  public getDatabaseConnectionString(databaseName: string | null = null) {
    const { DB_USERNAME, DB_PASSWORD, DB_NAME, DB_HOST, DB_PORT } = this.config;
    return this.createDatabaseConnectionString(DB_USERNAME, DB_PASSWORD, DB_HOST, databaseName || DB_NAME, DB_PORT);
  }

  private createDatabaseConnectionString(
    dbUser: string,
    dbPassword: string,
    dbEndpoint: string,
    dbName: string,
    dbPort = '5432'
  ) {
    return process.env.DATABASE_URL || `postgres://${dbUser}:${dbPassword}@${dbEndpoint}:${dbPort}/${dbName}`;
  }
}

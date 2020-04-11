import { createConnection } from 'typeorm';
export class Database {
  public static async createConnection() {
    const connection = await createConnection();
    return connection;
  }
}

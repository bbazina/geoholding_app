import { createConnection } from 'typeorm';
export class Database {
  public static async createConnection() {
    await createConnection();
  }
}

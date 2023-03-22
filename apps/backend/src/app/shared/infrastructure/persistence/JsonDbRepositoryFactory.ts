import { Config, JsonDB } from 'node-json-db';

export class JsonDbRepositoryFactory {
  private readonly db: JsonDB;

  constructor() {
    this.db = new JsonDB(new Config('DB.json', true, false, '/'));
  }

  static create(): JsonDB {
    return new JsonDB(new Config('DB.json', true, false, '/'));
  }

  getDb(): JsonDB {
    return this.db;
  }
}

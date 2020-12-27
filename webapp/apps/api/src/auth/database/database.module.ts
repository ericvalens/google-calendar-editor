import { Module } from '@nestjs/common';
import { MongoClient, Db, Logger } from 'mongodb';

const LOGGER_LEVEL = 'debug';
const DB_CONNECTION = 'DATABASE_CONNECTION';
const DB_CONNECTION_STRING = 'mongodb://db:27017';
const DB_NAME = 'gce';
const DB_USERS_COLLECTION = 'users';

@Module({
  providers: [
    {
      provide: DB_CONNECTION,
      useFactory: async (): Promise<Db> => {
        try {
          Logger.setLevel(LOGGER_LEVEL);

          const client = await MongoClient.connect(DB_CONNECTION_STRING, {
            useUnifiedTopology: true,
          });

          const db = client.db(DB_NAME);

          await db
            .collection(DB_USERS_COLLECTION)
            .createIndex({ email: 1 }, { unique: true, sparse: true });

          return db;
        } catch (e) {
          throw e;
        }
      },
    },
  ],
  exports: [DB_CONNECTION],
})
export class DatabaseModule {}

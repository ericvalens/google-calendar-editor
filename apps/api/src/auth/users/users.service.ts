import { Injectable, Inject, NotFoundException } from "@nestjs/common";
import { User } from "@webapp/api-interfaces";
import { Db } from "mongodb";

const DB_CONNECTION = "DATABASE_CONNECTION";
const DB_USERS_COLLECTION = "users";

@Injectable()
export class UsersService {
  constructor(
    @Inject(DB_CONNECTION)
    private db: Db
  ) {}

  async find(): Promise<User[]> {
    return await this.db.collection(DB_USERS_COLLECTION).find().toArray();
  }

  async findOne(id: string): Promise<User> {
    const response = await this.db
      .collection(DB_USERS_COLLECTION)
      .findOne({ id: id });
    return response;
  }

  async create(body: User): Promise<void> {
    await this.db.collection(DB_USERS_COLLECTION).insertOne(body);
  }

  async update(id: string, body: User): Promise<void> {
    await this.db
      .collection(DB_USERS_COLLECTION)
      .updateOne({ id: id }, { $set: { ...body } });
  }

  async delete(id: string): Promise<void> {
    const response = await this.db
      .collection(DB_USERS_COLLECTION)
      .deleteOne({ id: id });

    if (response.deletedCount === 0) {
      throw new NotFoundException();
    }
  }
}

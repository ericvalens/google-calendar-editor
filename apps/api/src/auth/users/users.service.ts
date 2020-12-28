import {
  Injectable,
  Inject,
  NotFoundException,
  BadRequestException,
} from '@nestjs/common';
import { User } from '@webapp/api-interfaces';
import { Db, ObjectID } from 'mongodb';

const DB_CONNECTION = 'DATABASE_CONNECTION';
const DB_USERS_COLLECTION = 'users';

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
    if (!ObjectID.isValid(id)) {
      throw new BadRequestException();
    }

    const response = await this.db.collection(DB_USERS_COLLECTION).findOne({
      _id: new ObjectID(id),
    });

    if (!response) {
      throw new NotFoundException();
    }

    return response;
  }

  async create(body: User): Promise<void> {
    await this.db.collection(DB_USERS_COLLECTION).insert(body);
  }

  async update(id: string, body: User): Promise<void> {
    if (!ObjectID.isValid(id)) {
      throw new BadRequestException();
    }

    await this.db.collection(DB_USERS_COLLECTION).updateOne(
      {
        _id: new ObjectID(id),
      },
      {
        $set: {
          ...body,
        },
      }
    );
  }

  async delete(id: string): Promise<void> {
    if (!ObjectID.isValid(id)) {
      throw new BadRequestException();
    }

    const response = await this.db.collection(DB_USERS_COLLECTION).deleteOne({
      _id: new ObjectID(id),
    });

    if (response.deletedCount === 0) {
      throw new NotFoundException();
    }
  }
}

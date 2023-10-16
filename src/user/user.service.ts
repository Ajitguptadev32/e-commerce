import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { CreateUserDto } from 'src/common/dtos/user.dto/create-user.dto';
import { Users, UsersDocument } from 'src/common/schemas/users.schema';
import { Model } from 'mongoose';

@Injectable()
export class UserService {
  constructor(
    @InjectModel(Users.name) private userModel: Model<UsersDocument>,
  ) {}

  async create(createUserDto: CreateUserDto) {
    const createUser = new this.userModel(CreateUserDto);
    let user = await createUser.save();
    return user;
  }
  async findAll() {
    return await this.userModel.find();
  }
}
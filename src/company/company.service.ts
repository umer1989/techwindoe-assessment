import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from './company.model';

@Injectable()
export class UsersService {
  constructor(@InjectModel('User') private readonly userModel: Model<User>) {}

  async create(companyname, ceo, address, inceptiondate): Promise<User> {
    const createUser = new this.userModel({
      companyname,
      ceo,
      address,
      inceptiondate,
    });
    return await createUser.save();
  }

  async getUsers(): Promise<User[]> {
    return await this.userModel.find().exec();
  }
  async findOne(companyId): Promise<User> {
    return await this.userModel.findOne({ _id: companyId }).exec();
  }

  async findByName(comapnyName): Promise<User[]> {
    return await this.userModel.find({
      companyname: new RegExp(comapnyName, 'i'),
    });
  }

  async getTeams(): Promise<User[]> {
    const teams = await this.userModel.aggregate([
      {
        $lookup: {
          from: 'teams',
          localField: '_id',
          foreignField: 'companyid',
          as: 'teams',
        },
      },
      {
        $project: {
          __v: 0,
          'teams.__v': 0,
        },
      },
    ]);
    return teams;
  }
}

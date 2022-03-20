import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Team } from './team.model';

@Injectable()
export class TeamService {
  constructor(@InjectModel('Team') private readonly teamModel: Model<Team>) {}
  async create(teamlead, companyid): Promise<Team> {
    const createUser = new this.teamModel({
      teamlead,
      companyid,
    });
    return await createUser.save();
  }

  async getTeams(): Promise<Team[]> {
    const teams = await this.teamModel.find().exec();
    return teams;
  }
}

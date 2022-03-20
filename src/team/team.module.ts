import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TeamController } from './team.controller';
import { TeamSchema } from './team.model';
import { TeamService } from './team.service';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Team', schema: TeamSchema }])],
  controllers: [TeamController],
  providers: [TeamService],
  exports: [TeamService],
})
export class TeamModule {}

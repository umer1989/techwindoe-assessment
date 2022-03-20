import { TeamService } from './team.service';
import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { Team } from './team.model';

@Controller('team')
export class TeamController {
  constructor(private readonly teamService: TeamService) {}

  @Post(':companyId')
  async create(@Param('companyId') companyId: string, @Body('teamlead') teamlead: string): Promise<Team> {
    const generateId = await this.teamService.create(teamlead, companyId);
    return generateId;
  }

  @Get()
  async findAll(): Promise<Team[]> {
    return await this.teamService.getTeams();
  }
}

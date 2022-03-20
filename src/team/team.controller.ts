import { TeamService } from './team.service';
import { Body, Controller, Get, Param, Post } from '@nestjs/common';

@Controller('team')
export class TeamController {
  constructor(private readonly teamService: TeamService) {}

  @Post(':companyId')
  async create(
    @Param('companyId') companyId: string,
    @Body('teamlead') teamlead: string,
  ) {
    const generateId = await this.teamService.create(teamlead, companyId);
    return { id: generateId };
  }

  @Get()
  async findAll(): Promise<any> {
    return await this.teamService.getTeams();
  }
}

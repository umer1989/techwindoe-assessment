import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { User } from './company.model';
import { UsersService } from './company.service';
@Controller('company')
export class UsersController {
  constructor(private readonly userService: UsersService) {}

  @Post()
  async create(@Body('companyname') companyname: string, @Body('ceo') ceo: string, @Body('address') address: string, @Body('inceptiondate') inceptiondate: Date): Promise<object> {
    const generateId = await this.userService.create(companyname, ceo, address, inceptiondate);
    return { id: generateId };
  }

  @Get()
  async findAll(): Promise<User[]> {
    return await this.userService.getUsers();
  }

  @Get('getByName')
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  async findByName(@Query() query): Promise<User[]> {
    const { companyname } = query;
    const comapnyDetails = await this.userService.findByName(companyname);
    return comapnyDetails;
  }

  @Get('/getTeams')
  async getTeams(): Promise<object> {
    const comapnyDetails = await this.userService.getTeams();
    return { comapnyDetails };
  }

  @Get(':companyId')
  async findById(@Param('companyId') companyId: string): Promise<User> {
    const comapnyDetails = await this.userService.findOne(companyId);
    return comapnyDetails;
  }
}

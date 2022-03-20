import { Module } from '@nestjs/common';
import { UsersService } from './company.service';
import { UsersController } from './company.controller';
import { UserSchema } from './company.model';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'User', schema: UserSchema }])],
  controllers: [UsersController],
  providers: [UsersService],
  exports: [UsersService],
})
export class UsersModule {}

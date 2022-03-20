import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { TeamController } from './team/team.controller';
import { TeamModule } from './team/team.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    UsersModule,
    MongooseModule.forRoot(
      `mongodb+srv://${process.env.MONGO_ATLAS_USER}:${process.env.MONGO_ATLAS_PASSWORD}@cluster0.k4z5b.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`,
    ),
    TeamModule,
  ],
  controllers: [AppController, TeamController],
  providers: [AppService],
})
export class AppModule {}

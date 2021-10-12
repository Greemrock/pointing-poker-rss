import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { ConfigModule } from '@nestjs/config';
import { UsersModule } from './users/users.module';
import { User } from './users/user.model';
import { RoomsModule } from './rooms/rooms.module';
import { Room } from './rooms/room.model';
import { IssuesModule } from './issues/issues.module';
import { Issue } from './issues/issue.model';
import { SettingsModule } from './settings/settings.module';
import { Sets } from './settings/sets.model';
import { EventsModule } from './events/events.module';
import { UserResultsModule } from './userResults/userResults.module';
import { UserResult } from './userResults/userResult.model';
import { OverallResult } from './overallResults/overallResult.model';
import { VoteKick } from './voteKicks/voteKick.model';
import { OverallResultsModule } from './overallResults/overallResults.module';
import { VoteKicksModule } from './voteKicks/voteKicks.module';
@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: `.${process.env.NODE_ENV}.env`,
    }),
    SequelizeModule.forRoot({
      dialect: 'postgres',
      dialectOptions: {
        ssl: {
          require: true,
          rejectUnauthorized: false,
        },
      },
      host: 'ec2-52-0-93-3.compute-1.amazonaws.com',
      port: 5432,
      username: 'ytuepbgvxhwbsi',
      password:
        '65a2c34855ced522d94e4e1d7038ebbab133909f5377c3fc5c57dd0f1f388917',
      database: 'd6018k4gg86fim',
      models: [User, Room, Issue, Sets, UserResult, OverallResult, VoteKick],
      autoLoadModels: true,
    }),
    UsersModule,
    RoomsModule,
    IssuesModule,
    SettingsModule,
    EventsModule,
    UserResultsModule,
    OverallResultsModule,
    VoteKicksModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

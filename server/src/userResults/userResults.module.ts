import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { UserResult } from './userResult.model';
import { UserResultsController } from './userResults.controller';
import { UserResultsService } from './userResults.service';

@Module({
  imports: [SequelizeModule.forFeature([UserResult])],
  controllers: [UserResultsController],
  providers: [UserResultsService],
  exports: [UserResultsService],
})
export class UserResultsModule {}

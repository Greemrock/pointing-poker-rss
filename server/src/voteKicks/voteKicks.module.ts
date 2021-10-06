import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { VoteKick } from './voteKick.model';
import { VoteKicksController } from './voteKicks.controller';
import { VoteKicksService } from './voteKicks.service';

@Module({
  imports: [SequelizeModule.forFeature([VoteKick])],
  controllers: [VoteKicksController],
  providers: [VoteKicksService],
  exports: [VoteKicksService],
})
export class VoteKicksModule {}

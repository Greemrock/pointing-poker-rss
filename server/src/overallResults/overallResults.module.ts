import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { OverallResult } from './overallResult.model';
import { OverallResultsController } from './overallResults.controller';
import { OverallResultsService } from './overallResults.service';

@Module({
  imports: [SequelizeModule.forFeature([OverallResult])],
  controllers: [OverallResultsController],
  providers: [OverallResultsService],
  exports: [OverallResultsService],
})
export class OverallResultsModule {}

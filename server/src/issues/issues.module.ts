import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Issue } from './issue.model';
import { IssuesController } from './issues.controller';
import { IssuesService } from './issues.service';

@Module({
  imports: [SequelizeModule.forFeature([Issue])],
  controllers: [IssuesController],
  providers: [IssuesService],
  exports: [IssuesService],
})
export class IssuesModule {}

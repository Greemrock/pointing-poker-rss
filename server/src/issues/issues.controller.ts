import { Body, Controller, Get, Post, Delete, Param } from '@nestjs/common';
import { CreateIssueDto } from './dto/create-issue.dto';
import { IssuesService } from './issues.service';

@Controller('issues')
export class IssuesController {
  constructor(private issuesService: IssuesService) {}

  @Post()
  create(@Body() issueDto: CreateIssueDto) {
    return this.issuesService.createIssue(issueDto);
  }

  @Get()
  getAll() {
    return this.issuesService.getAllIssues();
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.issuesService.removeIssue(id);
  }
}

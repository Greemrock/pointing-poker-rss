import {
  Body,
  Controller,
  Get,
  Post,
  Delete,
  Param,
  Put,
} from '@nestjs/common';
import { CreateIssueDto, UpdateIssueDto } from './dto/create-issue.dto';
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

  @Put(':id')
  update(@Param('id') id: string, @Body() updateIssueDto: UpdateIssueDto) {
    return this.issuesService.updateIssue(id, updateIssueDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.issuesService.removeIssue(id);
  }
}

import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Issue } from './issue.model';
import { CreateIssueDto, UpdateIssueDto } from './dto/create-issue.dto';

@Injectable()
export class IssuesService {
  constructor(@InjectModel(Issue) private issueRepository: typeof Issue) {}

  async createIssue(dto: CreateIssueDto) {
    const issue = await this.issueRepository.create(dto);
    return issue;
  }

  async getAllIssues() {
    const issues = await this.issueRepository.findAll();
    return issues;
  }

  async updateIssue(id: string, dto: UpdateIssueDto) {
    await this.issueRepository.update(dto, {
      where: { id: id },
    });
    const issue = await this.issueRepository.findByPk(id);
    return issue;
  }

  async removeIssue(id: string) {
    await this.issueRepository.destroy({
      where: { id: id },
    });
    const issues = await this.issueRepository.findAll();
    return issues;
  }
}

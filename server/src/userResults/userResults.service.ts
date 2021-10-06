import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { UserResult } from './userResult.model';
import { User } from '../users/user.model';
import { Issue } from '../issues/issue.model';
import { Sets } from '../settings/sets.model';
import {
  CreateUserResultDto,
  UpdateUserResultDto,
} from './dto/create-userResult.dto';

@Injectable()
export class UserResultsService {
  constructor(
    @InjectModel(UserResult) private userResultRepository: typeof UserResult,
  ) {}

  async createUserResult(dto: CreateUserResultDto) {
    const userResult = await this.userResultRepository.create(dto);
    return userResult;
  }

  async getAllUserResults() {
    const userResults = await this.userResultRepository.findAll({
      include: [User, Issue, Sets],
    });
    return userResults;
  }

  async getOneUserResult(id: string) {
    const userResult = await this.userResultRepository.findByPk(id, {
      include: [User, Issue, Sets],
    });
    return userResult;
  }

  async updateUserResult(dto: UpdateUserResultDto) {
    await this.userResultRepository.update(dto, {
      where: { issueId: dto.issueId },
    });
    const userResult = await this.userResultRepository.findByPk(dto.issueId);
    return userResult;
  }

  async removeUserResult(id: string) {
    await this.userResultRepository.destroy({
      where: { issueId: id },
    });
    const userResults = await this.userResultRepository.findAll();
    return userResults;
  }
}

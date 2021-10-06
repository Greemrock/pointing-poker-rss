import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { OverallResult } from './overallResult.model';
import {
  CreateOverallResultDto,
  UpdateOverallResultDto,
} from './dto/create-overallResult.dto';

@Injectable()
export class OverallResultsService {
  constructor(
    @InjectModel(OverallResult)
    private overallResultRepository: typeof OverallResult,
  ) {}

  async createOverallResult(dto: CreateOverallResultDto) {
    const overallResult = await this.overallResultRepository.create(dto);
    return overallResult;
  }

  async getAllOverallResults() {
    const overallResults = await this.overallResultRepository.findAll();
    return overallResults;
  }

  async getOneOverallResult(id: string) {
    const overallResult = await this.overallResultRepository.findByPk(id);
    return overallResult;
  }

  async updateOverallResult(id: number, dto: UpdateOverallResultDto) {
    await this.overallResultRepository.update(dto, {
      where: { id: id },
    });
    const overallResult = await this.overallResultRepository.findByPk(id);
    return overallResult;
  }

  async removeOverallResult(id: string) {
    await this.overallResultRepository.destroy({
      where: { id: id },
    });
    const overallResults = await this.overallResultRepository.findAll();
    return overallResults;
  }
}

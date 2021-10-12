import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Sets } from './sets.model';
import { CreateSetsDto, UpdateSetsDto } from './dto/create-sets.dto';

@Injectable()
export class SettingsService {
  constructor(@InjectModel(Sets) private settingsRepository: typeof Sets) {}

  async createSets(dto: CreateSetsDto) {
    const sets = await this.settingsRepository.create(dto);
    return sets;
  }

  async getAllSettings() {
    const settings = await this.settingsRepository.findAll();
    return settings;
  }

  async updateSets(id: string, dto: UpdateSetsDto) {
    await this.settingsRepository.update(dto, {
      where: { id: id },
    });
    const sets = await this.settingsRepository.findByPk(id);
    return sets;
  }

  async removeSets(id: string) {
    await this.settingsRepository.destroy({
      where: { id: id },
    });
    const settings = await this.settingsRepository.findAll();
    return settings;
  }
}

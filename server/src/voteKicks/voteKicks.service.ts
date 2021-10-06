import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { VoteKick } from './voteKick.model';
import {
  CreateVoteKickDto,
  UpdateVoteKickDto,
} from './dto/create-voteKick.dto';

@Injectable()
export class VoteKicksService {
  constructor(
    @InjectModel(VoteKick) private voteKickRepository: typeof VoteKick,
  ) {}

  async createVoteKick() {
    const voteKick = await this.voteKickRepository.create();
    return voteKick;
  }

  async getAllVoteKicks() {
    const voteKick = await this.voteKickRepository.findAll();
    return voteKick;
  }

  async getOneVoteKick(id: string) {
    const voteKick = await this.voteKickRepository.findByPk(id);
    return voteKick;
  }

  async updateVoteKick(id: string, dto: UpdateVoteKickDto) {
    await this.voteKickRepository.update(dto, {
      where: { id: id },
    });
    const voteKick = await this.voteKickRepository.findByPk(id);
    return voteKick;
  }

  async removeVoteKick(id: string) {
    await this.voteKickRepository.destroy({
      where: { id: id },
    });
    const voteKick = await this.voteKickRepository.findAll();
    return voteKick;
  }
}

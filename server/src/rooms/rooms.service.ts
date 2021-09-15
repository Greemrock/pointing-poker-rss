import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Room } from './room.model';
import { User } from '../users/user.model';
import { Issue } from '../issues/issue.model';
import { Sets } from '../settings/sets.model';
import { CreateRoomDto, UpdateRoomDto } from './dto/create-room.dto';

@Injectable()
export class RoomsService {
  constructor(@InjectModel(Room) private roomRepository: typeof Room) {}

  async createRoom(dto: CreateRoomDto) {
    const room = await this.roomRepository.create(dto);
    return room;
  }

  async getAllRooms() {
    const rooms = await this.roomRepository.findAll({
      include: [User, Issue, Sets],
    });
    return rooms;
  }

  async updateRoom(id: number, dto: UpdateRoomDto) {
    await this.roomRepository.update(dto, {
      where: { id: id },
    });
    const room = await this.roomRepository.findByPk(id);
    return room;
  }

  async removeRoom(id: string) {
    await this.roomRepository.destroy({
      where: { id: id },
    });
    const rooms = await this.roomRepository.findAll();
    return rooms;
  }
}

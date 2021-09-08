import { Body, Controller, Get, Post, Delete, Param } from '@nestjs/common';
import { CreateRoomDto } from './dto/create-room.dto';
import { RoomsService } from './rooms.service';

@Controller('rooms')
export class RoomsController {
  constructor(private roomsService: RoomsService) {}

  @Post()
  create(@Body() roomDto: CreateRoomDto) {
    return this.roomsService.createRoom(roomDto);
  }

  @Get()
  getAll() {
    return this.roomsService.getAllRooms();
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.roomsService.removeRoom(id);
  }
}

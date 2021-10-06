import {
  Body,
  Controller,
  Get,
  Post,
  Delete,
  Param,
  Put,
} from '@nestjs/common';
import {
  CreateVoteKickDto,
  UpdateVoteKickDto,
} from './dto/create-voteKick.dto';
import { VoteKicksService } from './voteKicks.service';

@Controller('voteKicks')
export class VoteKicksController {
  constructor(private voteKicksService: VoteKicksService) {}

  @Post()
  create(@Body() voteKickDto: CreateVoteKickDto) {
    return this.voteKicksService.createVoteKick();
  }

  @Get()
  getAll() {
    return this.voteKicksService.getAllVoteKicks();
  }

  @Put(':id')
  update(
    @Param('id') id: string,
    @Body() updateVoteKickDto: UpdateVoteKickDto,
  ) {
    return this.voteKicksService.updateVoteKick(id, updateVoteKickDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.voteKicksService.removeVoteKick(id);
  }
}

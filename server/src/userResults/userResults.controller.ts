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
  CreateUserResultDto,
  UpdateUserResultDto,
} from './dto/create-userResult.dto';
import { UserResultsService } from './userResults.service';

@Controller('userResults')
export class UserResultsController {
  constructor(private userResultsService: UserResultsService) {}

  @Post()
  create(@Body() userResultDto: CreateUserResultDto) {
    return this.userResultsService.createUserResult(userResultDto);
  }

  @Get()
  getAll() {
    return this.userResultsService.getAllUserResults();
  }

  @Put(':id')
  update(
    @Param('id') id: number,
    @Body() updateUserResultDto: UpdateUserResultDto,
  ) {
    return this.userResultsService.updateUserResult(updateUserResultDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.userResultsService.removeUserResult(id);
  }
}

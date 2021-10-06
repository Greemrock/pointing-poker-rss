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
  CreateOverallResultDto,
  UpdateOverallResultDto,
} from './dto/create-overallResult.dto';
import { OverallResultsService } from './overallResults.service';

@Controller('overallResults')
export class OverallResultsController {
  constructor(private overallResultsService: OverallResultsService) {}

  @Post()
  create(@Body() overallResultDto: CreateOverallResultDto) {
    return this.overallResultsService.createOverallResult(overallResultDto);
  }

  @Get()
  getAll() {
    return this.overallResultsService.getAllOverallResults();
  }

  @Put(':id')
  update(
    @Param('id') id: number,
    @Body() updateOverallResultDto: UpdateOverallResultDto,
  ) {
    return this.overallResultsService.updateOverallResult(
      id,
      updateOverallResultDto,
    );
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.overallResultsService.removeOverallResult(id);
  }
}

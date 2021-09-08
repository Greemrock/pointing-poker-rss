import { Body, Controller, Get, Param, Post, Delete } from '@nestjs/common';
import { CreateSetsDto } from './dto/create-sets.dto';
import { SettingsService } from './settings.service';

@Controller('settings')
export class SettingsController {
  constructor(private settingsService: SettingsService) {}

  @Post()
  create(@Body() setsDto: CreateSetsDto) {
    return this.settingsService.createSets(setsDto);
  }

  @Get()
  getAll() {
    return this.settingsService.getAllSettings();
  }

  @Delete(':id')
  removeSets(@Param('id') id: string) {
    return this.settingsService.removeSets(id);
  }
}

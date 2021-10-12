import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Sets } from './sets.model';
import { SettingsController } from './settings.controller';
import { SettingsService } from './settings.service';

@Module({
  imports: [SequelizeModule.forFeature([Sets])],
  controllers: [SettingsController],
  providers: [SettingsService],
  exports: [SettingsService],
})
export class SettingsModule {}

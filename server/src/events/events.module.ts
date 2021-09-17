import { Module } from '@nestjs/common';
import { PokerGateway } from './poker.gateway';
import { IssuesModule } from 'src/issues/issues.module';
import { RoomsModule } from 'src/rooms/rooms.module';
import { SettingsModule } from 'src/settings/settings.module';
import { UsersModule } from 'src/users/users.module';
@Module({
  providers: [PokerGateway],
  imports: [IssuesModule, RoomsModule, SettingsModule, UsersModule],
})
export class EventsModule {}

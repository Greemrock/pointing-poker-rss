import { Logger } from '@nestjs/common';
import {
  OnGatewayConnection,
  OnGatewayDisconnect,
  OnGatewayInit,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';
import { IssuesService } from 'src/issues/issues.service';
import { RoomsService } from 'src/rooms/rooms.service';
import { SettingsService } from 'src/settings/settings.service';
import { CreateUserDto } from 'src/users/dto/create-user.dto';
import { UsersService } from 'src/users/users.service';

@WebSocketGateway()
export class PokerGateway
  implements OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect
{
  constructor(
    private IssuesService: IssuesService,
    private RoomsService: RoomsService,
    private SettingsService: SettingsService,
    private UsersService: UsersService,
  ) {}
  private logger: Logger = new Logger('PokerGateway');

  afterInit(server: Server) {
    this.logger.log('PokerGateway is Initialized!!!');
  }

  handleDisconnect(client: Socket) {
    this.logger.log(`Client disconnected: ${client.id}`);
  }
  async handleConnection(client: Socket, ...args: any[]) {
    this.logger.log(`Client connected: ${client.id}`);
    // this.logger.log(await this.IssuesService.getAllIssues());
    // this.logger.log(await this.SettingsService.getAllSettings());
    // this.logger.log(await this.UsersService.getAllUsers());
    // this.logger.log(await this.RoomsService.getAllRooms());
    // this.logger.log(await this.RoomsService.getOneRoom(14));
  }

  @WebSocketServer() wss: Server;

  @SubscribeMessage('msgToServer')
  handleMessage(
    client: Socket,
    message: { sender: string; job: string; room: string; message: string },
  ): void {
    this.wss.to(message.room).emit('msgToClient', message);
    this.logger.log(`${client.id}-${message.room}-${message.sender}`);
    this.logger.log(`${JSON.stringify(message)}`);
  }

  @SubscribeMessage('hostGame')
  async handleHostGame(client: Socket, user: CreateUserDto) {
    const roomInfo = await this.RoomsService.createRoom({
      roomName: 'New Game',
    });
    const userUpdated: CreateUserDto = {
      ...user,
      roomId: roomInfo.id,
    };
    await this.UsersService.createUser(userUpdated);
    client.emit('roomInfo', await this.RoomsService.getOneRoom(roomInfo.id));
  }

  @SubscribeMessage('joinRoom')
  handleJoinRoom(client: Socket, room: string) {
    client.join(room);
    client.emit('joinedRoom', room);
  }

  @SubscribeMessage('leaveRoom')
  handleLeaveRoom(client: Socket, room: string) {
    client.leave(room);
    client.emit('leavedRoom', room);
  }
}

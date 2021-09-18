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
import { UsersModule } from 'src/users/users.module';
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
  handleConnection(client: Socket, ...args: any[]) {
    this.logger.log(`Client connected: ${client.id}`);
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
    const roomData = await this.RoomsService.createRoom({
      roomName: 'New Game',
    });
    const userUpdated: CreateUserDto = {
      ...user,
      roomId: roomData.id,
      isAdmin: true,
    };
    const userInfo = await this.UsersService.createUser(userUpdated);
    const roomInfo = await this.RoomsService.getOneRoom(roomData.id);
    client.emit('roomInfo', userInfo, roomInfo);
    client.join(roomData.id);
  }

  @SubscribeMessage('joinGame')
  async handleJoinGame(client: Socket, user: CreateUserDto) {
    const userInfo = await this.UsersService.createUser(user);
    const roomInfo = await this.RoomsService.getOneRoom(user.roomId);
    client.emit('roomInfo', userInfo, roomInfo);
    client.join(user.roomId);
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

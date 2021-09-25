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
import {
  CreateIssueDto,
  UpdateIssueDto,
} from 'src/issues/dto/create-issue.dto';
import { IssuesService } from 'src/issues/issues.service';
import { RoomsService } from 'src/rooms/rooms.service';
import { SettingsService } from 'src/settings/settings.service';
import { CreateUserDto, DeleteUserDto } from 'src/users/dto/create-user.dto';
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
    client.join(roomData.id);
    client.emit('personalData', userInfo);
    client.emit('roomInfo', roomInfo);
  }

  @SubscribeMessage('joinGame')
  async handleJoinGame(client: Socket, user: CreateUserDto) {
    const userInfo = await this.UsersService.createUser(user);
    const roomInfo = await this.RoomsService.getOneRoom(user.roomId);
    client.join(user.roomId);
    client.emit('personalData', userInfo);
    this.wss.to(user.roomId).emit('roomInfo', roomInfo);
  }

  @SubscribeMessage('deleteUser')
  async handleDeleteUser(client: Socket, user: DeleteUserDto) {
    await this.UsersService.removeUser(user.id);
    const roomInfo = await this.RoomsService.getOneRoom(user.roomId);
    client.leave(user.roomId);
    this.wss.to(user.roomId).emit('allUsers', roomInfo.users);
  }

  @SubscribeMessage('addIssue')
  async handleAddIssue(client: Socket, issue: CreateIssueDto) {
    await this.IssuesService.createIssue(issue);
    const roomInfo = await this.RoomsService.getOneRoom(issue.roomId);
    this.wss.to(issue.roomId).emit('allIssues', roomInfo.issues);
    this.logger.log(`${JSON.stringify(issue)}`);
    this.logger.log(`${JSON.stringify(roomInfo)}`);
  }

  @SubscribeMessage('updateIssue')
  async handleUpdateIssue(client: Socket, issue: UpdateIssueDto) {
    await this.IssuesService.updateIssue(issue);
    const roomInfo = await this.RoomsService.getOneRoom(issue.roomId);
    this.wss.to(issue.roomId).emit('allIssues', roomInfo.issues);
    this.logger.log(`${JSON.stringify(issue)}`);
    this.logger.log(`${JSON.stringify(roomInfo)}`);
  }

  @SubscribeMessage('deleteIssue')
  async handleDeleteIssue(
    client: Socket,
    issue: { id: string; roomId: string },
  ) {
    await this.IssuesService.removeIssue(issue.id);
    const roomInfo = await this.RoomsService.getOneRoom(issue.roomId);
    this.wss.to(issue.roomId).emit('allIssues', roomInfo.issues);
    this.logger.log(`${JSON.stringify(roomInfo)}`);
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

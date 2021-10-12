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
import { UpdateRoomDto } from 'src/rooms/dto/create-room.dto';
import { RoomsService } from 'src/rooms/rooms.service';
import { CreateSetsDto } from 'src/settings/dto/create-sets.dto';
import { SettingsService } from 'src/settings/settings.service';
import {
  CreateUserResultDto,
  UpdateUserResultDto,
} from 'src/userResults/dto/create-userResult.dto';
import { UserResultsService } from 'src/userResults/userResults.service';
import {
  CreateUserDto,
  DeleteUserDto,
  KickUserDto,
} from 'src/users/dto/create-user.dto';
import { UsersService } from 'src/users/users.service';
import { UpdateVoteKickDto } from 'src/voteKicks/dto/create-voteKick.dto';
import { VoteKicksService } from 'src/voteKicks/voteKicks.service';

@WebSocketGateway()
export class PokerGateway
  implements OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect
{
  constructor(
    private IssuesService: IssuesService,
    private RoomsService: RoomsService,
    private SettingsService: SettingsService,
    private UsersService: UsersService,
    private VoteKicksService: VoteKicksService,
    private UserResultsService: UserResultsService,
  ) {}
  private logger: Logger = new Logger('PokerGateway');

  afterInit(server: Server) {
    this.logger.log('PokerGateway is Initialized!!!');
  }

  async handleDisconnect(client: Socket) {
    const user = await this.UsersService.removeUserByClient(client.id);
    const roomInfo = await this.RoomsService.getOneRoom(user.roomId);
    this.wss.to(user.roomId).emit('roomInfo', roomInfo);
    this.wss.to(user.roomId).emit('voteEnd', false, null, 'VOTE FAILED');
    this.logger.log(`Client disconnected: ${client.id}`);
    this.logger.log(`Client disconnected: ${JSON.stringify(user)}`);
    this.logger.log(`Client disconnected: ${JSON.stringify(roomInfo)}`);
  }

  handleConnection(client: Socket, ...args: any[]) {
    this.logger.log(`Client connected: ${client.id}`);
  }

  @WebSocketServer() wss: Server;
  //------------------------------------------CHAT------------------------------------------//
  @SubscribeMessage('msgToServer')
  async handleMessage(
    client: Socket,
    message: {
      id: string;
      name: string;
      surname: string;
      image: string | null;
      roomId: string;
      message: string;
    },
  ) {
    this.wss.to(message.roomId).emit('msgToClient', message);
    this.logger.log(`${client.id}-${message.roomId}-${message.message}`);
    this.logger.log(`${JSON.stringify(message)}`);
  }
  //------------------------------------------REGISTRATION------------------------------------------//
  @SubscribeMessage('hostGame')
  async handleHostGame(client: Socket, user: CreateUserDto) {
    const roomData = await this.RoomsService.createRoom({
      roomName: 'New Game',
    });
    const userUpdated: CreateUserDto = {
      ...user,
      roomId: roomData.id,
      isAdmin: true,
      clientId: client.id,
    };
    const userInfo = await this.UsersService.createUser(userUpdated);
    const roomInfo = await this.RoomsService.getOneRoom(roomData.id);
    client.join(roomData.id);
    client.emit('personalData', userInfo);
    client.emit('roomInfo', roomInfo);
  }

  @SubscribeMessage('joinGame')
  async handleJoinGame(client: Socket, user: CreateUserDto) {
    const userUpdated: CreateUserDto = {
      ...user,
      clientId: client.id,
    };
    const userInfo = await this.UsersService.createUser(userUpdated);
    const roomInfo = await this.RoomsService.getOneRoom(user.roomId);
    client.join(user.roomId);
    client.emit('personalData', userInfo);
    this.wss.to(user.roomId).emit('roomInfo', roomInfo);
  }

  @SubscribeMessage('deleteUser')
  async handleDeleteUser(
    client: Socket,
    user: { userId: string; roomId: string },
  ) {
    this.logger.log(`USER TO BE DELETED${JSON.stringify(user)}`);
    await this.UsersService.removeUser(user.userId);
  }
  //------------------------------------------ISSUES------------------------------------------//
  @SubscribeMessage('addIssue')
  async handleAddIssue(client: Socket, issue: CreateIssueDto) {
    await this.IssuesService.createIssue(issue);
    const roomInfo = await this.RoomsService.getOneRoom(issue.roomId);
    this.wss
      .to(issue.roomId)
      .emit('allIssues', roomInfo.issues, roomInfo.currentIssueId);
    this.logger.log(`${JSON.stringify(issue)}`);
    this.logger.log(`${JSON.stringify(roomInfo)}`);
  }

  @SubscribeMessage('updateIssue')
  async handleUpdateIssue(client: Socket, issue: UpdateIssueDto) {
    await this.IssuesService.updateIssue(issue.id, issue);
    const roomInfo = await this.RoomsService.getOneRoom(issue.roomId);
    this.wss
      .to(issue.roomId)
      .emit('allIssues', roomInfo.issues, roomInfo.currentIssueId);
    this.logger.log(`${JSON.stringify(issue)}`);
    this.logger.log(`${JSON.stringify(roomInfo)}`);
  }

  @SubscribeMessage('getIssues')
  async handleGetIssues(client: Socket, roomId: string) {
    const roomInfo = await this.RoomsService.getOneRoom(roomId);
    this.wss
      .to(roomId)
      .emit('allIssues', roomInfo.issues, roomInfo.currentIssueId);
    this.logger.log(`${JSON.stringify(roomInfo)}`);
  }

  @SubscribeMessage('getIssuesGame')
  async handleGetIssuesGame(client: Socket, roomId: string) {
    const roomInfo = await this.RoomsService.getOneRoom(roomId);
    this.wss
      .to(roomId)
      .emit('allIssuesGame', roomInfo.issues, roomInfo.currentIssueId);
    this.logger.log(`${JSON.stringify(roomInfo)}`);
  }

  @SubscribeMessage('deleteIssue')
  async handleDeleteIssue(
    client: Socket,
    issue: { id: string; roomId: string },
  ) {
    await this.IssuesService.removeIssue(issue.id);
    const roomInfo = await this.RoomsService.getOneRoom(issue.roomId);
    this.wss
      .to(issue.roomId)
      .emit('allIssues', roomInfo.issues, roomInfo.currentIssueId);
    this.logger.log(`${JSON.stringify(roomInfo)}`);
  }

  //------------------------------------------ROOM------------------------------------------//

  @SubscribeMessage('sendCurrentId')
  async handleSendCurrentId(
    client: Socket,
    data: { roomId: string; currentIssueId: string },
  ) {
    const room = await this.RoomsService.getOneRoom(data.roomId);
    this.logger.log(`${JSON.stringify(room)}`);
    const roomUpdated: UpdateRoomDto = {
      ...room,
      currentIssueId: data.currentIssueId,
    };
    await this.RoomsService.updateRoom(data.roomId, roomUpdated);

    this.wss.to(data.roomId).emit('changeCurrentId', data.currentIssueId);
  }

  //------------------------------------------VOTEKICK------------------------------------------//

  @SubscribeMessage('voteKick')
  async handleVoteKick(client: Socket, users: KickUserDto[]) {
    const voteKick = await this.VoteKicksService.createVoteKick();
    this.wss
      .to(users[0].roomId)
      .emit('voteStarted', true, users[0], users[1], voteKick.id);
    this.logger.log(`kicker:::::${JSON.stringify(users[0])}`);
    this.logger.log(`beingKicked:::::${JSON.stringify(users[1])}`);
    this.logger.log(`VoteKickId:::::${JSON.stringify(voteKick.id)}`);
  }

  @SubscribeMessage('voteYes')
  async handleVoteYes(
    client: Socket,
    data: {
      voteKickId: string;
      userQuantity: number;
      user: { roomId: string; userId: string };
    },
  ) {
    this.logger.log(`VoteKicDATA:::::${JSON.stringify(data)}`);
    const vote = await this.VoteKicksService.getOneVoteKick(data.voteKickId);
    const votePlus: UpdateVoteKickDto = {
      ...vote,
      counterYes: vote.counterYes + 1,
      allVoting: vote.allVoting + 1,
    };
    await this.VoteKicksService.updateVoteKick(data.voteKickId, votePlus);

    const voteCheck = await this.VoteKicksService.getOneVoteKick(
      data.voteKickId,
    );
    if (voteCheck.allVoting === data.userQuantity) {
      if (voteCheck.counterYes >= Math.floor(data.userQuantity / 2) + 1) {
        await this.handleDeleteUser(client, data.user);
        const roomInfo = await this.RoomsService.getOneRoom(data.user.roomId);
        this.wss
          .to(data.user.roomId)
          .emit('voteEnd', false, voteCheck, 'DELETED');
      }
      if (voteCheck.counterYes < Math.floor(data.userQuantity / 2) + 1) {
        this.wss
          .to(data.user.roomId)
          .emit('voteEnd', false, voteCheck, 'NOT DELETED');
      }
    }
    const roomInfo = await this.RoomsService.getOneRoom(data.user.roomId);
    this.wss.to(data.user.roomId).emit('roomInfo', roomInfo);
    this.logger.log(`roomInfo:::::${JSON.stringify(data.user.roomId)}`);
    this.logger.log(`VoteKickId:::::${JSON.stringify(data)}`);
    this.logger.log(`Vote ++ :::::${JSON.stringify(votePlus)}`);
  }

  @SubscribeMessage('voteNo')
  async handleVoteNo(
    client: Socket,
    data: {
      voteKickId: string;
      userQuantity: number;
      user: { roomId: string; userId: string };
    },
  ) {
    const vote = await this.VoteKicksService.getOneVoteKick(data.voteKickId);

    const votePlus: UpdateVoteKickDto = {
      ...vote,
      allVoting: vote.allVoting + 1,
    };
    await this.VoteKicksService.updateVoteKick(data.voteKickId, votePlus);
    const voteCheck = await this.VoteKicksService.getOneVoteKick(
      data.voteKickId,
    );
    if (voteCheck.allVoting === data.userQuantity) {
      if (voteCheck.counterYes >= Math.floor(data.userQuantity / 2) + 1) {
        await this.handleDeleteUser(client, data.user);
        this.wss
          .to(data.user.roomId)
          .emit('voteEnd', false, voteCheck, 'DELETED');
      }
      if (voteCheck.counterYes < Math.floor(data.userQuantity / 2) + 1) {
        this.wss
          .to(data.user.roomId)
          .emit('voteEnd', false, voteCheck, 'NOT DELETED');
      }
    }
    const roomInfo = await this.RoomsService.getOneRoom(data.user.roomId);
    this.wss.to(data.user.roomId).emit('roomInfo', roomInfo);
    this.logger.log(`VoteKickId:::::${JSON.stringify(data)}`);
    this.logger.log(`Vote ++ :::::${JSON.stringify(votePlus)}`);
  }

  //------------------------------------------USER-RESULTS------------------------------------------//

  @SubscribeMessage('userVote')
  async handleUserVote(client: Socket, userResult: CreateUserResultDto) {
    await this.UserResultsService.createUserResult(userResult);
  }

  @SubscribeMessage('reVote')
  async handleReVote(client: Socket, userResult: UpdateUserResultDto) {
    await this.UserResultsService.updateUserResult(userResult);
  }

  //------------------------------------------SETTINGS------------------------------------------//

  @SubscribeMessage('sendSettings')
  async handleAddSettings(client: Socket, sets: CreateSetsDto) {
    const settings = await this.SettingsService.createSets(sets);
    this.wss.to(sets.roomId).emit('returnSettings', settings);
  }

  //------------------------------------------OVERALL-RESULTS------------------------------------------//

  @SubscribeMessage('addOverallResult')
  async handleAddOverallResults(
    client: Socket,
    data: { issueId: string; roomId: string; cardNumber: number },
  ) {
    const issue = await this.IssuesService.getOneIssue(data.issueId);
    this.logger.log(`ADD ISSUE - DATA ${JSON.stringify(data)}`);
    this.logger.log(`ADD ISSUE - ISSUE ${JSON.stringify(issue)}`);
    issue.overall[data.cardNumber] += 1;
    this.logger.log(`${JSON.stringify(data)}`);
    const issueUpdated: UpdateIssueDto = {
      ...issue,
      overall: issue.overall,
    };
    await this.IssuesService.updateIssue(data.issueId, issueUpdated);
    this.wss.to(data.roomId).emit('overallInfo', issue.overall);
    this.logger.log(
      `ADD ISSUE ${JSON.stringify(issue)}, ${JSON.stringify(data)}`,
    );
  }

  @SubscribeMessage('getOverallResult')
  async handleGetOverallResults(
    client: Socket,
    data: { issueId: string; roomId: string },
  ) {
    const issue = await this.IssuesService.getOneIssue(data.issueId);
    this.wss.to(data.roomId).emit('issueRes', issue.overall);
    this.logger.log(`GET ISSUE ${issue.overall}, ${JSON.stringify(data)}`);
  }

  //------------------------------------------------GAME-----------------------------------------------//

  @SubscribeMessage('startGame')
  async handleStartGame(client: Socket, roomId: string) {
    this.wss.to(roomId).emit('isGameStarted', true);
    this.logger.log(`GAME STARTED`);
  }

  @SubscribeMessage('endGame')
  async handleEndGame(client: Socket, roomId: string) {
    this.wss.to(roomId).emit('isGameEnded', true);
    this.logger.log(`GAME ENDED`);
  }

  @SubscribeMessage('startTimer')
  async handleStartTimer(
    client: Socket,
    data: { roomId: string; currentId: string },
  ) {
    const issue = await this.IssuesService.getOneIssue(data.currentId);
    const issueUpdated: UpdateIssueDto = {
      ...issue,
      overall: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    };
    await this.IssuesService.updateIssue(data.currentId, issueUpdated);
    const userResults = await this.UserResultsService.removeUserResult(
      data.currentId,
    );
    this.wss.to(data.roomId).emit('isTimerStarted', true);
    this.logger.log(`TIMER STARTED`);
    this.logger.log(`${JSON.stringify(userResults)}`);
  }

  @SubscribeMessage('resetTimer')
  async handleResetTimer(client: Socket, roomId: string) {
    this.wss.to(roomId).emit('isTimerReset', true);
    this.logger.log(`TIMER ENDED`);
  }

  @SubscribeMessage('roundEnd')
  async handleRoundEnd(
    client: Socket,
    data: { roomId: string; currentId: string },
  ) {
    this.logger.log(`${data.roomId} ${data.currentId}`);
    const issue = await this.IssuesService.getOneIssue(data.currentId);
    const issueUpdated: UpdateIssueDto = {
      ...issue,
      isDone: true,
    };
    this.logger.log(`${JSON.stringify(issue)} ${JSON.stringify(issueUpdated)}`);
    await this.IssuesService.updateIssue(data.currentId, issueUpdated);
    this.wss.to(data.roomId).emit('userResults', issue.userResults, issue.id);
    this.logger.log(`TIMER ENDED`);
  }

  //---------------------------------------------------------------------------------------------------//
  @SubscribeMessage('joinRoom')
  handleJoinRoom(client: Socket, room: string) {
    client.join(room);
    client.emit('joinedRoom', room);
  }

  @SubscribeMessage('leaveRoom')
  async handleLeaveRoom(client: Socket, room: string) {
    client.leave(room);
    client.emit('leavedRoom', room);
    const user = await this.UsersService.removeUserByClient(client.id);
    const roomInfo = await this.RoomsService.getOneRoom(user.roomId);
    this.wss.to(user.roomId).emit('roomInfo', roomInfo);
    if (user.isAdmin === true) {
      this.wss.to(user.roomId).emit('adminLeft', '');
    }
  }
}

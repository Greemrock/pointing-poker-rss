export class CreateRoomDto {
  readonly roomName: string;
}

export class UpdateRoomDto {
  readonly id: string;
  readonly roomName: string;
  readonly currentIssueId: string;
}

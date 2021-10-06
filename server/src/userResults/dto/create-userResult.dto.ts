export class CreateUserResultDto {
  readonly issueId: string;
  readonly userId: string;
  readonly voteResult: string;
  readonly roomId: string;
  readonly cardType: string;
}

export class UpdateUserResultDto {
  readonly id: string;
  readonly issueId: string;
  readonly userId: string;
  readonly voteResult: string;
  readonly roomId: string;
  readonly cardType: string;
}

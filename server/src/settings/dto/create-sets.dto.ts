export class CreateSetsDto {
  readonly timer: string;
  readonly cardValue: string;
  readonly scoreType: string;
  readonly isTimerNeeded: boolean;
}

export class UpdateSetsDto {
  readonly timer: string;
  readonly cardValue: string;
  readonly scoreType: string;
  readonly isTimerNeeded: boolean;
}

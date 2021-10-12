export class CreateSetsDto {
  readonly minutes: number;
  readonly seconds: number;
  readonly deck: string;
  readonly isTimerNeeded: boolean;
  readonly roomId: string;
}

export class UpdateSetsDto {
  readonly id: string;
  readonly minutes: number;
  readonly seconds: number;
  readonly deck: string;
  readonly isTimerNeeded: boolean;
  readonly roomId: string;
}

export class CreateUserDto {
  readonly name: string;
  readonly surname: string;
  readonly job: string;
  readonly image: string;
  readonly isAdmin: boolean;
  readonly observer: boolean;
  readonly roomId: string;
  readonly clientId: string;
}

export class UpdateUserDto {
  readonly name: string;
}

export class DeleteUserDto {
  readonly id: string;
  readonly roomId: string;
}

export class KickUserDto {
  readonly id: string;
  readonly name: string;
  readonly surname: string;
  readonly job: string;
  readonly image: string;
  readonly isAdmin: boolean;
  readonly observer: boolean;
  readonly roomId: string;
}
